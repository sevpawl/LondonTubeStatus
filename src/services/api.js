function fetchTubeStatus(mode = 'tube') {
  const BASE_URL = 'https://api.tfl.gov.uk';
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

// process data

// get status severity and description

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

  const statusSeverity = lineStatuses[0].statusSeverity;
  const statusDescription = lineStatuses[0].statusSeverityDescription;

  // make status descriptions lowercase
  const statusDescriptionLower = statusDescription.lower();

  if (statusDescriptionLower.includes('good service')) {
    goodService += 1;
  } else if (statusDescriptionLower.includes('minor delays')) {
    minorDelays += 1;
  } else if (statusDescriptionLower.includes('severe delays')) {
    severeDelays += 1;
  } else if (statusDescriptionLower.includes('part closure')) {
    partClosure += 1;
  } else if (statusDescriptionLower.includes('planned')) {
    planned += 1;
  } else if (statusDescriptionLower.includes('suspended')) {
    suspended += 1;
  }

  console.log('good service: ', goodService);
  console.log('minor delays: ', minorDelays);
  return statusCounts;
}

export default { fetchTubeStatus, countStatusDisruptions };
