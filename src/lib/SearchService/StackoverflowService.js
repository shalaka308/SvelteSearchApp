
import { API_KEYS } from '../../config'
import { fetchData } from './CommonfetchData';

const { StackOverflowKey, StackOverflowApiUrl } = API_KEYS;

export async function fetchStackOverflowResults(query) {
	  console.log('Fetching fetchStackOverflowResults results for:', query);

	const params = {
		order: 'desc',
		sort: 'activity',
		intitle: query,
		site: 'stackoverflow',
		key: StackOverflowKey,
		filter: '!9_bDDxJY5', // Use a filter that includes the body field
	};

	const items = await fetchData(StackOverflowApiUrl, params);

	return items.map((item) => ({
		title: item.title,
		description: item.body ? item.body.substring(0, 100) : '', // Snippet from body content
		link: item.link,
	}));
}