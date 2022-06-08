import { previousTagSearchAsPromise, previousNameSearchAsPromise, allStudentsAsPromise, studentsViewAsPromise } from '../stores';

let tag, name, all;

previousTagSearchAsPromise.subscribe(setTag);
previousNameSearchAsPromise.subscribe(setName);
allStudentsAsPromise.subscribe(setAll);

function setAll(value) {
  all = value;
}
function setName(value) {
  name = value;
};
function setTag(value) {
  tag = value;
};

export function getAverage(grades) {
    const total = 0;
    const sumTotal = grades.reduce(
      (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
      total
    );
    return sumTotal/grades.length;
  }

export function getStudent(students, details) {
  let index;
  const {id, tag} = details;

  let result = students.filter((student, i) => {
    let values = Object.values(student);
    if(values.find(value => value === id)){
      index = i;
      student.tags.push(tag);
      return student;
    }
  })
  return { id: index, student : result }
}

export function search(details) {
  const {input, type} = details;
  const isNameSearch = (type === "search_by_name");
  const isTagSearch = (type === "search_by_tag");
  let section;
  let result = [];

  if(isNameSearch && tag.length > 0) {
    section = filter(all, tag, 'search_by_tag');
  }
  else if(isTagSearch && name.length > 0) {
    section = filter(all, name, 'search_by_name');
  }

  if((isNameSearch && !tag) || (isTagSearch && !name)) {
    section = all;
  }

  result = filter(section, input, type)

  return result;

  function filter(students, term, type) {
    let result = [];
    const end = term.length;


    if(type === "search_by_tag") {
      // eslint-disable-next-line
      result = students.filter((student) => {
        const tags = student.tags;

        if(tags.length > 0 && term.length > 0) {
          for(const tag of tags) {
            if((tag.slice(0,end).toLowerCase()) === term && term.length > 0) {
              return student;
            }
          }
        }

      })
    }

    if(type === "search_by_name") {
      // eslint-disable-next-line
      result = students.filter((student) => {
        const first = student.firstName.toLowerCase();
        const last = student.lastName.toLowerCase();

        if(first.slice(0,end) === term || last.slice(0,end) === term) {
          return student;
        }

      })
    }

    if(result.length > 0) {
      return result;
    } else {
      return students;
    }

  }

}
