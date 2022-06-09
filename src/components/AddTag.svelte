<script>
import { createEventDispatcher } from 'svelte';

export let type, placeholder, email ;

const dispatch = createEventDispatcher();

function add(e) {
  const key = e.key.toLowerCase();
  const value = e.target.value;
  const id = e.target.attributes['email'].value;

  if(key === 'enter') {
    e.preventDefault();
    e.target.value = "";
    dispatch('tag', { tag: value, id: id });
  }
}

</script>
<form id="add_a_tag">
  <input {email} {type} {placeholder} on:keypress={add}/>
</form>
