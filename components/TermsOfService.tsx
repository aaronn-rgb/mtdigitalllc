
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Terms of Service</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-12">
          <span>MT DIGITAL LLC</span>
          <span>|</span>
          <span>Last Updated: January 01, 2024</span>
        </div>
        
        <div className="prose prose-gray max-w-none space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">1. Governing Framework</h2>
            <p>MT DIGITAL LLC operates mtdigitalllc.com ("the Site") as a primary corporate portal for manufacturing coordination and commercial verification. By accessing the Site, you agree to these Terms and Conditions in their entirety. These terms constitute a legally binding agreement between you, as a professional user, and MT DIGITAL LLC, a Wyoming Limited Liability Company.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">2. Commercial Representation</h2>
            <p>Submission of inquiries via our portal represents a professional commercial request. Users must possess the legal authority to bind their respective organizations to these terms. Provision of false organizational identity is strictly prohibited and may result in the suspension of all communication channels.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">3. Proprietary Rights</h2>
            <p>All intellectual property on this site, including but not limited to technical process descriptions, operational methodology, and proprietary imagery, is the exclusive property of MT DIGITAL LLC. No content may be reproduced or distributed for commercial or competitive purposes without explicit written authorization.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">4. Scope of Liability</h2>
            <p>MT DIGITAL LLC provides the Site for informational and inquiry purposes only. No manufacturing, distribution, or coordination agreement is established solely by the use of this site or submission of an inquiry. Binding commercial obligations are only created through a separate, formally executed Master Manufacturing Agreement (MMA).</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">5. Legal Venue</h2>
            <p>These terms and any disputes arising from the use of the Site shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any legal action shall be filed within the appropriate state or federal courts located in Wyoming.</p>
          </section>

          <section className="bg-gray-50 p-8 border border-gray-200 rounded-sm">
            <h2 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-[0.2em]">6. Corporate Identification</h2>
            <p className="text-sm font-medium">
              MT DIGITAL LLC<br />
              30 N Gould St.<br />
              Sheridan, WY 82801<br />
              United States<br />
              <span className="mt-4 block italic font-normal text-gray-500 underline">Contact: info@mtdigitalllc.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
