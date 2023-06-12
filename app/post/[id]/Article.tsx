import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { Editor, EditorContent } from '@tiptap/react';
import React from 'react';
import EditorMenuBar from './EditorMenuBar';

type Props = {
  editor: Editor | null;
  isEditable: boolean;
};

const Article = ({ editor, isEditable }: Props) => {
  return (
    <article className="text-wh-500 leading-8">
      {isEditable && (
        <div className="border-2 rounded-md bg-wh-50 p-3 mb-3">
          <h4 className="m-0 p-0">Generate AI Content</h4>
          <p className="my-1 p-0 text-xs">What type of writer do you want?</p>
          <div className="flex justify-between items-center gap-5">
            <input
              placeholder="Role"
              className="border-2 rounded-md w-full bg-wh-50 px-3 py-1"
            />
            <button>
              <RocketLaunchIcon className="h-8 w-8 text-accent-orange hover:text-wh-300" />
            </button>
          </div>
        </div>
      )}
      {isEditable && (
        <>
          <EditorMenuBar editor={editor} />
          <hr className="border-1 mt-2 mb-5" />
        </>
      )}
      <EditorContent editor={editor} />
    </article>
  );
};

export default Article;
