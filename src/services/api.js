const BASE_URL = 'https://api.tfl.gov.uk';

// fetch tube line status from TfL API
async function fetchTubeStatus() {
  const fullUrl = `${BASE_URL}/Line/Mode/tube/Status?detail=true`;
  try {
    const response = await fetch(fullUrl);
    const rawApidata = await response.json();
    return rawApidata;
  } catch (error) {
    console.error('error fetching data from TFL API:', error);
    return [];
  }
}

// parse raw API data into clean structure
function parseLineData(rawApidata) {
  const parsedData = rawApidata.map((line) => {
    const status = line.lineStatuses?.[0] || {};
    return {
      id: line.id,
      name: line.name,
      severity: status.statusSeverity,
      severityDescription: status.statusSeverityDescription,
      reason: status.reason || null,
    };
  });
  return parsedData;
}

// get only lines with alerts/disruptions
function getAlerts(parsedData) {
  return parsedData.filter((line) => line.reason && line.reason.trim() !== '');
}

export { fetchTubeStatus, parseLineData, getAlerts };
