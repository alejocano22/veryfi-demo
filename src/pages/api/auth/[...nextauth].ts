import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { userResponseToModel, userToModel } from '@redux/user/mappers';
import { loginService } from '@redux/user/services';

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    session: {
      maxAge: 15 * 60, // 15 mins
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Username', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials, req) {
          const response = await loginService({
            email: credentials.username,
            password: credentials.password,
          });
          if (!response.error) {
            return userResponseToModel(response);
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
          token.companyName = user.companyName;
          token.session = user.session;
          token.type = user.type;
        }
        return Promise.resolve(token);
      },
      session: async ({ session, user, token }) => {
        session.user = userToModel(token);
        return Promise.resolve(session);
      },
    },
  });

export default authHandler;
