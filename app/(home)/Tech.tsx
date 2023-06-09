import { Post } from '@prisma/client';
import React from 'react';
import Card from 'app/(shared)/Card';

type Props = {
  techPosts: Array<Post>;
};

const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex gap-3 my-8 items-center">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest News in Technology</p>
      </div>

      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPosts[0]}
          isLongForm
        />
        <Card
          className="col-span-1 row-span-1 flex gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={techPosts[1]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 flex gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={techPosts[2]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 flex gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          post={techPosts[3]}
          isSmallCard
        />
      </div>
    </section>
  );
};

export default Tech;
