import React, { useState } from 'react';
import { InquiryType } from '../types';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated transmission delay to the corporate server
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 8000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Inquiries</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Business Coordination</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              For manufacturing coordination, production support, or commercial partnership inquiries, please submit the secure form. All reports are routed directly to our corporate engineering and operations team.
            </p>
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div>
                <span className="block text-[10px] font-black uppercase text-gray-400 mb-1 tracking-widest">Phone Support</span>
                <span className="text-lg font-bold text-gray-900">+1 (760) 338 0111</span>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase text-gray-400 mb-1 tracking-widest">Corporate Mail</span>
                <span className="text-lg font-bold text-gray-900">info@mtdigitalllc.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-gray-50 p-8 sm:p-12 rounded-lg border border-gray-200">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Successfully Routed</h3>
                <p className="text-gray-600">The project report has been securely transmitted to <strong>info@mtdigitalllc.com</strong>. Our operational team will review the requirements and contact you via mtdigitalllc.com domain within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Full Name</label>
                  <input required type="text" className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none transition-all rounded" placeholder="John Smith" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Organization</label>
                  <input required type="text" className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none transition-all rounded" placeholder="Company Legal Name" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Work Email</label>
                  <input required type="email" className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none transition-all rounded" placeholder="name@company.com" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Direct Phone</label>
                  <input required type="tel" className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none transition-all rounded" placeholder="+1 (000) 000 0000" />
                </div>
                <div className="col-span-full">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Nature of Inquiry</label>
                  <select required className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none transition-all rounded appearance-none cursor-pointer">
                    {Object.values(InquiryType).map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-full">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Project Requirements</label>
                  <textarea required rows={4} className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 focus:border-gray-900 focus:outline-none transition-all rounded resize-none" placeholder="Provide a brief overview of production needs..."></textarea>
                </div>
                <div className="col-span-full pt-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className={`w-full bg-gray-900 text-white font-bold py-5 px-6 transition-all uppercase tracking-[0.2em] text-xs rounded shadow-lg flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-black'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Securing Transmission...
                      </>
                    ) : 'Process Inquiry Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;