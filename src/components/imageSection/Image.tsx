const ImageSection = () => {
  const Item = [
    {
      content: '/images/image1.png',
      link: 'https://github.com/torqbit/formbit',
    },
    {
      content: '/images/image2.png',
      link: 'https://github.com/torqbit/learnbit',
    },
    {
      content: '/images/image3.png',
      link: 'https://github.com/torqbit/ecom',
    },
    {
      content: '/images/image4.png',
      link: 'https://github.com/torqbit/torqbit',
    },
  ];
  return (
    <section
      id='project'
      className='absolute left-0 right-0 top-[900px] m-auto flex w-full  items-center justify-center overflow-hidden md:top-[700px]   md:w-[1490px]'
    >
      <div className='  flex gap-4 overflow-hidden md:gap-16'>
        {Item.map((list, i) => {
          return (
            <div
              key={i}
              className='first:hidden odd:rotate-2 even:-rotate-2 md:first:flex'
            >
              <a href={list.link}>
                <img
                  className='h-[250px] w-[200px] cursor-pointer overflow-hidden rounded-xl object-cover md:h-[400px] md:w-[350px]'
                  src={list.content}
                  alt=''
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ImageSection;
