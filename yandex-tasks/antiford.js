module.exports = function(originalFunction, timeInterval, maxRequests) {
  const requestMap = new Map();

  return function(ip, timestamp, ...args) {
    if (!requestMap.has(ip)) {
      requestMap.set(ip, [{ count: 1, timestamp }]);
    } else {
      const requests = requestMap.get(ip);
      const currentTime = timestamp;

      while (requests.length > 0 && currentTime - requests[0].timestamp > timeInterval) {
        requests.shift();
      }

      if (requests.length >= maxRequests) {
        console.log(`IP ${ip} отправлен в бан`);
        return;
      }

      requests.push({ count: requests.length + 1, timestamp: currentTime });
    }

    originalFunction(...args);
  };
};