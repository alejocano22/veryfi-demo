import axios from 'axios';
import Cookie from "js-cookie";

export const loginService = async (data: any) => {
  const response = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/login`,
    data
  );
  return response.data;
};

export const logoutService = async (session: any) => {
  const response = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/logout`,
    {
      session,
    });
  Cookie.set("veryfiSession", '');
  return response.data;
};