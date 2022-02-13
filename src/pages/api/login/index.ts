import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import axios from 'axios';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(cors())
  .post(async (req, res) => {
    try {
      const response = await axios.post(
        `${process.env.VERYFI_API_URL}/accounts/sign-in`,
        req.body,
        {
          headers: {
            'Content-Type': 'application/json',
            'CLIENT-ID': `${process.env.CLIENT_ID}`,
            AUTHORIZATION: `uuid ${uuidv4()}`,
          },
        }
      );
      res.send(response.data);
    } catch (error) {
      // TODO define type for the response
      const errorMessage: {
        status: string;
        error: string;
        session: string;
      } = error.response.data;
      errorMessage.session = null;
      res.send(errorMessage);
    }
  });

export default handler;
