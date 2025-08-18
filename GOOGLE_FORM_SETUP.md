# Google Form Integration Setup Guide

## Step 1: Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with the following fields:
   - **Name** (Short answer)
   - **Roll Number** (Short answer)
   - **Department** (Multiple choice or Dropdown)
   - **Year** (Multiple choice or Dropdown)
   - **Contact Number** (Short answer)
   - **Email** (Short answer)
   - **Reason/Purpose** (Paragraph)
   - **Domain** (Multiple choice or Dropdown)

## Step 2: Get Your Form URL and Field IDs

1. **Get the Form URL:**
   - Click "Send" button in your Google Form
   - Copy the form URL (it will look like: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform`)

2. **Get Field IDs:**
   - Right-click on your form and "View Page Source"
   - Search for `entry.` in the source code
   - You'll find entries like `entry.1234567890`, `entry.0987654321`, etc.
   - Note down which entry ID corresponds to which field

## Step 3: Update the Registration Component

In `src/components/RegisterPage.tsx`, update these lines:

```typescript
// Replace 'YOUR_GOOGLE_FORM_URL' with your actual Google Form URL
const formUrl = 'YOUR_GOOGLE_FORM_URL';

// Replace these with your actual Google Form field IDs
const googleFormData = {
  'entry.1234567890': formData.name,           // Name field ID
  'entry.0987654321': formData.rollNo,         // Roll No field ID
  'entry.1122334455': formData.dept,           // Department field ID
  'entry.5566778899': formData.year,           // Year field ID
  'entry.9988776655': formData.contactNumber,  // Contact Number field ID
  'entry.1122334455': formData.mail,           // Email field ID
  'entry.6677889900': formData.reasonPurpose,  // Reason/Purpose field ID
  'entry.2233445566': formData.domain          // Domain field ID
};
```

## Step 4: Test the Integration

1. Fill out the registration form on your website
2. Submit the form
3. Check your Google Form responses to see if the data was received
4. The user should see a success message without being redirected

## Important Notes

- **Field IDs are unique** to each Google Form
- **The form submission uses `no-cors` mode** which means you can't read the response
- **Users will stay on your website** after submission
- **Data goes directly to your Google Form** without user redirection
- **Make sure all field IDs match exactly** with your Google Form

## Troubleshooting

If the form isn't working:
1. Check that the form URL is correct
2. Verify all field IDs match your Google Form
3. Check browser console for any errors
4. Ensure your Google Form is set to accept responses
5. Test with a simple form first before adding all fields

## Security Considerations

- Google Forms are public by default
- Consider adding CAPTCHA if needed
- The form data is sent over HTTPS
- No sensitive data is stored on your website
