# Setting Up Email Functionality for Contact Form

## Contact Information Updated ✓
- Email: **shyammangaonkar330@gmail.com**
- Phone: **+91-8459311191**

## Email Form Setup (EmailJS)

I've integrated EmailJS into your contact form. To make it fully functional, you need to complete these steps:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** as your service
4. Connect your Gmail account (**shyammangaonkar330@gmail.com**)
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)

### Step 5: Update Your Code
Open `src/components/Contact.jsx` and replace these values (around line 31-33):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### Example:
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'AbCdEfGhIjKlMnOp';
```

## How It Works

Once configured:
1. User fills out the contact form
2. Clicks "Send Message"
3. Email is sent to **shyammangaonkar330@gmail.com**
4. User sees success message
5. Form resets automatically

## Features Added
- ✓ Form validation (name, email, message required)
- ✓ Loading state ("Sending..." button)
- ✓ Success message (green)
- ✓ Error handling (red message)
- ✓ Form auto-clears after successful send
- ✓ Direct email to your Gmail

## Package Installed
- `@emailjs/browser` - for sending emails from frontend

Test the form after completing the setup steps above!
