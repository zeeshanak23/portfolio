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
      className='absolute left-0 right-0 top-[650px] m-auto flex max-w-[1600px] items-center  justify-center overflow-hidden'
    >
      <div className='  flex gap-16 overflow-hidden'>
        {Item.map((list, i) => {
          return (
            <div key={i} className=' odd:rotate-2 even:-rotate-2'>
              <a href={list.link}>
                <img
                  className='h-[400px] w-[350px] cursor-pointer overflow-hidden rounded-xl object-cover'
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
