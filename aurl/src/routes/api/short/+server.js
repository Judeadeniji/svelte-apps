// Expiration time for the cached video information (1 hour)
const expirationTime = 60 * 60;

// Load cache data;
let cacheData = {};

class Cache {
  constructor(options) {
    this.options = {
      stdTTL: expirationTime,
      ...options
    };
  }

  get(key) {
    const value = cacheData[key];
    if (value) {
      if (this.options.checkperiod && value.__expires <= Date.now()) {
        delete cacheData[key];
        return undefined;
      }
      return value;
    }
    return undefined;
  }

  set(key, value, ttl = this.options.stdTTL) {
    const expires = ttl * 1000 + Date.now();
    cacheData[key] = value;
    cacheData[key].__expires = expires;
    return true;
  }
}
