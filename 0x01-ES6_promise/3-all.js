import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise
  	.all([photo, user])
    .then(([resPhoto, resUser]) => {
			console.log(`${resPhoto.body} ${resUser.firstName} ${resUser.lastName}`);
		})
		.catch(() => {
			console.log('Signup system offline');
		});
}
