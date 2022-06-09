import { writable, derived   } from 'svelte/store';
import { localStore } from './localStore';

export const  studentsViewAsPromise = writable([]),
              previousTagSearchAsPromise = writable(''),
              previousNameSearchAsPromise = writable(''),
              allStudentsAsPromise = localStore("allStudents")
