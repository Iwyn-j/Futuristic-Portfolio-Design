# EmailJS Setup Guide

## Overview
Your contact form is now functional and ready to send emails! However, you need to set up EmailJS to make it work. Here's a step-by-step guide:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)

## Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key'
};
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email inbox for the message

## Features Implemented
✅ **Functional Contact Form**: Sends real emails via EmailJS
✅ **Form Validation**: All fields are required and validated
✅ **Loading States**: Shows spinner while sending
✅ **Success/Error Messages**: Clear feedback to users
✅ **Form Reset**: Clears form after successful submission
✅ **Social Links**: Updated with actual URLs
✅ **Responsive Design**: Works on all devices

## Troubleshooting
- **"EmailJS not configured" error**: Make sure you've updated the config file
- **"Failed to send email" error**: Check your EmailJS service setup
- **Emails not received**: Check spam folder and verify email service configuration

## Security Note
EmailJS is client-side safe. Your public key is meant to be public and doesn't expose sensitive information.

## Free Tier Limits
- EmailJS free tier allows 200 emails/month
- Perfect for personal portfolio sites
- Upgrade to paid plan for higher limits if needed

Your contact form is now ready to receive messages from potential clients and employers!
