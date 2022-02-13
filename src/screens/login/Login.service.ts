import axios from 'axios';

export const loginService = async (data: any) => {
  const response = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/login`,
    data
  );

  return response.data;

  // console.log('in Login.service.ts', response.data);
  // return null;
};
