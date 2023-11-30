import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const resPhoto = await uploadPhoto();
    const resUser = await createUser();
    res = {
      photo: resPhoto,
      user: resUser,
    };
  } catch (err) {
    res = {
      photo: null,
      user: null,
    };
  }

  return res;
}
