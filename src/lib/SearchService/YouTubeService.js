import { API_KEYS } from '../../config'
import { fetchData } from './CommonfetchData';
const { YouTubeApiKey, YouTubeApiUrl } = API_KEYS;

export async function fetchYouTubeResults(query) {
	  console.log('Fetching YouTube results for:', query);

	  if (!query || query.trim() === '') {
        console.warn('Query is empty or invalid. Aborting fetch.');
        return []; // Return an empty array for invalid queries
    }

	const params = {
		part: 'snippet',
		type: 'video',
		q: query,
		key: YouTubeApiKey,
		maxResults: 20,
	};

	const items = await fetchData(YouTubeApiUrl, params);

	return items.map((item) => ({
		title: item.snippet.title,
		thumbnail: item.snippet.thumbnails.default.url,
		description: item.snippet.description,
		link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
	}));
}
