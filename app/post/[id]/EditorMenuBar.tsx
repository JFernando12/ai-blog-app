import React from 'react';

type Props = {};

const EditorMenuBar = (props: Props) => {
  return (
    <div className="flex items-center gap-4">
      <button type="button">
        H<span>1</span>
      </button>
      <button>
        H<span>2</span>
      </button>
      <button>
        H<span>3</span>
      </button>
      <button>paragraph</button>
      <button>
        <b>B</b>
      </button>
      <button>
        <i>I</i>
      </button>
    </div>
  );
};

export default EditorMenuBar;
