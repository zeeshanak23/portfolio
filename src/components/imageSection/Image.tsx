const ImageSection = () => {
  const Item = [
    {
      content: '/images/image1.png',
      link: 'https://github.com/torqbit/formbit',
      title: 'Formbit',
      description: 'Form that capture the worlds attention',
    },
    {
      content: '/images/image2.png',
      link: 'https://github.com/torqbit/learnbit',
      title: 'LearnBit',
      description: 'Best Online Education Expertise',
    },
    {
      content: '/images/image3.png',
      link: 'https://github.com/torqbit/ecom',
      title: 'Ecom',
      description: 'Ecommerce template developed in NextJS and TailwindCSS',
    },
    {
      content: '/images/image4.png',
      link: 'https://github.com/torqbit/torqbit',
      title: 'Torqbit',
      description: 'A Online Education Platform',
    },
  ];
  return (
    <section
      id='project'
      className='m-auto w-[100vw] overflow-hidden bg-white p-4 md:w-[1400px] md:px-16 dark:bg-zinc-900'
    >
      <h1 className='m-auto mb-2 bg-white text-2xl font-medium md:mb-6 md:w-[1400px] md:text-5xl dark:bg-zinc-900'>
        Project.
      </h1>
      <div>
        <div className='flex flex-col justify-between gap-5 md:flex-row'>
          {Item.map((list, i) => {
            return (
              <div key={i}>
                <a
                  href={list.link}
                  className='flex h-[100%] w-[100%] flex-col items-center rounded-xl border-2  border-[#eee] p-2 text-center hover:shadow-md md:h-[420px] md:w-[300px]'
                >
                  <img
                    className='h-[100%] w-[100%] rounded-xl object-cover  md:h-[300px] '
                    src={list.content}
                    alt=''
                  />

                  <h3 className='mt-2 font-medium'>{list.title}</h3>
                  <p className='mt-1 text-[#888]'>{list.description}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ImageSection;
