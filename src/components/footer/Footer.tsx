import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <section className='m-auto w-[1400px] bg-white '>
      <hr />
      <div className='flex items-center justify-between px-24 py-8'>
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
        <div className='flex items-center text-[#888]'>
          <FontAwesomeIcon
            icon={faCopyright}
            className='mr-2'
            size='sm'
            color='#888'
          />
          Copyright 2024. All Rights Reserved
        </div>
      </div>
    </section>
  );
};
export default Footer;
