import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([resPhoto, resUser]) => {
      console.log(`${resPhoto.body} ${resUser.firstName} ${resUser.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
