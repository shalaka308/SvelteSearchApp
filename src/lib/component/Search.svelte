<script>
  // import { fetchAllResults } from "./fetchAllResults"; // Import function to fetch results
  import Loader from "./Loader.svelte";
  import { goto } from "$app/navigation"; // Import navigation utility for routing
  import { page } from "$app/stores"; // To get the current path from the URL
  import { fetchGitHubResults } from "../SearchService/GithubService";
  import { githubStore } from "../stores/resultsStore";
  import { resultsCountStore } from "../stores/countStore";

  let query = ""; // Holds the search query entered by the user
  let isLoading = false;

  async function search() {
  if (!query) {
    alert("Please enter a search request.");
    return;
  }
  isLoading = true;
  try {
    // Fetch GitHub results first
    const githubResults = await fetchGitHubResults(query);
    githubStore.set(githubResults); // Store GitHub results immediately
    resultsCountStore.update((counts) => ({
      ...counts,
      github: githubResults.length
    }));

    // Navigate to GitHub tab with query
    const searchPath = `/tabs/github?query=${encodeURIComponent(query)}`;
    await goto(searchPath);
  } catch (error) {
    console.error("Error fetching results:", error);
  } finally {
    isLoading = false;
  }
}

</script>

<div class="search mb-5">
  <input
    id="search-input"
    class="search-input"
    type="text"
    bind:value={query}
    placeholder="Enter a search query"
  /> <!--Bind the input value to the `query` variable-->
  <button class="btn" id="btn-search" on:click={search}>
    <img class="search-icon" src="/images/search.png" alt="Search Button" />
    <Loader {isLoading} />
  </button>
</div>
