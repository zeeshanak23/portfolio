import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <section className='m-auto  bg-white pt-[100px] md:w-[1400px] md:pt-2 dark:bg-zinc-900 '>
      <hr />
      <div className='flex  flex-col items-center justify-between px-24 py-8 md:flex-row'>
        <div className='flex gap-4 text-sm font-medium'>
          <a href='' className='hover:text-teal-400'>
            About
          </a>
          <a href='' className='hover:text-teal-400'>
            Projects
          </a>
          <a href='' className='hover:text-teal-400'>
            Speacking
          </a>
          <a href='' className='hover:text-teal-400'>
            Uses
          </a>
        </div>
        <div className='mt-3 flex w-[250px] items-center justify-between text-[#888] md:mt-0 md:w-[300px]'>
          <FontAwesomeIcon
            icon={faCopyright}
            className='mr-2'
            size='lg'
            color='#888'
          />
          Copyright 2024. All Rights Reserved
        </div>
      </div>
    </section>
  );
};
export default Footer;
