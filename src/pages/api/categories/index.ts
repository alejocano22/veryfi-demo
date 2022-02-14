import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import axios from 'axios';
import cors from 'cors';
import { RewindIcon } from '@heroicons/react/outline';

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(cors())
  .post(async (req, res) => {
    try {
      const { session, startDate, endDate } = req.body;
      const response = await axios.get(
        `${process.env.VERYFI_API_URL}/categories/?include_accounting_tags=0&accounting_entry _type=debit&status=active&include_team=1&start_date=${startDate}&end_date=${endDate}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'CLIENT-ID': `${process.env.CLIENT_ID}`,
            'Veryfi-Session': session,
          },
        }
      );
      res.send(response.data);
    } catch (error) {
      // TODO define type for the response
      const errorMessage: {
        status: string;
        error: string;
      } = error.response.data;

      res.send(errorMessage);
    }
  });

export default handler;
