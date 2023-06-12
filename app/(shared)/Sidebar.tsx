import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';
import Image from 'next/image';
import ad2 from '/public/assets/ad-2.png';
import AboutProfile from '/public/assets/about-profile.jpg';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4>Subscribe and follow</h4>
      <div>
        <SocialLinks />
      </div>
      <Subscribe />
      <Image alt="ad2" src={ad2} />
      <h4>About the blog</h4>
      <div>
        <Image alt="about-profile" src={AboutProfile} />
      </div>
      <h4>Alice Jackson</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores et
        saepe quidem eius dignissimos maiores cumque molestiae molestias,
        reiciendis doloribus distinctio aspernatur nemo itaque! Eaque adipisci
        enim reiciendis labore explicabo?
      </p>
    </section>
  );
};

export default Sidebar;
