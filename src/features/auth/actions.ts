'use server';

import { currentUserInfo } from '../../../data';
import axios from 'axios';
import { sendApiRequest } from '../../lib/api';

const AUTH_URL = 'api/v1/auth';

export const requestEmailOTP = async () => {
    const response = await sendApiRequest(
        'post',
        `${process.env.PAYFLEX_API_URL}/${AUTH_URL}/request-code`,
        {
            "email" : "victor.c.okoye@gmail.com"
        }
    );

    console.log(response);
};

export const verifyEmail = async () => {
    const response = await sendApiRequest(
        'post',
        `${process.env.PAYFLEX_API_URL}/${AUTH_URL}/verify-email`,
        {
            "email" : "victor.c.okoye@gmail.com",
            "code": "8746"
        }
    );

    console.log(response);
};

export const registerUser = async () => {
    const response = await sendApiRequest(
        'post',
        `${process.env.PAYFLEX_API_URL}/${AUTH_URL}/register`,
        currentUserInfo
    );

    console.log(response);
};

export const loginUser = async () => {
    const response = await sendApiRequest(
        'post',
        `${process.env.PAYFLEX_API_URL}/${AUTH_URL}/login`,
        {
            "email": "victor.c.okoye@gmail.com",
            "password": "12345678"
        }
    );

    console.log(response);
};

export const resetPassword = async () => {
    const response = await sendApiRequest(
        'post',
        `${process.env.PAYFLEX_API_URL}/${AUTH_URL}/password-reset-otp`,
        {
            "email": "victor.c.okoye@gmail.com",
        }
    );

    console.log(response);
};

export const verifyPasswordReset = async () => {
    const response = await sendApiRequest(
        'post',
        `${process.env.PAYFLEX_API_URL}/${AUTH_URL}/verify-password-reset-otp`,
        {
            "email": "victor.c.okoye@gmail.com",
            "code": "1527"
        }
    );

    console.log(response);
};

export const updatePassword = async () => {
    const response = await sendApiRequest(
        'post',
        `${process.env.PAYFLEX_API_URL}/${AUTH_URL}/update-password`,
        {
            "email": "victor.c.okoye@gmail.com",
            "code": "1527"
        }
    );

    console.log(response);
};





























































































// for dummyJson api
export const getDummyJsonProducts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DummyJson_API_URL}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching products: ', error);
      throw error;
    }
};
//   getDummyJsonProducts();
  
export const getDummyJsonProductById = async (id: number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DummyJson_API_URL}/${id}`);
    //   console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by id: ', error);
        throw error;
    }
};
