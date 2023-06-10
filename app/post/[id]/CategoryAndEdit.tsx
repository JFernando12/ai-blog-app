import React from 'react';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { PostFormatted } from '@/app/types';

type Props = {
  post: PostFormatted;
  isEditable?: boolean;
};

const CategoryAndEdit = ({ post, isEditable }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post.category}
      </h4>
      <div>
        {isEditable ? (
          <button>
            <XMarkIcon className="h=6 w-6 text-accent-red" />
          </button>
        ) : (
          <button>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
