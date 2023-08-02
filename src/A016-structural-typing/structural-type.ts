type User = { username: string; password: string };
type VerifyUserFn = (user: User, sentValues: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'leobvardiero', password: '123456' };
const sentUser = {
  username: 'leobvardiero',
  password: '123456',
  permissions: '',
};

console.log(verifyUser(bdUser, sentUser));
