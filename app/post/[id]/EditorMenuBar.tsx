import { Editor } from '@tiptap/react';
import React from 'react';

type Props = {
  editor: Editor | null;
};

const EditorMenuBar = ({ editor }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => {
          editor?.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        className={
          editor?.isActive('heading', { level: 1 })
            ? 'bg-wh-500 p-1 text-wh-50 rounded-md'
            : 'p-1'
        }
      >
        H<span>1</span>
      </button>
      <button
        type="button"
        onClick={() => {
          editor?.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={
          editor?.isActive('heading', { level: 2 })
            ? 'bg-wh-500 p-1 text-wh-50 rounded-md'
            : 'p-1'
        }
      >
        H<span>2</span>
      </button>
      <button
        type="button"
        onClick={() => {
          editor?.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={
          editor?.isActive('heading', { level: 3 })
            ? 'bg-wh-500 p-1 text-wh-50 rounded-md'
            : 'p-1'
        }
      >
        H<span>3</span>
      </button>
      <button
        type="button"
        onClick={() => {
          editor?.chain().focus().setParagraph().run();
        }}
        className={
          editor?.isActive('paragraph')
            ? 'bg-wh-500 p-1 text-wh-50 rounded-md'
            : 'p-1'
        }
      >
        paragraph
      </button>
      <button
        type="button"
        onClick={() => {
          editor?.chain().focus().toggleBold().run();
        }}
        className={
          editor?.isActive('bold')
            ? 'bg-wh-500 p-1 text-wh-50 rounded-md'
            : 'p-1'
        }
      >
        <b>B</b>
      </button>
      <button
        type="button"
        onClick={() => {
          editor?.chain().focus().toggleItalic().run();
        }}
        className={
          editor?.isActive('italic')
            ? 'bg-wh-500 p-1 text-wh-50 rounded-md'
            : 'p-1'
        }
      >
        <i>I</i>
      </button>
    </div>
  );
};

export default EditorMenuBar;
