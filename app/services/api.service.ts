import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  const {data} = await axios.get<IPost[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  console.log(data);
  return data;
};
const usePosts = () => useQuery(['key'], () => fetchPosts());
export default usePosts;
