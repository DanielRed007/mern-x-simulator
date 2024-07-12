import { apiHandler } from "@/lib/api/api-handler";
import { Fragment, SetStateAction, useState } from "react";
import DialogModal from "./shared/DialogModal";

const ContactForm = () => {
  const [name, setName] = useState<SetStateAction<any>>("");
  const [email, setEmail] = useState<SetStateAction<any>>("");
  const [message, setMessage] = useState<SetStateAction<any>>("");
  const [error, setError] = useState<SetStateAction<any>>("");
  const [success, setSuccess] = useState<SetStateAction<any>>("");
  const [isOpen, setIsOpen] = useState<SetStateAction<any>>(false);

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await apiHandler({
        endpoint: "/api/contact",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        requestBody: { name, email, message, action: "send request" },
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        openDialog();
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='mt-8 max-w-md mx-auto'>
        <div className='mb-4'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name'
            className='w-full px-4 py-2 border border-gray-300 rounded'
          />
        </div>
        <div className='mb-4'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
            className='w-full px-4 py-2 border border-gray-300 rounded'
          />
        </div>
        <div className='mb-4'>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your Message'
            className='w-full px-4 py-2 border border-gray-300 rounded'
          ></textarea>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'
        >
          Send Message
        </button>
      </form>
      {success && (
        <DialogModal
          openModal={openDialog}
          closeModal={closeDialog}
          isOpen={isOpen}
          title={"Message Sent"}
          message={"Will contact you soon!"}
        />
      )}
    </Fragment>
  );
};

export default ContactForm;
