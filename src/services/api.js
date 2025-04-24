function fetchTubeStatus(mode = 'tube') {
  const BASE_URL = 'https://api.tfl.gov.uk/line/mode/tube/status';
  const queryParams = '?detail=true';
  const endpoint = `/Line/Mode/${mode}/Status`;
  let fullUrl = `${BASE_URL}${endpoint}${queryParams}`;

  console.log('fetching tube statuses');
  return fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log('success: ', data);
      return data;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
}

export default fetchTubeStatus;
