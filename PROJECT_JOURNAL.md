## 📦 Libraries Used & Design Decisions

### 🚀 Express.js

#### **Why I Chose Express.js**

For this project, I needed a backend framework that balances **development speed, flexibility, and scalability**. Express.js stood out because:

- It provides a **minimal yet powerful abstraction** over Node.js, avoiding unnecessary complexity  
- Its **unopinionated architecture** allowed me to design the project structure according to my needs rather than being forced into a rigid pattern  
- Middleware support enables **clean separation of concerns** (e.g., request parsing, logging, error handling)  
- It significantly reduces boilerplate compared to the native Node.js HTTP module  
- The ecosystem is mature, making it easier to integrate tools like file upload handlers, authentication, etc.  
- It is widely used in production systems, making it a **relevant industry choice**  

---

#### **Role in This Project (PDF Editor Backend)**

In this project, Express acts as the **core backend engine**, responsible for:

- Designing and exposing **RESTful API endpoints** for PDF operations (upload, edit, download)  
- Handling **client-server communication** efficiently  
- Managing middleware such as:  
  - JSON body parsing  
  - CORS handling for frontend-backend interaction  
  - File upload processing  
- Structuring the backend into **modular routes and controllers**  
- Acting as the integration layer between:  
  - Frontend UI  
  - PDF processing logic  
  - File storage system  

---

#### **Key Benefits Observed During Development**

- Faster prototyping → APIs were ready quickly  
- Clean routing system → Easy to scale endpoints  
- Middleware chaining → Simplified request lifecycle handling  
- Debugging was straightforward due to minimal abstraction  

---

#### **Installation**

```bash
npm install express