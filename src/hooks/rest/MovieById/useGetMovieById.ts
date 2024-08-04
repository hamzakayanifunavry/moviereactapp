import {useQuery} from 'react-query';
import {http} from '../../axios/axiosConfig';
import {API_KEY, REQUEST_SERVER_URL} from '../../axios/serverConstants';
import {onError} from '../../../utils/catch';
interface IRequestGetMovieDetail {
  id: string;
}
const GetMovieByIdRequest = async (params: IRequestGetMovieDetail) => {
  const data = await http
    .get(`${REQUEST_SERVER_URL}/movie/${params.id}?api_key=${API_KEY}`)
    .catch(onError);
  return data;
};

export default function useGetMovieById(params: IRequestGetMovieDetail) {
  return useQuery({
    queryKey: ['useGetMovieList' + params.id],
    queryFn: () => GetMovieByIdRequest(params),
    cacheTime: 3 * 60 * 1000,
    // enabled: false, // Set this to false to disable this query from automatically running.
  });
}
