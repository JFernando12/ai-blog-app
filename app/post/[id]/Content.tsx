'use client';
import { Post } from '@prisma/client';
import React, { useState } from 'react';
import CategoryAndEdit from './CategoryAndEdit';
import { PostFormatted } from '@/app/types';
import Image from 'next/image';

type Props = {
  post: PostFormatted;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      {/* Migas de pan */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      {/* Contenido del post */}
      <CategoryAndEdit post={post} />
      <form action="">
        {/* Header */}
        <div>
          {isEditable ? (
            <div>
              <textarea />
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{post.title}</h3>
          )}
        </div>
        <div className="flex gap-3">
          <h5 className="font-semibold text-xs">By {post.author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>
        {/* IMAGE */}
        <div className="relative w-auto h-96 mt-2 mb-16">
          <Image
            fill
            alt={post.title}
            src={post.image}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </form>
    </div>
  );
};

export default Content;
