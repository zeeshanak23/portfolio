import DateFormater from '@/components/Blog/DateFormater';
import {
  faArrowDown,
  faArrowRight,
  faFilePdf,
  faGreaterThan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

const Article: FC<{
  morePost: [
    {
      coverImage: string;
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      author: { picture: string; name: string };
    }
  ];
}> = ({ morePost }) => {
  const [active, setActive] = useState<string>('');
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const Work = [
    {
      image: '/images/profile.jpeg',
      name: 'Zeeshan',
      post: 'Python Developer',
      date: 'Apr 2021 - Feb 2022',
    },
    {
      image: '/images/profile.jpeg',
      name: 'Zeeshan',
      post: 'Full stack developer',
      date: 'Present',
    },
    // {
    //   image: '/images/profile.jpeg',
    //   name: 'Zeeshan',
    //   post: 'Full stack developer',
    //   date: 'Jan 2024 - Mar 2024',
    // },
  ];

  return (
    <>
      <section
        className=''
        id='article'
        onClick={() => {
          menuActive.active && setMenuActive({ active: false, menu: '' });
        }}
      >
        <h1 className='m-auto bg-white px-4 pt-12 text-3xl font-medium md:w-[1400px] md:px-14 md:text-5xl dark:bg-zinc-900'>
          Blog.
        </h1>
        <div className='m-auto flex  w-[100%] flex-col bg-white md:w-[1400px] md:flex-row md:items-center md:justify-between md:p-12 dark:bg-zinc-900 md:dark:bg-zinc-900 '>
          <div className='m-auto grid w-[100%] grid-rows-3 gap-2 px-4 py-2  sm:flex-row  md:w-[1200px] md:items-center  md:gap-6 dark:bg-zinc-900 '>
            {morePost.map((blog, i) => {
              return (
                <div
                  key={i}
                  className='  h-[auto] w-[100%] rounded-lg bg-white md:max-h-[600px]  md:w-[700px] dark:bg-zinc-900'
                >
                  <div
                    onMouseOver={() => {
                      setActive(blog.author.name);
                    }}
                    onMouseLeave={() => {
                      setActive('');
                    }}
                    className={`relative z-20 cursor-pointer rounded-lg border-2 border-opacity-40 bg-white p-2
                text-[#666] transition-all
              
                lg:m-0  dark:bg-zinc-900  `}
                  >
                    <a href={`/blog/${blog.slug}`}>
                      <div className='flex items-center justify-between'>
                        <div className='mr-2'>
                          <img
                            src={blog.coverImage}
                            alt=''
                            className=' h-[160px] w-[200px]  rounded-md   object-cover md:w-[200px]'
                          />
                        </div>
                        <div className=''>
                          <h2 className='h-[100px] w-[250px] pt-6 text-xl font-[600]  text-black transition-all  md:w-[450px] md:text-2xl dark:text-white  '>
                            <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                          </h2>
                          <hr className='mb-4 mt-4 bg-gray-400' />

                          <div className='flex w-full items-center gap-3 text-[15px] font-normal text-[#666]  md:w-[400px]  md:gap-6'>
                            <DateFormater dateString={blog.date} />
                            <img
                              src={blog.author.picture}
                              className=' h-[30px] w-[30px] rounded-full object-cover '
                              alt=''
                            />
                            <span className='items-centerfont-normal flex  text-[#666] '>
                              {blog.author.name}
                            </span>
                            <button className='hidden items-center justify-between font-medium text-teal-400 md:flex md:w-[105px] md:text-base'>
                              Read article
                              <FontAwesomeIcon size='sm' icon={faArrowRight} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {active === blog.author.name && (
                    <div className='relative z-0 -mt-[220px] h-[220px] w-full rounded-lg   bg-gradient-to-r  from-[#f2b5d4]  via-pink-200 to-[#7bdff2]   opacity-75 blur '></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className='ml-2 w-[96vw] px-2 md:w-[400px]'>
            <div className='flex flex-col gap-4 rounded-lg border border-[#eee] bg-white p-6 dark:bg-zinc-900'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                  />
                </svg>
                <p className='ml-4 font-medium'>Stay up to date</p>
              </div>

              <p className=''>
                Get notified when I publish something new, and unsubscribe at
                any time
              </p>
              <div className='flex items-center'>
                <input
                  type='email'
                  className='mr-3 rounded-lg border-[#eee] shadow-lg md:w-[350px]'
                  placeholder='Enter Address'
                />
                <button className='rounded-lg bg-black p-2 text-white'>
                  Join
                </button>
              </div>
            </div>

            <div className='mt-4 flex flex-col gap-4 rounded-lg border border-[#eee]  bg-white p-6 md:mt-10 dark:bg-zinc-900'>
              <div className='flex '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
                  />
                </svg>
                <p className='ml-4 font-medium'>Work</p>
              </div>

              <div className=''>
                {Work.map((item, i) => {
                  return (
                    <div key={i} className='flex items-center gap-4 py-2'>
                      <div className=' rounded-full border bg-white p-2 dark:bg-zinc-900'>
                        <img
                          className='h-[40px] w-[40px] rounded-full object-cover'
                          src={item.image}
                          alt=''
                        />
                      </div>
                      <div>
                        <h3 className='text-sm'>{item.name}</h3>
                        <div className='flex w-[220px] items-center justify-between  text-[#888] md:w-[275px]'>
                          <p>{item.post}</p>
                          <p>{item.date}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a
                href='/pdf/zeeshan.pdf'
                className='flex items-center justify-center rounded-md bg-gray-100 p-2 text-center dark:bg-black'
                download={'Resume'}
              >
                <button className='mr-2 font-medium  dark:text-white'>
                  Download Resume
                </button>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className='text[#888] dark:text-white'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Article;
