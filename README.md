# 📄 PDF Editor — Browser-Based

> A fast, lightweight PDF editor that runs entirely in your browser. Annotate, highlight, draw, and export — **no servers, no subscriptions, no bloat.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PDF.js](https://img.shields.io/badge/PDF.js-FF6F00?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🧩 The Problem

Most PDF tools are heavyweight or locked behind expensive subscriptions. Users needing a quick annotation or highlight shouldn't have to deal with:

- 💸 **Paywalls:** Basic features like "Save As" hidden behind monthly fees.
- 🛡️ **Privacy Risks:** Uploading sensitive documents (contracts, IDs) to external servers for processing.
- 🖥️ **Resource Bloat:** High CPU/RAM usage for simple document viewing.

## 💡 The Solution

This editor performs all operations **locally in the client's browser**. By leveraging `pdf-lib` for modification and `PDF.js` for rendering, your data **never leaves your machine**, ensuring both speed and privacy.

---

## 🚀 Key Features

| Feature | Technical Implementation |
| :--- | :--- |
| **Zero-Server Processing** | Entirely client-side; works offline after initial load. |
| **Layered Annotations** | Add text layers with custom fonts and sizes via `pdf-lib`. |
| **Precision Highlighting** | Transparent overlays for marking critical text sections. |
| **Freehand Canvas** | Integrated HTML5 Canvas for signatures and markups. |
| **Instant Export** | Generates a new Blob and triggers a local download. |

---

## 🏗️ System Architecture

To keep the UI responsive, the editor follows a **Tri-Layer Rendering** approach:

1. **Base Layer:** `PDF.js` renders the original PDF pages into a background canvas.
2. **Interaction Layer:** A transparent React-based SVG/Canvas overlay captures user inputs (drawings, text).
3. **Merge Engine:** Upon export, `pdf-lib` maps the coordinates from the interaction layer onto the actual PDF coordinate system to generate the final file.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React 18 | UI and component management |
| **Styling** | Tailwind CSS | Modern, responsive, and utility-first UI |
| **PDF Rendering** | PDF.js | Displaying PDF pages in the browser |
| **PDF Editing** | pdf-lib | Modifying and exporting PDF documents |
| **State** | Context API | Managing tool selection and annotation data |

---

## 🗂️ Project Structure

```bash
pdf-editor/
├── public/
├── src/
│   ├── components/
│   │   ├── PDFViewer.jsx       # Renders PDF pages using PDF.js
│   │   ├── Toolbar.jsx         # Annotation and drawing tools
│   │   └── ExportButton.jsx    # Handles PDF export via pdf-lib
│   ├── hooks/
│   │   └── usePDFEditor.js     # Core editor logic and state
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🏃 Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/pdf-editor.git
cd pdf-editor
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add features (like image insertion or page rotation), feel free to fork the repo and submit a PR.

**License:** MIT
