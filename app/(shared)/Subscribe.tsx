import React from 'react';

type Props = {};

const Subscribe = (props: Props) => {
  return (
    <div className="text-center bg-wh-10 px-4 py-5 my-10">
      <h4 className="text-base font-bold">Subscribe to our Newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter email address to get top news and great deals
      </p>
      <input
        className="w-5/6 text-center border-2 px-5 py-2"
        type="text"
        placeholder="Enter email address"
      />
      <button className="bg-accent-red text-wh-10 w-5/6 font-bold mt-3 px-5 py-2">
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
