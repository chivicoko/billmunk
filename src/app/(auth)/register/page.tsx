"use client";

import AuthPagesHeader from "@/components/AuthPagesHeader";
import AuthPagesRightSide from "@/components/AuthPagesRightSide";
import ButtonOne from "@/components/button/ButtonOne";
import InputField from "@/components/inputs/InputField";
import InputOne from "@/components/inputs/InputOne";
import InputSelectField from "@/components/inputs/InputSelectField";
import OTPConfirmModal from "@/components/OTPConfirmModal";
import { registerSchema, RegisterType } from "@/features/auth/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />;
};

const RegisterPage = ({ data }: { data?: any }) => {
  const [isOTPOpen, setIsOTPOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");
  const [isOTPEntered, setIsOTPEntered] = useState(false);

  const openOTP = () => {
    if (!emailAddress) {
      setError("Enter the email address you registered with");
      return;
    } else if (emailAddress.length < 4 || !emailAddress.includes("@")) {
      setError("Invalid email address");
      return;
    } else {
      setError("");
      if (isOTPEntered) {
        toast.success(`Your email address has been verified!`, {
          className: "custom-toast-success w-fit",
          icon: "✅",
          duration: 3000,
        });
      }
      setIsOTPEntered(true);
      setIsOTPOpen((prev) => !prev);
    }
  };

  const cancelEmailVerification = () => {
    setError("");
    setIsOTPEntered(false);
    setIsOTPOpen(false);

    if (isOTPEntered) {
      toast.error(`Your email address has not been verified!`, {
        className: "custom-toast-error w-fit",
        icon: "❌",
        duration: 3000,
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: data,
  });

  const onFormSubmit = handleSubmit((data) => {
    alert("something hapened");
    console.log(data);
  });

  useEffect(() => {
    console.log({ errors, d: getValues() });
  }, [errors]);

  return (
    <div className="h-full min-h-screen w-full flex flex-col md:flex-row ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="order-2 md:order-1 w-full md:w-1/2 h-fit py-8 md:h-screen min-h-full flex items-center justify-center">
        <div className="flex flex-col gap-6 w-[90%] md:w-[85%]">
          <AuthPagesHeader />

          <div className="self-start">
            <h1 className="text-2xl font-semibold">Sign up</h1>
            <p className="text-base">
              Welcome back! Please enter your details.
            </p>
          </div>

          <div className="w-full">
            <form
              onSubmit={onFormSubmit}
              className="w-full space-y-2 md:space-y-3"
            >
              <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <div className="w-full md:w-1/2">
                  {/* <InputOne onChange={(e) => e.target.value} value={''} label='First Name' name="firstName" placeholderText='ex: John' /> */}
                  <InputField
                    {...register("first_name")}
                    // className="w-full h-[100px]"
                    label="First Name"
                    error={errors.first_name}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <InputField
                    {...register("last_name")}
                    label="Last Name"
                    error={errors.last_name}
                  />
                  {/* <InputOne onChange={(e) => e.target.value} value={''} label='Last Name' name="lastName" placeholderText='ex: Doe' /> */}
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <div className="w-full md:w-1/2">
                  {/* <InputField register={register} defaultValue={data?.email} onChange={(e) => setEmailAddress(e.target.value)} type='email' label='Email' name='email' error={errors.email} /> */}
                  <InputOne
                    required={true}
                    disabled={isOTPEntered}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={""}
                    label="Email"
                    name="email"
                    placeholderText="Enter your email address"
                  />
                  <div className="flex items-center justify-between">
                    {error ? (
                      <p className="text-center text-xs text-red-700">
                        {error}
                      </p>
                    ) : (
                      emailAddress &&
                      !isOTPEntered && (
                        <p className="text-center text-xs text-neutral-600">
                          Click the &apos;verify&apos; button to verify email
                        </p>
                      )
                    )}
                    {emailAddress && !isOTPEntered && (
                      <button
                        type="button"
                        onClick={openOTP}
                        className="px-2 text-sm"
                      >
                        Verify
                      </button>
                    )}
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    !isOTPEntered && emailAddress ? "pb-5" : ""
                  }`}
                >
                  <InputField
                    {...register("phone_number")}
                    label="Phone Number"
                    error={errors.phone_number}
                  />
                  {/* <InputOne onChange={(e) => e.target.value} value={''} label='Phone Number' name="phoneNumber" placeholderText='Enter your phone number' /> */}
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <div className="w-full md:w-1/3">
                  <InputField
                    {...register("city")}
                    label="City"
                    error={errors.city}
                  />
                  {/* <InputOne onChange={(e) => e.target.value} value={''} label='City' name="city" placeholderText='ex: NY City' /> */}
                </div>
                <div className="w-full md:w-1/3">
                  <InputField
                    {...register("state")}
                    label="State"
                    error={errors.state}
                  />
                  {/* <InputOne onChange={(e) => e.target.value} value={''} label='State' name="state" placeholderText='ex: NY' /> */}
                </div>
                <div className="w-full md:w-1/3">
                  <InputField
                    {...register("country")}
                    label="Country"
                    error={errors.country}
                  />
                  {/* <InputOne onChange={(e) => e.target.value} value={''} label='Country' name="country" placeholderText='Enter your country' /> */}
                </div>
              </div>

              <div className="w-full">
                <InputField
                  {...register("home_address")}
                  label="Home Address"
                  error={errors.home_address}
                />
                {/* <InputOne onChange={(e) => e.target.value} value={''} label='Home Address' name="homeAddress" placeholderText='Enter your home address' /> */}
              </div>

              <div className="w-full flex items-center gap-2 md:gap-3">
                <div className="w-1/2">
                  <InputSelectField
                    register={register}
                    defaultValue={data?.gender}
                    label="Gender"
                    name="gender"
                    error={errors.gender}
                    valueArray={["male", "female"]}
                  />
                  {/* <InputSelect register={register} onChange={(e) => e.target.value} valueArray={['Male', 'Female']} label='Gender' name="gender" /> */}
                </div>
                <div className="w-1/2">
                  <InputField
                    {...register("date_of_birth")}
                    type="date"
                    label="Date of Birth"
                    error={errors.date_of_birth}
                  />
                  {/* <InputOne onChange={(e) => e.target.value} value={''} label='Date of Birth' name="dob" placeholderText='yyyy-mm-dd' /> */}
                </div>
              </div>

              <ButtonOne
                type="submit"
                classes="py-2 px-16 w-full"
                btnText1="Sign up"
              />

              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>

        {isOTPOpen && (
          <OTPConfirmModal
            cancelEmailVerification={cancelEmailVerification}
            handleModalToggle={openOTP}
            emailAddress={emailAddress}
          />
        )}
      </div>

      <AuthPagesRightSide />
    </div>
  );
};

export default RegisterPage;
