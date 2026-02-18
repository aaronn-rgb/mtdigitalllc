
// Import React to provide access to the React namespace for types like React.ReactNode
import React from 'react';

export enum InquiryType {
  MANUFACTURING_COORDINATION = 'Manufacturing Coordination',
  PRIVATE_LABEL_PRODUCTION = 'Private Label Production',
  OEM_CUSTOM_PROJECT = 'OEM Custom Project',
  PRODUCT_ASSEMBLY_INTEGRATION = 'Product Assembly and Integration',
  DISTRIBUTION_PARTNERSHIP = 'Distribution Partnership',
  GENERAL_BUSINESS_INQUIRY = 'General Business Inquiry'
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  inquiryType: InquiryType;
  message: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}