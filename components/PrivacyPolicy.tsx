
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Privacy Policy</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-12">
          <span>MT DIGITAL LLC</span>
          <span>|</span>
          <span>Effective: January 01, 2024</span>
        </div>
        
        <div className="prose prose-gray max-w-none space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">1. Corporate Commitment</h2>
            <p>MT DIGITAL LLC ("the Company") is a manufacturing and production coordination entity registered in Wyoming, USA. This Privacy Policy describes our strict protocols regarding the handling of business to business information and any personally identifiable information (PII) collected via mtdigitalllc.com.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">2. Scope of Data Collection</h2>
            <p>Our data collection is strictly confined to information necessary for commercial verification, due diligence, and project coordination. We do not engage in broad consumer data tracking.</p>
            <ul className="list-disc pl-5 space-y-3 mt-6">
              <li><strong>Commercial Entity Data:</strong> Legal name, EIN context, and professional mailing addresses provided for partnership verification.</li>
              <li><strong>Professional Contact Data:</strong> Corporate email addresses, direct professional telephone lines, and job titles of authorized representatives.</li>
              <li><strong>Technical Project Data:</strong> Manufacturing specifications, Bill of Materials (BOM), and logistical requirements provided via inquiry forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">3. Utilization & Legal Basis</h2>
            <p>The processing of data is conducted solely for the following operational objectives:</p>
            <ul className="list-disc pl-5 space-y-3 mt-6">
              <li>Verification of commercial legitimacy for potential manufacturing partnerships.</li>
              <li>Operational feasibility analysis by technical project leads.</li>
              <li>Regulatory compliance reporting as required by Wyoming State and US Federal statutes.</li>
            </ul>
            <p className="mt-6 font-semibold text-gray-900 underline">MT DIGITAL LLC does not participate in the sale, lease, or trade of professional contact data to third party marketing brokers.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">4. Data Security Protocols</h2>
            <p>Treating project data as highly sensitive industrial intellectual property, we utilize institutional grade encryption for all digital transmissions. Access to partner information is restricted to essential operational personnel under strict Non Disclosure Agreements (NDA).</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">5. Inquiries & Compliance</h2>
            <p>For inquiries regarding data retention policies or to request rectification of submitted professional information, contact our corporate compliance officer at: <a href="mailto:info@mtdigitalllc.com" className="font-bold text-gray-900 border-b border-gray-900">info@mtdigitalllc.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
