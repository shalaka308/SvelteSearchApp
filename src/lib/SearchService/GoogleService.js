import { API_KEYS } from '../../config'
import { fetchData } from './CommonfetchData';
const { GoogleApiKey, GoogleCseId, GoogleApiUrl } = API_KEYS;

export async function fetchGoogleResults(query) {
	const params = {
		q: query,
		key: GoogleApiKey,
		cx: GoogleCseId,
	};

	const items = await fetchData(GoogleApiUrl, params);

	return items.map((item) => ({
		title: item.title,
		link: item.link,
		description: item.snippet || '',
	}));
}
