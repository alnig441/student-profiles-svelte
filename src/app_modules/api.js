import { studentsViewAsPromise, allStudentsAsPromise } from '../stores';
import { getAverage } from './utilities';

export const API = function() {

  async function getStudents() {

    const URL = 'https://api.hatchways.io/assessment/students';
    const RESPONSE = await fetch(URL);
    const RESULT = await RESPONSE.json();
    let population = RESULT.students;

    for(var student in population) {
      if(population[student]) {
        population[student].tags = [];
        population[student].average = getAverage(population[student].grades);
      }
    }
    studentsViewAsPromise.set(population);
    allStudentsAsPromise.set(population);

    return;

  }

  return {getStudents: getStudents };

}()
