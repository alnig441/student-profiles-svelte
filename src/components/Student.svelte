<script>
import { onMount, tick, afterUpdate} from 'svelte';
import Tag from './Tag.svelte';
import Grade from './Grade.svelte';
import AddTag from './AddTag.svelte';
import { getStudent } from '../app_modules/utilities';
import { studentsViewAsPromise } from '../stores';

export let students;

let tags = 'a array of tags';
let grades = 'an array of grades';
let toggle = false;
let currentId;
let allStudents;


function addTag(e) {
  let {id , student} = getStudent(students, e.detail);
  students[id] = student[0];
  studentsViewAsPromise.set(students);
}

function toggleGrades(id) {
  currentId = id;
  if(toggle) {
    toggle = false;
  } else {
    toggle = true;
  }
}

</script>

{#each students as student, i }
  <div id={student.email} class="student grid-container">
    <div class="grid-item picture">
      <img src={student.pic} alt='student picture'>
    </div>
    <div class="grid-item details">
      <h1 id="name">{student.firstName} {student.lastName}</h1>
      <p id="email">Email: {student.email}</p>
      <p id="company">Company: {student.company}</p>
      <p id="skill">Skill: {student.skill}</p>
      <p id="average">Average: {student.average}%</p>
    </div>
    <div class="grid-item collapsible" on:click={toggleGrades(student.id)}>
    {#if toggle && student.id === currentId }
      <span>-</span>
    {:else}
      <span>+</span>
    {/if}
    </div>
    <div class="grid-item empty-left"></div>
    <div class="grid-item grades" >
    {#if toggle && student.id === currentId }
      <Grade grades={student.grades}/>
    {/if}
    </div>
    <div class="grid-item empty-right"></div>
    <div class="grid-item empty-left"></div>
    <div class="grid-item tags">
      <div>
        <Tag tags={student.tags} />
      </div>
      <AddTag email={student.email} type="text" placeholder="Add a tag" on:tag={addTag} />
    </div>
    <div class="grid-item empty-right"></div>
  </div>
{/each}
