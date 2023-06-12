import React from 'react';
import Content from './Content';
import { prisma } from '@/app/api/clients';
import { PostFormatted } from '@/app/types';
import Sidebar from '@/app/(shared)/Sidebar';

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
    <main className="md:flex px-10 leading-7 gap-10 mb-5">
      <div className="basis-3/4">
        <Content post={post} />
      </div>
      <div className="basis-1/4">
        <Sidebar />
      </div>
    </main>
  );
};

export default Post;
