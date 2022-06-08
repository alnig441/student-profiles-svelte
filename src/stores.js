import { writable, derived   } from 'svelte/store';
// import { localStore } from './localStore';

export const  studentsViewAsPromise = writable([]),
              previousTagSearchAsPromise = writable(''),
              previousNameSearchAsPromise = writable(''),
              allStudentsAsPromise = writable([])
              // nextSentenceAsPromise = localStore('nextSentence'),
              // sentencesAsPromise = writable([]),
              // correctSentenceAsPromise = derived([sentencesAsPromise, nextSentenceAsPromise], (value) => {
              //   return (value[0][value[1]])
              // })
