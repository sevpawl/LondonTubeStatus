function setLastUpdated() {
  const now = new Date().toISOString();
  localStorage.setItem('lastUpdated', now);
  console.log('current time: ', now);
}

function getLastUpdated() {
  const lastUpdated = localStorage.getItem('lastUpdated');
  console.log('last updated set to: ', lastUpdated);
  return lastUpdated ? new Date(lastUpdated) : null;
}

export { getLastUpdated, setLastUpdated };
