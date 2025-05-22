function getCurrentTime() {
  const now = new Date().toISOString();
  console.log('current time: ', now);
  return now;
}

export { getCurrentTime };
