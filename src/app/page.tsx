'use client';

import Article from '@/components/article/Article';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import ImageSection from '@/components/imageSection/Image';
import Head from 'next/head';
import * as React from 'react';
import { useEffect } from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Sunlight from '@/components/logo/Sunlight';
import MoonLight from '@/components/logo/Moonlight';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [active, SetActive] = React.useState<boolean>(true);

  const changeColor = () => {
    SetActive(true);
  };
  const color = () => {
    SetActive(false);
  };

  const [allPost, setPost] = React.useState<
    [
      {
        coverImage: string;
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        author: { picture: string; name: string };
      }
    ]
  >();

  const Post = async () => {
    try {
      const res = await fetch(`/api/allPosts?dir=post`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      const result = await res.json();
      setPost(result.post);
    } catch (err) {
      return;
    }
  };
  useEffect(() => {
    Post();
  }, []);
  return (
    <html>
      {/* className={`${darkMode ? 'bg-red-200' : 'bg-black'}`} */}
      <main>
        <Head>
          <title>Portfolio</title>
        </Head>
        <body className={`${active ? 'light' : 'dark'}`}>
          <section className='bg-gray-100 dark:bg-black dark:text-white  '>
            <div className='m-auto flex w-[1400px] items-center justify-between bg-white p-8 dark:bg-zinc-900'>
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

            <Header />
            <Hero />
            <ImageSection />
            {allPost && <Article morePost={allPost} />}
            <Footer />
          </section>
        </body>
      </main>
    </html>
  );
}
