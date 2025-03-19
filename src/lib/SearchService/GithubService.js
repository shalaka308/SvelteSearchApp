import { API_KEYS } from '../../config';
import { fetchData } from './CommonfetchData';
const { GithubToken, GitHubApiUrl } = API_KEYS;
export async function fetchGitHubResults(query) {
  const params = {
    q: query,
  };

  const headers = {
    Authorization: `token ${GithubToken}`,
  };

  //fetch data from the GitHub API and store it in the items variable.
  const items = await fetchData(GitHubApiUrl, params, headers);
console.log(items);
  return items.map((item) => ({
    title: item.full_name,
    description: item.description,
    link: item.html_url,
  }));
}
