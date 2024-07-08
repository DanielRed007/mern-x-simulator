const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <div
        className='inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
