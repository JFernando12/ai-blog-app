import Image from 'next/image';
import { prisma } from './api/clients';

const getPosts = async () => {
  const posts = await prisma.post.findMany();
  console.log('posts', posts);
};

export default async function Home() {
  const posts = await getPosts();
  return <main className="px-10 leading-7"></main>;
}
