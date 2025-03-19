<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { fetchGitHubResults } from "../../lib/SearchService/GithubService";
  import { fetchYouTubeResults } from "../../lib/SearchService/YouTubeService";
  import { fetchGoogleResults } from "../../lib/SearchService/GoogleService";
  import { fetchStackOverflowResults } from "../../lib/SearchService/StackoverflowService";
  import {
    githubStore,
    googleStore,
    stackOverflowStore,
    youtubeStore,
  } from "../../lib/stores/resultsStore";
  import { resultsCountStore } from "../../lib/stores/countStore";

  let counts = {};
  let isLoading = {};
  let loadedTabs = {};

  const items = [
    {
      path: "/tabs/github",
      label: "GitHub",
      image: "../images/github.png",
      value: "github",
    },
    {
      path: "/tabs/google",
      label: "Google",
      image: "../images/google.png",
      value: "google",
    },
    {
      path: "/tabs/stackoverflow",
      label: "Stack Overflow",
      image: "../images/stack-overflow.png",
      value: "stackOverflow",
    },
    {
      path: "/tabs/youtube",
      label: "YouTube",
      image: "../images/youtube.png",
      value: "youtube",
    },
  ];

  const fetchData = async (query, tab) => {
    try {
      isLoading[tab] = true;
      let results;
      switch (tab) {
        case "/tabs/github":
          results = await fetchGitHubResults(query);
          githubStore.set(results);
          break;
        case "/tabs/google":
          results = await fetchGoogleResults(query);
          googleStore.set(results);
          break;
        case "/tabs/stackoverflow":
          const stackOverflowResults = await fetchStackOverflowResults(query);
          stackOverflowStore.set(stackOverflowResults);
          counts.stackOverflow = stackOverflowResults.length; // Ensure this is set correctly
          break;
        case "/tabs/youtube":
          results = await fetchYouTubeResults(query);
          youtubeStore.set(results);
          break;
      }
      counts[tab.slice(6)] = results.length; // Save result count (e.g., github -> githubCount)
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isLoading[tab] = false;
    }
  };

  const handleTabClick = async (path) => {
    const query = new URLSearchParams(window.location.search).get("query");
    const newPath = query ? `${path}?query=${encodeURIComponent(query)}` : path;
    goto(newPath);

    // Load data only if not already loaded
    if (!loadedTabs[path]) {
      loadedTabs[path] = true;
      await fetchData(query, path);
    }
  };

  onMount(async () => {
    const query = new URLSearchParams(window.location.search).get("query");
    const currentPath = $page.url.pathname;
    if (query && !loadedTabs[currentPath]) {
      loadedTabs[currentPath] = true;
      await fetchData(query, currentPath);
    }
  });

  resultsCountStore.subscribe((value) => {
    counts = value;
  });
</script>

<ul class="tabs text-left d-flex">
  {#each items as item}
    <li
      class={`tablinks d-flex align-items-center ${$page.url.pathname === item.path ? "active" : ""}`}
    >
      <img src={item.image} alt={item.label} />
      <span on:click={() => handleTabClick(item.path)}>
        {item.label}
        <div class="badge">{counts[item.value] || 0}</div>
      </span>
    </li>
  {/each}
</ul>

{#if isLoading[$page.url.pathname]}
  <div class="loader">
    <p>Loading data...</p>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
{/if}
