import {useQuery} from 'react-query';
import {http} from '../../axios/axiosConfig';
import {API_KEY, REQUEST_SERVER_URL} from '../../axios/serverConstants';
import {onError} from '../../../utils/catch';

const GetMovieCategoriesRequest = async () => {
  const data = await http
    .get(`${REQUEST_SERVER_URL}/genre/movie/list?api_key=${API_KEY}`)
    .catch(onError);
  return data;
};

export default function useGetMovieCategories() {
  return useQuery({
    queryKey: ['useGetMovieList'],
    queryFn: () => GetMovieCategoriesRequest(),
    cacheTime: 3 * 60 * 1000,
    // enabled: false, // Set this to false to disable this query from automatically running.
  });
}
