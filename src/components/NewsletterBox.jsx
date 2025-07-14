import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch('https://formspree.io/f/manjgwzn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (response.ok) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className='text-center bg-gray-500 py-12'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-green-800 mt-3'>
        Get exclusive updates, offers, and new arrivals from Parvez Carpets — straight to your inbox.
      </p>

      {submitted ? (
        <p className="text-green-700 mt-6">Thank you for subscribing!</p>
      ) : (
        <form
          onSubmit={onSubmitHandler}
          className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
        >
          <input
            className='w-full sm:flex-1 outline-none bg-green-800 text-white px-3 py-.5'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />
          <button
            type='submit'
            className='bg-black text-white text-xs px-10 py-4'
          >
            SUBSCRIBE
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterBox;