<script>
  import { githubStore } from '../../../lib/stores/resultsStore';
  import DisplayResults from '../../../lib/component/DisplayResults.svelte';

  let results = [];

  // Subscribe to the GitHub store
  githubStore.subscribe((value) => {
    results = value;
  });
</script>
<div class="container">
  <div class="row d-flex justify-content-center">
<div id="GitHub" class="tabcontent" >
  {#if results.length > 0}
    <DisplayResults {results} source="GitHub" />
  {:else}
    <p>No GitHub results found.</p>
  {/if}
</div>
</div>
</div>