import Avatar from './Avatar';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import DateFormater from './DateFormater';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Sunlight from '@/components/logo/Sunlight';
import MoonLight from '@/components/logo/Moonlight';

const PostBody: FC<{ slug: string }> = ({ slug }) => {
  const [active, SetActive] = useState<boolean>(true);

  const changeColor = () => {
    SetActive(true);
  };
  const color = () => {
    SetActive(false);
  };
  const [blogPost, setBlogPost] = useState<any>();
  const [content, setContent] = useState();
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const post = () => {
    if (slug) {
      fetch(`/api/slug?slug=${slug}&dir=post`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }).then((res) =>
        res.json().then((data) => {
          setBlogPost(data.post);
          setContent(data.content);
        })
      );
    }
  };
  useEffect(() => {
    post();
  });

  if (blogPost) {
    return (
      <>
        <Head>
          <title>{blogPost.title}</title>
          <meta property='og:image' content={blogPost.ogImage.url} />
        </Head>
        <body className={`${active ? 'light' : 'dark'}`}>
          <section
            className='m-auto  bg-gray-100 md:w-[full] dark:bg-black dark:text-white '
            onClick={() => {
              menuActive.active && setMenuActive({ active: false, menu: '' });
            }}
          >
            <Header />

            <div className='m-auto bg-white md:w-[1400px] dark:bg-zinc-900 dark:text-white'>
              <div className='m-auto flex items-center justify-between bg-white px-8 py-4 md:w-[1400px] dark:bg-zinc-900'>
                <button
                  onClick={() => changeColor()}
                  className='h-10 w-10 cursor-pointer'
                >
                  <Sunlight />
                </button>
                <button
                  onClick={() => color()}
                  className='h-8 w-8 cursor-pointer'
                >
                  <MoonLight />
                </button>
              </div>
              <div className='m-auto  flex w-[full] flex-col items-center  justify-center rounded-lg p-2  md:w-[1200px]  '>
                <img
                  src={blogPost.coverImage}
                  className='  h-[250px]  w-[full] rounded-lg  border-4 border-gray-400  object-cover p-1 md:h-[600px] md:w-[1200px]'
                  alt=''
                />
              </div>

              <div className='items-left m-auto flex flex-col justify-between p-[20px] text-xl font-[400] text-[#666] md:max-w-[1200px]'>
                <div className='flex flex-col items-center '>
                  <h1 className='w-[full] pb-6 text-center  text-[40px] font-light leading-tight text-black md:text-[55px]  md:leading-[70px] dark:text-white  '>
                    {blogPost.title}
                  </h1>

                  <h2 className='text-[30px] font-light text-[#666]'>
                    <DateFormater dateString={blogPost.date} />
                  </h2>
                </div>
                <hr className='m-[20px]' />
                <div className='flex flex-col-reverse md:flex-row'>
                  <div className='flex items-center rounded border-none  text-center md:flex  md:w-[600px] md:flex-col  md:border-2 md:border-none md:p-0'>
                    <Avatar picture={blogPost.author.picture} name={''} />
                    <h1 className='text-left text-[15px] text-black	 dark:text-white '>
                      {blogPost.author.name}
                    </h1>
                  </div>
                  <div>
                    <div
                      className='flex flex-col gap-4 py-4'
                      dangerouslySetInnerHTML={{ __html: content as any }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </section>
        </body>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className='flex h-[100vh] flex-col items-center justify-center gap-2'>
          <div className='mt-20 h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black' />{' '}
          <h2>Loading...</h2>
        </div>
        <Footer />
      </>
    );
  }
};

export default PostBody;
