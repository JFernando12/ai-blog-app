import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { Editor, EditorContent } from '@tiptap/react';
import React, { useState } from 'react';
import EditorMenuBar from './EditorMenuBar';

type Props = {
  editor: Editor | null;
  isEditable: boolean;
  contentError: string;
  title: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const Article = ({
  editor,
  isEditable,
  contentError,
  title,
  setContent,
}: Props) => {
  const [role, setRole] = useState('I am a hepful writer.');

  const postAiContent = async () => {
    if (!editor) return null;
    editor.chain().focus().setContent('Generating text, please wait...').run();
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, role }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

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
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="h-8 w-8 text-accent-orange hover:text-wh-300" />
            </button>
          </div>
        </div>
      )}
      <div
        className={isEditable ? 'border-2 rounded-md p-3 bg-wh-50' : 'w-full'}
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && (
        <p className="text-accent-red text-xs mt-2">{contentError}</p>
      )}
    </article>
  );
};

export default Article;
