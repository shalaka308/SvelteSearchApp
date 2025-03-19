This is a search application built using Svelte. It allows users to search for results from multiple sources such as GitHub, Google, Stack Overflow, and YouTube. The application fetches data from various APIs and displays the results dynamically.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the application, including custom styles and Bootstrap.
- **Bootstrap**: For responsive design and layout.
- **Svelte**: For building the user interface and managing state.
- **axios**: Axios is a promise-based HTTP Client for node.js and the browser

## Prerequisites

- Node.js and npm should be installed.

## Features
*Multi-source search*: You can search across multiple platforms, including GitHub, Google, Stack Overflow, and YouTube.
*Tab-based navigation*: The results are displayed in separate tabs for each source.
*Search and Filter*: Users can enter a search query and view relevant results from each source.
*Dynamic Loading*: Data for each tab is fetched only when the user clicks on the respective tab (delay loading feature).
*Loader State*: A loading spinner appears while the data is being fetched for the active tab

## Steps
npm install - Install Dependencies
-This command will install the necessary dependencies defined in the package.json file.

npm run dev - Run the Development Server
-This command starts the development server and serves the application locally.

## API keys for services are stored in environment files.

## Search.svelte
The search component where users input their query. It triggers the search by calling the fetchAllResults function, which fetches results from GitHub, Google, Stack Overflow, and YouTube. The results are displayed in their respective tabs.
*Functionality:*
Takes user input for search queries.
Displays a loading indicator while fetching results.
Navigates to the GitHub tab (or other tabs depending on the user’s click).

## fetchAllResults.js
This code defines a centralized function (fetchAllResults) that handles the process of fetching search results from four different services (GitHub, Google, Stack Overflow, and YouTube) and then updates the application state accordingly.

## Tabs.svelte
This component displays the tabs for the different platforms (GitHub, Google, Stack Overflow, and YouTube). Each tab corresponds to a different search source.

*Functionality:*
Manages the active tab.
Calls the fetchAllResults function when a tab is clicked, fetching results dynamically.
Displays a loading indicator when results are being fetched for the selected tab.

## Tab Components (GitHubTab.svelte, GoogleTab.svelte, StackOverflowTab.svelte, YouTubeTab.svelte)
Each tab component subscribes to a store for the respective search platform's results. The components display search results once the data is fetched and available.

*Functionality:*
Each component subscribes to its own store (e.g., githubStore, googleStore, etc.).
It conditionally displays results or a "no results" message based on the data received.
It uses DisplayResults.svelte to format and show the fetched data.

## DisplayResults.svelte
This component is responsible for displaying the search results in a formatted layout. It accepts the results data as a prop and formats it into a list of clickable items (e.g., names, descriptions, URLs).

## fetchAllResults.js
A utility file containing the logic for fetching data from all search services (GitHub, Google, Stack Overflow, YouTube) in parallel. It updates the respective Svelte stores with the fetched data.

## SearchService (GitHubService.js, YouTubeService.js, GoogleService.js, StackOverflowService.js)
These service files contain the individual functions for interacting with the APIs of GitHub, YouTube, Google, and Stack Overflow. Each service file exports a function that fetches data for the respective platform.

## Store (resultsStore.js, countStore.js)
resultsStore.js: Stores the search results for each platform.
countStore.js: Stores the count of results for each platform.

src/
|-routes
├── components/
│   ├── Search.svelte
│   ├── Tabs.svelte
│   ├── DisplayResults.svelte
│   ├── Loader.svelte
├── stores/
│   ├── resultsStore.js
│   ├── countStore.js
├── SearchService/
│   ├── GitHubService.js
│   ├── YouTubeService.js
│   ├── GoogleService.js
│   ├── StackOverflowService.js
│   ├── fetchAllResults.js
├── tabs/
│   ├── GitHubTab.svelte
│   ├── GoogleTab.svelte
│   ├── StackOverflowTab.svelte
│   ├── YouTubeTab.svelte
│   ├── tabs.svelte
└── css/
    ├── styles.css
