export const HeroBanner = () => {
  return (
    <div className='container w-full mx-auto py-9 md:py-12 px-4 md:px-6'>
      <div className='flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8'>
        <div className='flex flex-col md:flex-row items-strech justify-between bg-gray-300 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12'>
          <div className='flex flex-col justify-center md:w-1/2'>
            <h1 className='text-7xl lg:text-7xl font-semibold text-gray-800 dark:text-white'>
              Share your thoughts
            </h1>
            <p className='text-base lg:text-xl text-gray-800 dark:text-white mt-2'>
              Happening Now <span className='font-bold'>!!!</span>
            </p>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end'>
            {/* Place a Photo / Image or Icon Here */}
            {/* <img
              src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
              alt=""
              className=""
            /> */}
          </div>
        </div>
        <div className='md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-400 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white'>
              News, Sports, Trends
            </h1>
            <p className='text-base lg:text-xl text-gray-800 dark:text-white'>
              Register Now <span className='font-bold'>!!!</span>
            </p>
          </div>
          <div className='flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0'>
            {/* Place a Photo / Image or Icon Here */}
            {/* <img
              src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
              alt=""
              className="md:w-20 md:h-20 lg:w-full lg:h-full"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
