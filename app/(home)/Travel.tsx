import React from 'react';
import { Post } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';
import Card from 'app/(shared)/Card';

type Props = {
  travelPosts: Array<Post>;
};

const Travel = ({ travelPosts }: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      <div className="sm:grid grid-cols-3 grid-rows-2 gap-3 my-8">
        <Card
          post={travelPosts[0]}
          imageHeight="h-52"
          className="col-span-1 row-span-1 mt-8 sm:mt-0"
        />
        <Card
          post={travelPosts[1]}
          imageHeight="h-52"
          className="col-span-1 row-span-1 mt-8 sm:mt-0"
        />
        <Card
          post={travelPosts[2]}
          imageHeight="h-52"
          className="col-span-1 row-span-1 mt-8 sm:mt-0"
        />
        <Card
          post={travelPosts[3]}
          imageHeight="h-52 sm:h-96"
          className="sm:flex col-span-3 row-span-1 gap-3 items-center mt-8 sm:mt-0"
        />
      </div>
    </section>
  );
};

export default Travel;
