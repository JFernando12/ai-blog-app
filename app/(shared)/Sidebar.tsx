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
      <h4 className="font-bold text-xs text-center bg-wh-900 text-wh-50 py-3 px-5">
        Subscribe and follow
      </h4>
      <div className="m-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <Image alt="ad2" src={ad2} placeholder="blur" width={500} height={1000} />
      <h4 className="font-bold text-xs text-center bg-wh-900 text-wh-50 py-3 px-5">
        About the blog
      </h4>
      <div>
        <Image
          alt="about-profile"
          src={AboutProfile}
          width={500}
          height={250}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h4 className="font-bold text-xs text-center text-wh-500 py-3 px-5">
        Alice Jackson
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores et
        saepe quidem eius dignissimos maiores cumque molestiae molestias,
        reiciendis doloribus distinctio aspernatur nemo itaque! Eaque adipisci
        enim reiciendis labore explicabo?
      </p>
    </section>
  );
};

export default Sidebar;
