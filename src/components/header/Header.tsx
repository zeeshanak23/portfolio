import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Header = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <section className=''>
      <div className='fixed left-0 right-0 top-0  m-auto flex w-[1400px] items-center justify-between  py-4'>
        <div className=' m-auto flex w-[450px] justify-between rounded-full border px-6 py-2 font-medium shadow-md '>
          <a href='' className='hover:text-teal-400'>
            About
          </a>
          <a href='' className='hover:text-teal-400'>
            Articles
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
        <div className='mr-12'>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className='sr-only'>Use setting</span>
            <span
              aria-hidden='true'
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
    </section>
  );
};
export default Header;
