'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const contact = t.Contact;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{contact.title}</h1>
        <p className="text-slate-600">{contact.subtitle}</p>
      </div>

      <form className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <div>
          <label className="block text-SM font-medium text-slate-700 mb-2">{contact.form_name}</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none" 
            placeholder={contact.form_name_placeholder || "Votre nom"}
          />
        </div>

        <div>
          <label className="block text-SM font-medium text-slate-700 mb-2">{contact.form_email}</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none" 
            placeholder={contact.form_email_placeholder || "votre@email.com"}
          />
        </div>

        <div>
          <label className="block text-SM font-medium text-slate-700 mb-2">{contact.form_message}</label>
          <textarea 
            rows={5} 
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none" 
            placeholder={contact.form_message_placeholder || "Votre message..."}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {contact.form_submit}
        </button>
      </form>
    </main>
  );
}