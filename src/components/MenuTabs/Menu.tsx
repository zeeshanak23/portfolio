import { useState } from 'react';

const Menu = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('home');

  const tabs = [
    {
      title: 'About',
      href: '#about',
      active: 'about',
    },
    {
      title: ' Articles',
      href: '#article',
      active: 'article',
    },
    {
      title: 'Projects',
      href: '#project',
      active: 'project',
    },
    {
      title: 'Speacking',
      href: '#',
      active: 'speacking',
    },
    {
      title: 'Uses',
      href: '#',
      active: 'uses',
    },
  ];
  return (
    <div className=' relative z-20 my-5  flex md:hidden'>
      <nav className='   mx-auto my-0 flex w-full items-center justify-between sm:left-0 sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1400px]  '>
        <div className='hidden h-[60px]  min-w-[1116px] items-center gap-12 bg-white bg-opacity-5 px-4 py-2 sm:h-[70px]  lg:flex '>
          {tabs.map((tab, i) => {
            return (
              <a
                onClick={() => {
                  setActiveTab(tab.active);
                }}
                key={i}
                href={tab.href}
                className={`hover:text-primary-300 ${
                  activeTab === tab.active ? `text-primary-600` : `text-white`
                }  font-[600]  hover:cursor-pointer`}
              >
                {tab.title}
              </a>
            );
          })}
        </div>
        <div className=' bg-primary-600  relative -left-4 hidden h-[70px] min-w-[70px] skew-x-[-20deg] lg:flex'></div>

        <div
          onClick={() => {
            setMenuActive(!menuActive);
          }}
          className='relative flex items-center gap-2 px-2 lg:hidden'
        >
          <div className='font-bold text-[#888]'>
            <button className='flex items-center rounded-full border p-2'>
              Menu
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='ml-2 h-4 w-4'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m19.5 8.25-7.5 7.5-7.5-7.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/**
       * responsive
       */}
      <div
        style={{}}
        className={` absolute z-50 w-full flex-col bg-white text-[#888] transition-all dark:bg-zinc-900 ${
          menuActive ? `mt-10 h-[300px]` : `h-[0px]`
        }  transition-all  lg:hidden `}
      >
        {menuActive &&
          tabs.map((tab, i) => {
            return (
              <div
                onClick={() => {
                  setActiveTab(tab.active);
                  setMenuActive(!menuActive);
                }}
                key={i}
                className=' p-4 font-bold  '
              >
                <a href={tab.href}>{tab.title}</a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
