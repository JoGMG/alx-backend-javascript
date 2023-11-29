import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resUser, resPhoto) => (
      {
        status: resUser.status,
        value: resUser.status === 'fulfilled' ? resUser.value : String(resUser.reason)},
      {
        status: resPhoto.status,
        value: resPhoto.status === 'fulfilled' ? resPhoto.value : String(resPhoto.reason)
      }
    ));
}
