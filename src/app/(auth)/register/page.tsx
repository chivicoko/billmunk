"use client"

import ButtonLinkOne from '@/components/button/ButtonLinkOne';
import InputOne from '@/components/inputs/InputOne';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='h-full min-h-screen w-full flex flex-col md:flex-row '>
        <div className='order-2 md:order-1 w-full md:w-1/2 h-fit py-8 md:h-screen min-h-full flex items-center justify-center'>
            <div className="flex flex-col gap-6 w-[90%] md:w-[50%]">
                <div className="self-start flex items-center gap-1">
                    <span className="relative size-12 px-3">
                        <Image
                            src="/images/LAPO_Logo_2022-removebg-preview 1.svg"
                            alt="Lapo's Logo"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </span>
                    <h1 className='text-2xl font-bold'>Horizone</h1>
                </div>

                <div className="self-start">
                    <h1 className='text-3xl font-semibold'>Sign up</h1>
                    <p className='text-base'>Welcome back! Please enter your details.</p>
                </div>

                <div className="w-full">
                    <form className="w-full space-y-2 md:space-y-3">
                        <div className="w-full flex items-center gap-2 md:gap-3">
                            <div className="w-1/2">
                                <InputOne onChange={(e) => e.target.value} value={''} label='First Name' name="firstName" placeholderText='ex: John' />
                            </div>
                            <div className="w-1/2">
                                <InputOne onChange={(e) => e.target.value} value={''} label='Last Name' name="lastName" placeholderText='ex: Doe' />
                            </div>
                        </div>

                        <div className="w-full">
                            <InputOne onChange={(e) => e.target.value} value={''} label='Address' name="address" placeholderText='Enter your specific address' />
                        </div>

                        <div className="w-full flex items-center gap-2 md:gap-3">
                            <div className="w-1/2">
                                <InputOne onChange={(e) => e.target.value} value={''} label='State' name="state" placeholderText='ex: NY' />
                            </div>
                            <div className="w-1/2">
                                <InputOne onChange={(e) => e.target.value} value={''} label='Postal Code' name="postal-code" placeholderText='ex: 11101' />
                            </div>
                        </div>

                        <div className="w-full flex items-center gap-2 md:gap-3">
                            <div className="w-1/2">
                                <InputOne onChange={(e) => e.target.value} value={''} label='Date of Birth' name="dob" placeholderText='yyyy-mm-dd' />
                            </div>
                            <div className="w-1/2">
                                <InputOne onChange={(e) => e.target.value} value={''} label='SSN' name="ssn" placeholderText='ex: 1234' />
                            </div>
                        </div>

                        <div className="w-full">
                            <InputOne onChange={(e) => e.target.value} value={''} label='Email' name="email" placeholderText='Enter your email' />
                        </div>
                        <div className="w-full mb-3">
                            <InputOne onChange={(e) => e.target.value} value={''} label='Password' name="password" placeholderText='Enter your password' />
                        </div>
                        
                        <ButtonLinkOne href='/' classes='py-2 px-16 w-full' btnText1='Sign up' />
                        
                        <p className='text-center text-sm'>Already have an account? <Link href='/login' className='text-blue-600'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>

        <div className='order-1 md:order-2 w-full md:w-1/2 h-fit py-6 md:h-screen min-h-full bg-[#f3f6fa] flex items-center justify-end'>
            <div className="relative w-[90%] h-[15vh] md:h-[80vh] pl-3 border-[4px] border-r-0 border-neutral-800 rounded-s-xl">
                <Image
                    src="/images/maneja-1.png"
                    alt="Lapo's Logo"
                    fill
                    priority
                    className="object-cover rounded-s-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>
    </div>
  )
}

export default RegisterPage;