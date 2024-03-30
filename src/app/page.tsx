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
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
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
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-gray-100 '>
        <div className=''>
          <Header />
          <Hero />
          <ImageSection />
          {allPost && <Article morePost={allPost} />}
          <Footer />
        </div>
      </section>
    </main>
  );
}
