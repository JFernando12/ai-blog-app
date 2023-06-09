import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-10 px-4 py-5">
      <div className="sm:flex justify-between items-center">
        <div className="basis-1/2 my-9 sm:my-4">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p className="my-5">© Blog of the Future All Rights Reserved.</p>
        </div>
        <div className="basis-1/4 my-9 sm:my-4">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Some random link again</p>
          <p className="my-5">Ullamcorper vivamus</p>
        </div>
        <div className="basis-1/4 my-9 sm:my-4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p className="my-5">(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
