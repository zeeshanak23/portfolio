'use client';

const Header = () => {
  return (
    <section className='mt-[-16px] hidden md:flex'>
      <div className='fixed left-0 right-0 top-0 z-50 m-auto flex w-[1200px] items-center justify-between overflow-hidden   py-4'>
        <div className=' m-auto mt-4 flex w-[450px] justify-between rounded-full border bg-white bg-fixed px-6 py-2 font-medium shadow-md dark:bg-zinc-800 '>
          <a href='#about' className='hover:text-teal-400'>
            About
          </a>
          <a href='#article' className='hover:text-teal-400'>
            Articles
          </a>
          <a href='#project' className='hover:text-teal-400'>
            Projects
          </a>
          <a href='' className='hover:text-teal-400'>
            Speacking
          </a>
          <a href='' className='hover:text-teal-400'>
            Uses
          </a>
        </div>
      </div>
    </section>
  );
};
export default Header;
