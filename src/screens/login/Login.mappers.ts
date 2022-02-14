import { userI } from 'src/redux/user/userInterfaces';

export const responseToModel = (user: any) => {
  return {
    error: user['error'],
    id: user['id'],
    firstName: user['first_name'],
    lastName: user['last_name'],
    email: user['email'],
    username: user['username'],
    companyName: user['company_name'],
    created: user['created'],
    session: user['session'],
    status: user['status'],
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
    username: user.username,
    companyName: user.companyName,
    created: user.created,
    session: user.session,
    status: user.status,
    type: user.type,
  };
};
