// links
import Link from "next/link";

// icons
import { RiLinkedinLine, RiInstagramLine, RiFacebookLine, RiDiscordLine, RiGithubLine } from 'react-icons/ri';

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://linkedin.com/in/mrnvtrio'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={'https://instagram.com/mrnvtrio'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://facebook.com/mrnvtrio'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
    <Link href={'https://discord.gg/KMXJbxPb'} className='hover:text-accent transition-all duration-300'>
      <RiDiscordLine />
    </Link>
    <Link href={'https://github.com/mrnvcode'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
  </div>;
};

export default Socials;
