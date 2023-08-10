import { Http, Core } from "utiliti-js";

const { DateFilter } = Core;

const http = new Http();

const addCacheControl = (request, next) => {
  request.header['cache-control'] = 'public, max-age=604800';
  request.header['age'] = 603000;
  return next(request);
};

http.addInterceptor(addCacheControl);

const df = new DateFilter();

export {
  http,
  df
};