# Auto Coding Assistant

An AI-powered code generation and explanation assistant built with a React frontend and a FastAPI backend.  
It leverages the StarCoder 1B model (or similar) to generate code snippets and explain existing code based on user input.

---

## Features

- Generate code from natural language prompts.
- Explain code snippets by providing detailed insights.
- Responsive React UI with separate buttons for generating and explaining code.
- Backend API built with FastAPI for handling requests.
- Loading states and error handling on the frontend.

---


## Prerequisites

- Python 3.8+ (for backend)
- Node.js 14+ and npm/yarn (for frontend)
- Git (for version control)
- Internet connection to fetch model APIs or local model setup

---

## Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2.(Optional but recommended) Create and activate a virtual environment:
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/macOS
source venv/bin/activate


3. Install dependencies:
   pip install -r requirements.txt

4. Run the FastAPI server:
   uvicorn app:app --reload


## Frontend Setup
cd frontend
npm install
# or
yarn install
npm start
# or
yarn start

How to Use
In the browser UI, enter your code snippet or prompt in the textarea.

Click Generate Code to create new code based on your prompt.

Click Explain Code to get an explanation of the provided code snippet.

The response will appear below the buttons.

Buttons disable during loading to avoid multiple requests.

API Endpoints
Endpoint	Method	Description	Request Body Example
/generate	POST	Generates code from a prompt	{ "prompt": "print hello world in python", "max_new_tokens": 100 }
/explain	POST	Explains given code snippet	{ "code": "print('Hello World')", "max_new_tokens": 100 }

Notes
You need to have the model (e.g., StarCoder) properly loaded and configured in your backend for code generation and explanation to work.

Modify backend URL in React if deploying to different host/port.

Add .gitignore files in backend and frontend to exclude virtual environments, node_modules, and environment files.


License
Apache 2.0 © 2025 Abdul Mannaan
