'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const contact = t.Contact;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="title-primary mb-2">{contact.title}</h1>
        <p className="text-[#0f2851] font-medium">{contact.subtitle}</p>
      </div>

      <form className="space-y-6 card-light">
        <div>
          <label className="block text-sm font-bold text-[#0f2851] mb-2">{contact.form_name}</label>
          <input 
            type="text" 
            className="w-full px-4 py-2.5 border border-[#8ea0be] rounded-xl focus:ring-2 focus:ring-[#0f2851] focus:outline-none bg-white text-slate-800" 
            placeholder={contact.form_name_placeholder || "Votre nom"}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#0f2851] mb-2">{contact.form_email}</label>
          <input 
            type="email" 
            className="w-full px-4 py-2.5 border border-[#8ea0be] rounded-xl focus:ring-2 focus:ring-[#0f2851] focus:outline-none bg-white text-slate-800" 
            placeholder={contact.form_email_placeholder || "votre@email.com"}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#0f2851] mb-2">{contact.form_message}</label>
          <textarea 
            rows={5} 
            className="w-full px-4 py-2.5 border border-[#8ea0be] rounded-xl focus:ring-2 focus:ring-[#0f2851] focus:outline-none bg-white text-slate-800" 
            placeholder={contact.form_message_placeholder || "Votre message..."}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full btn-primary text-center"
        >
          {contact.form_submit}
        </button>
      </form>
    </main>
  );
}