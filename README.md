# 🚀 Auto Coding Assistant

**Your AI-powered programming buddy — right in your browser.**  
Auto Coding Assistant blends a modern React frontend with a powerful FastAPI backend, all driven by the **StarCoder 1B model (or similar)**.  
Need to write code or understand it? Just ask.

---

## 🧠 Features

- ✨ **Code Generation** – Turn plain English into functional code.
- 🔍 **Code Explanation** – Get clear, detailed breakdowns of what your code is doing.
- ⚡ **FastAPI Backend** – Handles requests efficiently and reliably.
- 🎨 **Responsive React UI** – Interactive interface with smooth loading and error handling.

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- **Python 3.8+** (for the backend)  
- **Node.js 14+** with **npm** or **yarn** (for the frontend)  
- **Git** (version control)  
- **Internet connection** (to access APIs or download model weights)  

---

## 🛠️ Backend Setup

   ```bash
   cd backend
   ```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
