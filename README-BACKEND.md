# Portfolio Backend Setup

This backend server handles contact form submissions from your portfolio website.

## Quick Setup

1. **Install Dependencies**
   ```bash
   npm install express cors nodemailer express-rate-limit dotenv
   # For development:
   npm install -D nodemailer
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your email credentials
   ```

3. **Gmail Setup (if using Gmail)**
   - Enable 2-Factor Authentication
   - Generate an App Password:
     - Google Account > Security > 2-Step Verification > App passwords
     - Select "Mail" and generate password
     - Use this app password in your .env file

4. **Run the Server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Environment Variables

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
CONTACT_EMAIL=where-to-receive-emails@gmail.com
PORT=5000
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Features

- ✅ Rate limiting (5 requests per 15 minutes per IP)
- ✅ Input validation and sanitization
- ✅ Email sending with HTML and plain text
- ✅ Error handling and logging
- ✅ CORS enabled for frontend integration

## Alternative Email Services

Replace the Gmail configuration with your preferred service:

```javascript
// Outlook/Hotmail
service: 'hotmail'

// Yahoo
service: 'yahoo'

// Custom SMTP
host: 'your-smtp-server.com',
port: 587,
secure: false
```

## Testing

Test the contact form endpoint:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "message": "Test message"
  }'
```

## Frontend Integration

The React frontend automatically tries the backend first, then falls back to mailto: if the backend is not available.

## Deployment

For production deployment, consider:
- Setting `NODE_ENV=production`
- Using a process manager like PM2
- Setting up SSL/HTTPS
- Configuring proper error logging
- Using environment-specific email settings