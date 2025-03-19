// src/services/CommonfetchData.js

import axios from 'axios'; //axios library is imported to make HTTP requests

export async function fetchData(url, params, headers) {
    try {
        const response = await axios.get(url, { params, headers });
        const data = response.data;

        if (!data.items) {
            console.error('No items found in response:', data.error);
            return [];
        }

        return data.items;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

