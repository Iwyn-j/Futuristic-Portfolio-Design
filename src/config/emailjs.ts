// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ to get these values

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: 'service_lqrwszf',
  
  // Replace with your EmailJS template ID (create this next)
  TEMPLATE_ID: 'template_q255le7',
  
  // Replace with your EmailJS public key (get this from your EmailJS account)
  PUBLIC_KEY: 'YQHwWv0GQCHVMXdEC'
};

// EmailJS template parameters
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email?: string; // Optional: if you want to specify recipient
}
