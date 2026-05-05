## 📦 Libraries Used & Design Decisions

### 🚀 Express.js

#### **Why I Chose Express.js**

For this project, I needed a backend framework that balances development speed, flexibility, and scalability. Express.js stood out because:

- It provides a minimal yet powerful abstraction over Node.js, avoiding unnecessary complexity
- Its unopinionated architecture allowed me to design the project structure according to my needs rather than being forced into a rigid pattern
- Middleware support enables clean separation of concerns such as request parsing, logging, and error handling
- It significantly reduces boilerplate compared to the native Node.js HTTP module
- The ecosystem is mature, making it easier to integrate tools like file upload handlers and authentication
- It is widely used in production systems, making it a relevant industry choice

---

#### **Role in This Project (PDF Editor Backend)**

In this project, Express acts as the core backend engine, responsible for:

- Designing and exposing RESTful API endpoints for PDF operations including upload, edit, and download
- Handling client-server communication efficiently
- Managing middleware such as JSON body parsing, CORS handling for frontend-backend interaction, and file upload processing
- Structuring the backend into modular routes and controllers
- Acting as the integration layer between the frontend UI, PDF processing logic, and file storage system

---

#### **Key Benefits Observed During Development**

- Faster prototyping meant APIs were ready quickly
- Clean routing system made it easy to scale endpoints
- Middleware chaining simplified request lifecycle handling
- Debugging was straightforward due to minimal abstraction

---

#### **The Request-Response Lifecycle in This Project**

Express's middleware pipeline played a crucial role in how PDF operations were processed. A typical request flows through CORS middleware first, then the JSON parser, followed by the file upload handler, then the route handler, then the PDF processor, and finally sends a response back to the client. Each stage in this pipeline can modify the request or response objects, terminate the request early if validation fails, or pass control to the next middleware.

---

#### **Error Handling Strategy**

Express allows centralized error handling, which I implemented specifically for PDF processing failures. When a PDF corruption error occurs, the client receives a clear 400 error message explaining the issue. For files that exceed the size limit, a 413 response is returned. Any unexpected server errors during PDF processing return a standard 500 internal server error response.

---

#### **Alternative Frameworks Considered**

I evaluated several other frameworks before settling on Express.js. Koa.js was considered but ultimately rejected because it has a less mature ecosystem with fewer PDF-related middleware options. Fastify offered better performance, but Express's simplicity better suited this use case. NestJS was deemed too opinionated and heavyweight for a focused PDF editing backend. Hapi required more configuration overhead than I needed for this project.

---

#### **Scalability Considerations**

If this project were to scale for production, several architectural decisions would need to change. In the current single-instance setup, simple session handling using memory works fine for low traffic, and files are stored on local disk. However, when scaling to multiple instances, session storage would need to move from memory to a shared solution like Redis. The Express application would be placed behind a load balancer such as NGINX or HAProxy, uploaded PDFs would be moved to cloud storage like AWS S3 or Azure Blob, and idempotency keys would need to be implemented for PDF operations.

---

#### **Performance Optimizations Applied**

Several performance optimizations were implemented during development. Compression middleware reduced JSON payload sizes significantly. Security headers were added using Helmet to protect against common web attacks. Rate limiting was implemented on PDF processing endpoints to prevent API abuse, allowing up to 100 requests per 15-minute window per client.

---

#### **Real-World Challenges Encountered**

**Large PDF uploads causing timeouts** was an early challenge. I solved this by increasing payload limits and implementing streaming uploads to handle files up to 50 megabytes.

**Concurrent PDF operations consuming excessive memory** became problematic under load. I addressed this by implementing a queue system backed by Redis, allowing PDF processing to happen in the background without blocking new requests.

**CORS issues during local development** required a dynamic CORS configuration that allows localhost origins in development mode while restricting to production domains only when deployed.

---

#### **Debugging Approach**

For debugging, I used Morgan logging middleware to track all incoming requests. I also implemented environment-specific configurations where development mode provides verbose logging with full error details, while production mode logs only critical errors without exposing internal details to clients.

---

#### **Why Express Remained the Final Choice**

Despite evaluating other frameworks, Express.js offered the best balance for this PDF editor backend. The learning curve was gentle, allowing quick onboarding. The framework's flexibility meant I wasn't locked into any specific pattern. The large community meant solutions existed for almost every edge case I encountered. Performance was sufficient for the expected load of hundreds of concurrent PDF operations. Most importantly, the code remained clean and readable, ensuring future developers could understand and maintain it easily.

---

#### **Core Dependencies Installed**

Beyond Express itself, I installed several production middleware packages including CORS for cross-origin requests, Helmet for security headers, compression for response optimization, Morgan for request logging, and express-rate-limit for API protection. For session management in multi-instance deployments, I added express-session with Redis store. File upload handling was managed with Multer, and the core PDF processing was done using pdf-lib.