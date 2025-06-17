const BASE_URL = 'https://api.tfl.gov.uk';

// fetch status for all lines
async function fetchTubeStatus(mode = 'tube') {
  const fullUrl = `${BASE_URL}/Line/Mode/${mode}/Status?detail=true`;
  try {
    const response = await fetch(fullUrl);
    const data = response.json();
    console.log(data);
    return data;
  }
  catch (error) {
    console.log('error fetching status for all lines: ', error);
    console.log ( wgw)
  }
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
  return lineStatus;
}

// get status description by line

function getStatusDescriptions(data) {
  const x = data.map((line) => line.lineStatuses[0].reason).filter(Boolean);
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
  console.log('disruption counts: ', statusCounts);
  return statusCounts;
}

export {
  fetchTubeStatus,
  countStatusDisruptions,
  getStatusByLine,
  getStatusDescriptions,
};
