function fetchTubeStatus(mode = 'tube') {
  const BASE_URL = 'https://api.tfl.gov.uk';
  const queryParams = '?detail=true';
  const endpoint = `/Line/Mode/${mode}/Status`;
  const fullUrl = `${BASE_URL}${endpoint}${queryParams}`;

  return fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log('fetch tube status success: ', data);
      return data;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
}

// process data

// get status severity by line

function getStatusByLine(data) {
  const lineStatus = data.map((line) => {
    if (line.lineStatuses && line.lineStatuses.length > 0) {
      return line.lineStatuses[0].reason;
    }
    return 'unknown';
  });
  console.log('statuses by line:', data);
  return lineStatus;
}

// get status description by line

function getStatusDescriptions(data) {
  const x = data.map((line) => line.lineStatuses[0].reason).filter(Boolean);
  console.log('status descriptions:', x);
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
    const statusDescription =
      line.lineStatuses[0].statusSeverityDescription.toLowerCase();

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

export {
  fetchTubeStatus,
  countStatusDisruptions,
  getStatusByLine,
  getStatusDescriptions,
};

fetchTubeStatus().then((data) => {
  countStatusDisruptions(data);
  getStatusDescriptions(data);
});
