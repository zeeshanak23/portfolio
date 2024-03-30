const ImageSection = () => {
  const Item = [
    {
      content: '/images/image1.png',
    },
    {
      content: '/images/image2.png',
    },
    {
      content: '/images/image3.png',
    },
    {
      content: '/images/image1.png',
    },
    {
      content: '/images/image2.png',
    },
  ];
  return (
    <section className='absolute  left-0 right-0 top-[580px] m-auto w-[1600px] justify-center overflow-hidden'>
      <div className='  flex gap-16 overflow-hidden'>
        {Item.map((list, i) => {
          return (
            <div key={i} className=' odd:rotate-2 even:-rotate-2'>
              <img
                className='h-[300px] w-[350px] overflow-hidden rounded-xl object-cover'
                src={list.content}
                alt=''
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ImageSection;
