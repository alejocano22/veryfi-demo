import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import {
  responseToModel,
  userToModel,
} from './../../../screens/login/Login.mappers';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginService } from '../../../screens/login/Login.service';

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    session: {
      maxAge: 15 * 60, // 15 mins
    },
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
            const user = responseToModel(response);

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
    callbacks: {
      jwt: async ({ token, user, account }) => {
        if (user) {
          token.error = user.error;
          token.id = user.id;
          token.firstName = user.firstName;
          token.lastName = user.lastName;
          token.username = user.username;
          token.companyName = user.companyName;
          token.created = user.created;
          token.session = user.session;
          token.status = user.status;
          token.type = user.type;
        }
        return Promise.resolve(token);
      },
      session: async ({ session, user, token }) => {
        const userData = userToModel(token);
        session.user = userData as any;
        return Promise.resolve(session);
      },
    },
  });

export default authHandler;
