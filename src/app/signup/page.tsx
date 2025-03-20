import { registerUser } from '@/features/auth/actions';
import React from 'react'

const SignUp = async () => {
    
    const user = await registerUser();
    console.log(user);

  return (
    // <RegisterationForm />
    <h1>Sign up</h1>
  )
}

export default SignUp;