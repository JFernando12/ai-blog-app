import { prisma } from './api/clients';
import { Post } from '@prisma/client';
import Trending from 'app/(home)/Trending';
import Tech from 'app/(home)/Tech';
import Travel from 'app/(home)/Travel';
import Other from 'app/(home)/Other';
import Subscribe from 'app/(shared)/Subscribe';

const getPosts = async () => {
  const posts = await prisma.post.findMany();
  const postsWithImageModified = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );
  return postsWithImageModified;
};

const formatPosts = async () => {
  const posts = await getPosts();

  const trendingPosts: Array<Post> = [];
  const techPosts: Array<Post> = [];
  const travelPosts: Array<Post> = [];
  const otherPosts: Array<Post> = [];

  posts.forEach((post: Post, i: number) => {
    if (i < 4) {
      trendingPosts.push(post);
    }
    if (post?.category === 'Tech') {
      techPosts.push(post);
    } else if (post?.category === 'Travel') {
      travelPosts.push(post);
    } else {
      otherPosts.push(post);
    }
  });

  return [trendingPosts, techPosts, travelPosts, otherPosts];
};

export default async function Home() {
  const [trendingPosts, techPosts, travelPosts, otherPosts] =
    await formatPosts();

  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts} />
      <Tech techPosts={techPosts} />
      <Travel travelPosts={travelPosts} />
      <Other otherPosts={otherPosts} />
      <div className="hidden sm:block">
        <Subscribe />
      </div>
    </main>
  );
}
