
//file contains a writable store to manage and share the search results across the components.

import { writable } from 'svelte/store';

//writable store holds the search results fetched from search function.
// These stores are initialized as empty arrays and will be populated with data from their respective search functions.

export const githubStore = writable([]);
export const googleStore = writable([]);
export const stackOverflowStore = writable([]);
export const youtubeStore = writable([]);