import React from 'react';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { PostFormatted } from '@/app/types';

type Props = {
  post: PostFormatted;
  isEditable?: boolean;
  handleIsEditable: (isEditable: boolean) => void;
};

const CategoryAndEdit = ({ post, isEditable, handleIsEditable }: Props) => {
  const handleEnableEditing = () => {
    console.log('Enable editing');
    handleIsEditable(true);
  };

  const handleDisableEditing = () => {
    console.log('Disable editing');
    handleIsEditable(false);
  };

  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post.category}
      </h4>
      <div>
        {isEditable ? (
          <button onClick={handleDisableEditing}>
            <XMarkIcon className="h=6 w-6 text-accent-red" />
          </button>
        ) : (
          <button onClick={handleEnableEditing}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
