'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormData {
  email: string;
}

const NewsletterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>();

  // Simulate API request
  const onSubmit = async () => {
    try {
      setTimeout(() => {
        toast.success('Subscribed successfully!');
      }, 1000);

      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.log(error);
      toast.error('Subscription failed. Try again later.');
    }
  };

  return (
    <form className="newsletter__form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        className="newsletter__input"
        placeholder="Your Email Address"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Enter a valid email address',
          },
        })}
      />

      <button
        type="submit"
        className="trk-btn trk-btn--primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default NewsletterForm;
