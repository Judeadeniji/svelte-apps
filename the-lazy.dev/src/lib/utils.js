import { Http, Core } from "utiliti-js";

const { DateFilter } = Core;

export const http = new Http({
  retryDelay: 1000,
  retryAttempt: 5
});

export const df = new DateFilter();
