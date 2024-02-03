/**
 * When `success` is true, a resolved promise is returned with
 * the object {data: 'Successful response from the API' }.
 * Otherwise, the function is doing nothing
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
    }
  });
}

module.exports = getPaymentTokenFromAPI;
