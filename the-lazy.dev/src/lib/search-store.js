import { writable } from "svelte/store";


export function SearchStore() {
  return writable({
    query: '',
    results: []
  });
}