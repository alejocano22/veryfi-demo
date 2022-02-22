import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import axios from 'axios';
import cors from 'cors';

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(cors())
  .post(async (req, res) => {
    try {
      const { session, startDate, endDate } = req.body;
      const response = await axios.get(
        `${process.env.VERYFI_API_URL}/tags/?include_accounting_tags=0&accounting_entry_type=debit&status=active&orderby=name&include_team=1&start_date=${startDate}&end_date=${endDate}`,
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
      res.send({
        status: error.response.data.status,
        error: error.response.data.error,
      });
    }
  });

export default handler;
