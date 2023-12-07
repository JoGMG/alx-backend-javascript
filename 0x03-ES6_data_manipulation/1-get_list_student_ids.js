export default function getListStudentIds(array) {
  let newArray = [];
  if (array instanceof Array) {
    newArray = array.map((item) => item.id);
  }

  return newArray;
}
