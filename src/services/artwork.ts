import axios from 'axios';
import {API_URL} from '.';

export const artworkQueries = {
  artworks: '/artworks',
};

export const getArtworksService = async () => {
  const response = await axios.get(`${API_URL}${artworkQueries.artworks}`);
  return response;
};

export const getMoreArtworkService = async (nextPageUrl: string) => {
  const response = await axios.get(nextPageUrl);
  return response;
};
