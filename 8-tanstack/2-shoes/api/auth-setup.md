**Authentication Workflow for the Backend**

### **1. User Registration**
- User submits a **signup request** with `email`, `password`, and optional details.
- Validate input using **Joi** or other validation libraries.
- Hash the password using **bcrypt** before storing in the database.
- Store user details in the database with a unique `id`.
- Send a confirmation email (if required).

### **2. User Login & Token Generation**
- User submits a **login request** with `email` and `password`.
- Validate user credentials by comparing the stored **bcrypt-hashed password**.
- If valid, generate:
  - **Access Token** (short-lived, e.g., 15 mins)
  - **Refresh Token** (long-lived, e.g., 7 days, stored in HTTP-only secure cookie)
- Send **access token** in the response and **set refresh token in HTTP-only cookie**.

### **3. Protecting Routes with Middleware**
- Extract `Authorization: Bearer <access_token>` from request headers.
- Verify the token using **jsonwebtoken (JWT)**.
- Attach the decoded user info to the `req` object.
- Allow the request to proceed if the token is valid.

### **4. Token Refresh Flow**
- When the **access token expires**, the client sends a **refresh request**.
- The server checks the **HTTP-only refresh token** in cookies.
- If valid, fetch the user details from the database.
- Generate a **new access token** and return it.
- (Optional) Rotate the **refresh token** to enhance security.

### **5. Logout & Token Invalidation**
- Clear the **refresh token cookie** on logout.
- (Optional) Blacklist refresh tokens to prevent reuse.
- Invalidate tokens in the database (if storing refresh tokens server-side).

### **6. Security Considerations**
- **Use HTTP-only, Secure, SameSite=Strict cookies** for refresh tokens.
- **Store access tokens in memory (not local storage)** on the frontend.
- **Rotate refresh tokens** to prevent token reuse.
- **Rate-limit login & refresh requests** to prevent abuse.
- **Implement CSRF protection** for endpoints using cookies.

### **7. Required Endpoints**
#### **User Authentication Endpoints**
- `POST /api/auth/register` → Register a new user.
- `POST /api/auth/login` → Authenticate user and issue tokens.
- `POST /api/auth/refresh` → Refresh access token using refresh token.
- `POST /api/auth/logout` → Clear refresh token and log out user.

#### **Protected User Routes**
- `GET /api/user/profile` → Get authenticated user's profile (requires valid access token).
- `PUT /api/user/profile` → Update user profile (requires valid access token).

#### **Admin-Specific Routes** (Example)
- `GET /api/admin/users` → Retrieve a list of users (admin only, requires role verification).
- `DELETE /api/admin/users/:id` → Delete a user (admin only).

This authentication flow ensures **security, scalability, and maintainability** in a modern backend system.

