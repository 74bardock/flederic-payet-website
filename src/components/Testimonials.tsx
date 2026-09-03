import React from "react";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface TestimonialsDict {
  tag: string;
  title: string;
  items: TestimonialItem[];
}

export default function Testimonials({ dict }: { dict: TestimonialsDict }) {
  if (!dict || !dict.items) return null;

  return (
    <section id="testimonials" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">
            {dict.tag}
          </span>
          <h2 className="text-3xl font-extrabold text-brand-dark mt-2">
            {dict.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dict.items.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-brand-bg border border-gray-100 flex flex-col justify-between shadow-sm"
            >
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "{item.quote}"
              </p>
              <div>
                <div className="font-bold text-brand-dark">{item.author}</div>
                <div className="text-xs text-gray-500">
                  {item.role} • {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}