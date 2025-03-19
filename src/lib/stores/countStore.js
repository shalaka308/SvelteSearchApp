import { writable } from 'svelte/store';
export const resultsCountStore = writable({
    github: 0,
    google: 0,
    stackOverflow: 0,
    youtube: 0,
});