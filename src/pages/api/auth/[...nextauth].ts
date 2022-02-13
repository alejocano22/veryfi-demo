import { useAppDispatch } from '@redux-hooks';
import { addUser } from '@redux/user/slice';
import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginService } from '../../../screens/login/Login.service';
import { AppStore } from '../../../redux/store';

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
              error: null,
              id: null,
              firstName: response['first_name'],
              lastName: response['last_name'],
              email: response['email'],
              username: null,
              companyName: null,
              created: null,
              session: response['session'],
              status: null,
              type: null,
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
    callbacks: {
      jwt: async ({ token, user, account }) => {
        if (user) {
          token.error = user.error;
          token.id = user.id;
          token.firstName = user.firstName;
          token.username = user.username;
          token.companyName = user.companyName;
          token.created = user.created;
          token.session = user.session;
          token.status = user.status;
          token.type = user.type;
        }

        return Promise.resolve(token);
      },
      session: async ({ session, token }) => {
        const userData = {
          error: token.error,
          id: token.id,
          firstName: token.firstName,
          username: token.username,
          companyName: token.companyName,
          created: token.created,
          session: token.session,
          status: token.status,
          type: token.type,
        };

        session.user = userData; //sending payload as session

        return Promise.resolve(session);
      },
    },
  });

export default authHandler;
