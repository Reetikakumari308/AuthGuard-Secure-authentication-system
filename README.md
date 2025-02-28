AuthGuard – Secure authentication system

MERN Authentication System
A robust authentication system built using the MERN stack, featuring JWT-based authentication, secure password hashing, and OTP-based phone verification via Twilio for enhanced security.

Features
✅ User Authentication: Email/password login and OTP-based phone verification (powered by Twilio)
✅ JWT & Refresh Tokens: Secure session management with access and refresh tokens
✅ Password Security: Hashing with bcrypt for enhanced protection
✅ Twilio SMS OTP Verification: Secure phone number verification for users
✅ Role-Based Access Control: Restrict access based on user roles
✅ Error Handling & Validation: Proper validation and structured error responses
✅ Responsive UI: Frontend built with React for a seamless user experience

Tech Stack
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB (with Mongoose)
Authentication: JWT, bcrypt
OTP Verification: Twilio
API Testing: Postman

Setup Instructions
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/repo-name.git
cd repo-name
Install dependencies:
bash
Copy
Edit
npm install  # For backend  
cd client && npm install  # For frontend  
Set up environment variables (.env file):
plaintext
Copy
Edit
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
Start the server and frontend:
bash
Copy
Edit
npm run dev  # Runs both frontend and backend  
API Endpoints
POST /api/auth/register – Register a new user
POST /api/auth/login – Login with email/password
POST /api/auth/send-otp – Send OTP to phone number using Twilio
POST /api/auth/verify-otp – Verify phone number with OTP
GET /api/user/profile – Get authenticated user details
Future Enhancements
🚀 Google & Facebook OAuth integration
🚀 Multi-factor authentication (MFA)
🚀 Admin dashboard for user management








