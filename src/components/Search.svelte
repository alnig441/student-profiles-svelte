<script>

import { createEventDispatcher } from 'svelte';

export let id, type, placeholder;

const dispatch = createEventDispatcher();

function onInput(e) {
  dispatch("input", { input: e.target.value , type: id})
}

</script>

<form {id} on:submit|preventDefault >
  <input {type} {placeholder} on:keyup={onInput}/>
</form>
