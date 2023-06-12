import React from 'react';
import Content from './Content';
import { prisma } from '@/app/api/clients';
import { PostFormatted } from '@/app/types';

type Props = {
  params: { id: string };
};

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    return null;
  }

  const postFormatted = {
    ...post,
    createdAt: post?.createdAt.toISOString(),
    updatedAt: post?.updatedAt.toISOString(),
  };

  return postFormatted;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: PostFormatted | null = await getPost(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="px-10 leading-7">
      <Content post={post} />
    </main>
  );
};

export default Post;
