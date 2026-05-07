import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-3 text-3xl leading-none text-slate-500 hover:text-blue-600"
          aria-label="Close contact form"
        >
          &times;
        </button>

        <h2 className="mb-4 text-2xl font-semibold text-slate-800">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/xrejlark"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1 block font-semibold text-slate-700"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1 block font-semibold text-slate-700"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-1 block font-semibold text-slate-700"
            >
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block font-semibold text-slate-700"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              required
              className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
