import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-2 text-gray-700">For commissions, collaborations, or questions.</p>
            <div className="mt-6 flex items-center gap-3 text-gray-700">
              <Mail className="h-5 w-5" />
              <a className="underline" href="mailto:hello@example.com">hello@example.com</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 ring-1 ring-black/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" required />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" required />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" required />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-black/90">
              <Send className="h-4 w-4" />
              Send message
            </button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
