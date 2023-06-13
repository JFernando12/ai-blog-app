'use client';
import React, { useState } from 'react';
import CategoryAndEdit from './CategoryAndEdit';
import Article from './Article';
import { PostFormatted } from '@/app/types';
import Image from 'next/image';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import SocialLinks from '@/app/(shared)/SocialLinks';

type Props = {
  post: PostFormatted;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>('');

  const [tempTitle, setTempTitle] = useState<string>(post.title);
  const [tempContent, setTempContent] = useState<string>(post.content);

  const [title, setTitle] = useState<string>(post.title);

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.value === '') setContentError('Title is required');
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError('');
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full',
      },
    },
    content: content,
    editable: isEditable,
  });

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleIsEditable = (boolean: boolean) => {
    setIsEditable(boolean);
    editor?.setEditable(boolean);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editor?.isEmpty) setContentError('Content is required');
    if (title === '') setContentError('Title is required');
    if (editor?.isEmpty || title === '') return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTitle(data.title);
    setContent(data.content);
  };

  return (
    <div>
      {/* Migas de pan */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      {/* Contenido del post */}
      <CategoryAndEdit
        post={post}
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
      />
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div>
          {isEditable ? (
            <div>
              <textarea
                value={title}
                onChange={handleOnChangeTitle}
                className="w-full bg-wh-50 border-2 rounded-md p-3"
              />
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
        {/* Body */}
        <Article
          editor={editor}
          isEditable={isEditable}
          contentError={contentError}
          title={title}
          setContent={setContent}
        />
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-4 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>

      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
