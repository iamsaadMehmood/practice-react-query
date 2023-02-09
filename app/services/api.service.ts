import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {IPost} from '../models/IPost';

const fetchPosts = async () => {
  const {data} = await axios.get<IPost[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  console.log(data);
  return data;
};
const usePosts = () => useQuery(['key'], () => fetchPosts());
export default usePosts;
