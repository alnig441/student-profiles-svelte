import { writable } from 'svelte/store';

// export const localStore = (key, value) => {
//
//   const exists = localStorage.getItem(key);
//   if(!exists) {
//     localStorage.setItem(key, value);
//   }
//
//   const {subscribe, set, update} = writable(exists);
//
//   return {
//     subscribe,
//     set: (value) => {
//       return set(updateLocalStorage(key,value));
//     },
//     update: () => {
//       return set(updateLocalStorage(key));
//     }
//   }
// }
//
// function updateLocalStorage(key, value) {
//   if(!value && value !== 0) {
//     value = parseInt(localStorage.getItem(key)) + 1;
//   }
//   localStorage.setItem(key, value)
//   return value;
// }
