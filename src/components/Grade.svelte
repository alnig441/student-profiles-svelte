<script>
export let grades;


</script>
<table>
  <tbody>
  {#each grades as grade, i}
    <tr >
      <td >Test {i + 1}</td>
      <td >{grade}%</td>
    </tr>
    {/each}
  </tbody>
</table>
