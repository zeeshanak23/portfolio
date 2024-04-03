const ImageSection = () => {
  const Item = [
    {
      content: '/images/image1.png',
      link: 'https://github.com/torqbit/formbit',
      title: 'Formbit',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Minus esse veniam maiores debitis laudantium',
    },
    {
      content: '/images/image2.png',
      link: 'https://github.com/torqbit/learnbit',
      title: 'LearnBit',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Minus esse veniam maiores debitis laudantium',
    },
    {
      content: '/images/image3.png',
      link: 'https://github.com/torqbit/ecom',
      title: 'Ecom',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Minus esse veniam maiores debitis laudantium',
    },
    {
      content: '/images/image4.png',
      link: 'https://github.com/torqbit/torqbit',
      title: 'Torqbit',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Minus esse veniam maiores debitis laudantium',
    },
  ];
  return (
    <section
      id='project'
      className='m-auto w-[100vw] overflow-hidden bg-white p-4 md:w-[1400px] md:px-16 dark:bg-zinc-900'
    >
      <div>
        <div className='flex flex-col justify-between gap-5 md:flex-row'>
          {Item.map((list, i) => {
            return (
              <div key={i}>
                <a
                  href={list.link}
                  className='flex flex-col items-center justify-center text-center '
                >
                  <img
                    className='h-[100%] w-[100%] rounded-2xl  object-cover md:h-[300px] md:w-[300px]'
                    src={list.content}
                    alt=''
                  />

                  <h3 className='mt-1 font-medium'>{list.title}</h3>
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
