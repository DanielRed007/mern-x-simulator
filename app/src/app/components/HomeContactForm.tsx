export const HomeContactForm = () => {
  return (
    <form className="mt-8 max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};
