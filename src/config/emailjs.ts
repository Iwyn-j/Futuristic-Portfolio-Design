// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ to get these values

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS service ID
  SERVICE_ID: 'your_service_id',
  
  // Replace with your EmailJS template ID  
  TEMPLATE_ID: 'your_template_id',
  
  // Replace with your EmailJS public key
  PUBLIC_KEY: 'your_public_key'
};

// EmailJS template parameters
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email?: string; // Optional: if you want to specify recipient
}
