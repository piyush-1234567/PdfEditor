## 📦 Backend Architecture & Design Decisions: Express.js

### 🚀 Why Express.js?
For the PDF Editor backend, I required a framework that balanced **development velocity**, **flexibility**, and **scalability**. Express.js was selected as the core engine for the following reasons:

*   **Minimalist Abstraction:** Provides a powerful layer over Node.js without the "magic" or bloat of heavier frameworks.
*   **Unopinionated Design:** Allowed for a custom modular directory structure (Routes/Controllers/Services) tailored to PDF processing logic.
*   **Middleware Ecosystem:** Seamless integration with industry-standard tools like `Multer` for file uploads and `pdf-lib` for document manipulation.
*   **Industry Standard:** Widely adopted in production, ensuring long-term maintainability and community support.

---

### ⚙️ Role in the PDF Editor
Express acts as the central orchestrator for all document operations:
*   **RESTful API Design:** Exposes secure endpoints for PDF uploading, editing, and downloading.
*   **Communication Layer:** Efficiently manages client-server data flow and JSON parsing.
*   **Integration Hub:** Bridges the gap between the React frontend, the local/cloud file system, and the PDF processing engine.

---

### 🔄 The Request-Response Lifecycle
The application utilizes a sophisticated middleware pipeline to ensure every PDF operation is secure and optimized.



**Typical Request Flow:**
1.  **CORS & Security:** `cors()` handles cross-origin requests; `helmet()` injects security headers.
2.  **Rate Limiting:** `express-rate-limit` prevents API abuse (max 100 requests/15 mins).
3.  **Parsing:** `multer` processes incoming `multipart/form-data` (PDF files).
4.  **Route Handler:** Identifies the specific operation (e.g., `/api/pdf/merge`).
5.  **Controller/Service:** Executes heavy-lifting logic via `pdf-lib`.
6.  **Response:** Sends the modified PDF Blob or a structured error message.

---

### 🛠️ Tech Stack Comparison
Before finalizing Express, I evaluated several alternatives based on the specific needs of a PDF-heavy application:

| Framework | Decision | Reason |
| :--- | :--- | :--- |
| **Express.js** | **Selected** | Best balance of simplicity, middleware support, and community resources. |
| **Koa.js** | Rejected | Less mature ecosystem for specialized PDF-handling middleware. |
| **Fastify** | Rejected | Excellent performance, but Express's ubiquity was preferred for this iteration. |
| **NestJS** | Rejected | Too "heavyweight" and opinionated for a focused, single-purpose utility backend. |

---

### 🛡️ Error Handling & Performance
*   **Centralized Error Handling:** Custom middleware catches PDF-specific errors (e.g., 400 for corrupted files, 413 for files > 50MB, and 500 for processing failures).
*   **Payload Optimization:** `compression` middleware is used to shrink JSON payloads for faster client-side rendering.
*   **Streaming Uploads:** To prevent memory exhaustion with large PDFs, I implemented streaming to handle files up to **50MB** efficiently.
*   **Concurrency Management:** For high-load scenarios, I designed a background queue system using **Redis** to prevent PDF processing from blocking the main event loop.

---

### 🏗️ Scalability Roadmap
While the current version uses local disk storage and memory sessions, the architecture is designed to scale:
*   **State Management:** Move from memory-based sessions to a shared **Redis** store.
*   **Storage:** Transition from local directories to **AWS S3** or **Azure Blob Storage**.
*   **Load Balancing:** Deploy behind an **NGINX** reverse proxy to handle multiple Express instances.

---

### 📦 Core Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",           // Cross-Origin Resource Sharing
    "multer": "^1.4.5-lts.1",   // Multipart/form-data (File Uploads)
    "pdf-lib": "^1.17.1",       // Core PDF manipulation engine
    "helmet": "^7.0.0",         // Security headers
    "compression": "^1.7.4",    // Response compression
    "morgan": "^1.10.0",        // Request logging
    "express-rate-limit": "^6.7.0" // API protection
  }
}