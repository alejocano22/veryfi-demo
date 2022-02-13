import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginService } from '../../../screens/login/Login.service';

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials, req) {
          const response = await loginService({
            email: credentials.username,
            password: credentials.password,
          });
          if (!response.error) {
            const user = {
              name: response['first_name'],
              email: response['email'],
            };
            return user;
          } else {
            throw '/login';
          }
        },
      }),
    ],
    pages: {
      signIn: '/login',
      signOut: '/',
    },
  });

export default authHandler;
