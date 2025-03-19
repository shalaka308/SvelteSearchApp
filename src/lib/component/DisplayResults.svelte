<script>
  export let results = [];
  export let source = '';
</script>

{#if !results || results.length == 0}
  <p>No results found for {source}.</p>
{:else}
  <ul class="ul-list">
    {#each results as result (result.link)}
      <li>
        <div class="d-flex">
          {#if result.thumbnail}
            <div class="flex-shrink-0">
              <img src={result.thumbnail} alt="Thumbnail" />
            </div>
          {/if}
          <div class="flex-grow-1 ms-3">
            <a href={result.link} target="_blank">{result.title}</a>
            {#if result.description}
              <div class="snippet">
               <span>{result.description.substring(0, 100)}...</span>
              </div>
            {/if}
          </div>
        </div>
      </li>
    {/each}
  </ul>
{/if}