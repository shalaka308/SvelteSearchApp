<script>
   import { stackOverflowStore } from "../../../lib/stores/resultsStore";
   import DisplayResults from "../../../lib/component/DisplayResults.svelte";
 
   let results = [];
 
   // Subscribe to the stackOverflow store
   stackOverflowStore.subscribe((value) => {
     results = value;
   });
 </script>
 
 <div class="container">
   <div class="row d-flex justify-content-center">
     <div id="YouTube" class="tabcontent">
       {#if results.length > 0}
         <DisplayResults {results} source="google" />
       {:else}
         <p>No stackOverflow results found.</p>
       {/if}
     </div>
   </div>
 </div>
 