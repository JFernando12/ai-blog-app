import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import Ad1 from '/public/assets/ad-1.jpg';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div>
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign in</p>
        </div>
      </nav>
      <div className="flex justify-between">
        <div className="basis-2/3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            Blog dedicated towards AI and generations and job automation
          </p>
        </div>
        <div className="basis-full relative w-auto h-32">
          <Image alt="advert-1" src={Ad1} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
