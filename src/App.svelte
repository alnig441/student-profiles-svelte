<script>
import { onMount } from 'svelte';
import Search from './components/Search.svelte';
import Student from './components/Student.svelte';
import { API } from './app_modules/api';
import { search } from './app_modules/utilities';
import { studentsViewAsPromise, previousTagSearchAsPromise, previousNameSearchAsPromise } from './stores';


let students = ''

onMount(() => {
	API.getStudents()
})

studentsViewAsPromise.subscribe(setStudents);

function setStudents(value) {
	students = value;
}

function onKeyup(e) {
	const {input, type} = e.detail;
	const details = e.detail;
	(type === "search_by_tag") ? previousTagSearchAsPromise.set(input) : previousNameSearchAsPromise.set(input);
	students = search(details);
}

</script>

<main>
	<div id="search" >
		<Search id="search_by_name" type="text" placeholder="Search by name" on:input={onKeyup} />
		<Search id="search_by_tag" type="text" placeholder="Search by tag" on:input={onKeyup}/>
	</div>
	<Student {students}/>
</main>

<style>

</style>
