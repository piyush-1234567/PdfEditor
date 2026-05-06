# 📄 PDF Editor — Browser-Based

> A fast, lightweight PDF editor that runs entirely in your browser. Annotate, highlight, draw, and export — no subscriptions, no installations, no bloat.

![React](https://img.shields.io/badge/React-Frontend-blue)
![PDF.js](https://img.shields.io/badge/PDF.js-Rendering-green)
![pdf-lib](https://img.shields.io/badge/pdf--lib-Editing-purple)
![License](https://img.shields.io/badge/License-MIT-orange)

---

## 🧩 Problem Statement

Most PDF tools are expensive, heavyweight, or locked behind subscriptions. Users who just need to add a quick annotation or highlight a section shouldn't have to install Adobe Acrobat or pay monthly fees.

Common pain points with existing solutions:

- 💸 **Expensive or subscription-based** — tools like Adobe Acrobat charge monthly fees for basic functionality
- 🖥️ **Heavy software installs** — resource-intensive applications just for simple edits
- 🧩 **Feature overload** — bloated interfaces with tools most users never need
- 🌐 **No good browser option** — most web-based tools are limited or require account sign-ups

---

## 💡 Solution

This project is a lightweight, browser-based PDF editor built with React, PDF.js, and pdf-lib. It gives users the tools they actually need — without the overhead.

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| 📂 **Upload & view** | Open any PDF directly in the browser with full page rendering |
| ✏️ **Text annotations** | Add notes and labels anywhere on the document |
| 🖍️ **Highlighting** | Mark important sections with color highlights |
| 🖊️ **Free drawing** | Sketch and mark up pages with a freehand tool |
| 💾 **Export & download** | Save the edited PDF instantly to your device |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React | UI and component management |
| PDF Rendering | PDF.js | Displaying PDF pages in the browser |
| PDF Editing | pdf-lib | Modifying and exporting PDF documents |
| Backend | Node.js *(optional)* | Server-side processing if needed |

---

## 🗂️ Project Structure

```
pdf-editor/
├── public/
├── src/
│   ├── components/
│   │   ├── PDFViewer.jsx       # Renders PDF pages using PDF.js
│   │   ├── Toolbar.jsx         # Annotation and drawing tools
│   │   └── ExportButton.jsx    # Handles PDF export via pdf-lib
│   ├── hooks/
│   │   └── usePDFEditor.js     # Core editor logic
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pdf-editor.git

# Navigate to the project directory
cd pdf-editor

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for production

```bash
npm run build
```

---

## 🎯 Project Goals

- Build a simple and accessible PDF editing tool for everyday use
- Demonstrate real-world system design and frontend development skills
- Handle structured document manipulation efficiently in the browser

---

## 🗺️ Roadmap

- [x] Upload and render PDF files
- [x] Add text annotations
- [x] Highlight content
- [x] Freehand drawing tool
- [x] Export edited PDF
- [ ] Undo / redo support
- [ ] Multi-page navigation
- [ ] Mobile-responsive layout
- [ ] Cloud save integration

---

## 🤝 Contributing

Contributions are welcome! Whether it's a bug fix, new feature, or documentation improvement — all contributions are appreciated.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ using React, PDF.js, and pdf-lib.