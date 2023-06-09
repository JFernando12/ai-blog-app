import React from 'react';
import { Post } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';
import Card from 'app/(shared)/Card';

type Props = {
  otherPosts: Array<Post>;
};

const Other = ({ otherPosts }: Props) => {
  return (
    <section className="mt-10 mb-16">
      <hr className="border-1" />
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 grid-rows-2 gap-7">
        <Card
          post={otherPosts[0]}
          imageHeight="h-64"
          className="col-span-1 row-span-1 mt-8 sm:mt-0"
        />
        <Card
          post={otherPosts[1]}
          imageHeight="h-64"
          className="col-span-1 row-span-1 mt-8 sm:mt-0"
        />
        <Card
          post={otherPosts[2]}
          imageHeight="h-64"
          className="col-span-1 row-span-1 mt-8 sm:mt-0"
        />
        <Card
          post={otherPosts[3]}
          imageHeight="h-64"
          className="col-span-1 row-span-1 mt-8 sm:mt-0"
        />
      </div>
    </section>
  );
};

export default Other;
