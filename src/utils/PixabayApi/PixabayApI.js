import axios from 'axios';

const API_KEY = '18376090-d7378f6abd5315284a04e80ad';
const BASE_URL = 'https://pixabay.com/api';

function PixabayApiRequest(userQuery = '', page = 1, per_page = 12, image_type = 'photo', orientation = 'horizontal') {
  axios.defaults.baseURL = BASE_URL;
  const request = `/?key=${API_KEY}&q=${userQuery}&page=${page}&per_page=${per_page}&image_type=${image_type}&orientation=${orientation}`;

  return axios(request)
    .then(response => {
      if (response.status !== 200) {
        console.log('response', response);
        console.log('response.data', response.data);
        console.log('response.status', response.status);
        console.log('response.statusText', response.statusText);
        console.log('response.headers', response.headers);
        console.log('response.config', response.config);
      }

      return response;
    })
    .catch(error => console.log('error', error));
}

export default PixabayApiRequest;
