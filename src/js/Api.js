import axios from 'axios'

let response = null
getApi() {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
      params: {
        'start':'1',
        'limit':'50',
        'convert':'USD'
      }
    })
  }
  catch (ex) {
    response = null
    // error
    console.log(ex)
    reject(ex)
  }
  if (response) {
    // success
    const json = response.data
    console.log(json)
    resolve(json)
  }
};
