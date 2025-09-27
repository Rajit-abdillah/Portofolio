import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xldlwjve");

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="text-center mb-8">
          Need a project? reach me out right now, i will get back to you very soon.
        </p>
        <p className="text-center text-xs mb-4 text-gray-600">powered by Formspree</p>
        <input
          type="text"
          name="name" 
          placeholder="Your name"
          className="w-full p-4 mb-4 border border-gray-200 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full p-4 mb-4 border border-gray-200 rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          name="message"
          placeholder="Type your message"
          className="w-full p-4 mb-4 border border-gray-200 rounded"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="cursor-pointer bg-violet-600 text-white px-6 py-3 m-2 rounded-md transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
