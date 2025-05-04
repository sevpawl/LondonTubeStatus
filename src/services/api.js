import { CoinsIcon } from 'lucide-react';

function fetchTubeStatus(mode = 'tube') {
  const BASE_URL = 'https://api.tfl.gov.uk';
  const queryParams = '?detail=true';
  const endpoint = `/Line/Mode/${mode}/Status`;
  const fullUrl = `${BASE_URL}${endpoint}${queryParams}`;

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

// process data

// get status severity and description

function getStatusDescriptions(data) {
  console.log('status descriptions:', data);

  const x = data.map((line) => line.lineStatuses[0].reason).filter(Boolean);
  console.log(x);
  return x;
}

// count disruptions

function countStatusDisruptions(data) {
  const statusCounts = {
    goodService: 0,
    minorDelays: 0,
    severeDelays: 0,
    partClosure: 0,
    planned: 0,
    suspended: 0,
  };

  data.forEach((line) => {
    const statusDescription = line.lineStatuses[0].statusSeverityDescription.toLowerCase();

    if (statusDescription.includes('good service')) {
      statusCounts.goodService++;
    } else if (statusDescription.includes('minor delays')) {
      statusCounts.minorDelays++;
    } else if (statusDescription.includes('severe delays')) {
      statusCounts.severeDelays++;
    } else if (statusDescription.includes('part closure')) {
      statusCounts.partClosure++;
    } else if (statusDescription.includes('planned')) {
      statusCounts.planned++;
    } else if (statusDescription.includes('suspended')) {
      statusCounts.suspended++;
    }
  });

  console.log('status counts: ', statusCounts);
  return statusCounts;
}

export { fetchTubeStatus, countStatusDisruptions, getStatusDescriptions };

fetchTubeStatus().then((data) => {
  countStatusDisruptions(data);
  console.log('here is the the data: ', data);
  getStatusDescriptions(data);
});
