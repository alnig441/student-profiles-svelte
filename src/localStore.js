import { writable } from 'svelte/store';

export const localStore = (key, value) => {

  const exists = JSON.parse(localStorage.getItem(key));
  if(!exists) {
    localStorage.setItem(key, value);
  }

  const {subscribe, set, update} = writable(exists);

  return {
    subscribe,
    set: (value) => {
      return set(updateLocalStorage(key,value));
    },
    update
  }
}

function updateLocalStorage(key, value) {

  let serialzed = (typeof value === "object") ? JSON.stringify(value) : value;
  localStorage.setItem(key, serialzed);
  return value;
}
