import { userI } from 'src/redux/user/user.types';

export const userResponseToModel = (user: any) => {
  return {
    error: user['error'],
    id: user['id'],
    firstName: user['first_name'],
    lastName: user['last_name'],
    email: user['email'],
    companyName: user['company_name'],
    session: user['session'],
    type: user['type'],
  };
};

export const userToModel = (user: any): userI => {
  return {
    error: user.error,
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    companyName: user.companyName,
    session: user.session,
    type: user.type,
  };
};
