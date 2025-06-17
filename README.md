


# 🚀 Auto Coding Assistant: Your AI-Powered Coding Sidekick

Tired of staring at a blank screen or scratching your head over complex code? Meet your new best friend: the **Auto Coding Assistant**! This intuitive AI-powered tool, built with a snappy React frontend and a robust FastAPI backend, is designed to **supercharge your coding workflow**. Leveraging the power of the **StarCoder 1B model (or similar)**, it can magically generate code from your ideas and demystify existing snippets with insightful explanations.

---
## 📊 Image of Webpage
![Webpage](https://github.com/abdulmannaan502/Auto-Coding-Assistant/main/Images/1.png)

## ✨ What Can It Do For You?

* **Code Generation from Imagination:** Simply describe what you need in natural language, and watch it generate code snippets before your eyes.
* **Instant Code Explanations:** Drop in any code, and get detailed, easy-to-understand insights into how it works.
* **Sleek & Responsive Interface:** A user-friendly React UI with dedicated buttons for generation and explanation makes it a breeze to use.
* **Reliable & Fast Backend:** Powered by FastAPI, the backend handles your requests with speed and efficiency.
* **Seamless User Experience:** Enjoy built-in loading states and robust error handling on the frontend, so you're always in the loop.

---

## 🛠️ Get Started: Prerequisites

Before you dive in, make sure you have these essentials:

* **Python 3.8+**: For the brainy backend.
* **Node.js 14+ & npm/yarn**: For the slick frontend.
* **Git**: For effortless version control.
* **Internet Connection**: To fetch those powerful model APIs, or have your local model set up and ready!

---

## ⚙️ Setting Up Your Coding Assistant

It's quick and easy to get your assistant up and running!

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **(Optional but Recommended) Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    # For Windows:
    venv\Scripts\activate
    # For Linux/macOS:
    source venv/bin/activate
    ```
3.  **Install the necessary dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Fire up the FastAPI server:**
    ```bash
    uvicorn app:app --reload
    ```

### Frontend Setup

1.  **Move into the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install frontend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Launch the React development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

---

## 🚀 How to Use Your Auto Coding Assistant

Once both the backend and frontend are running, open your browser and prepare for coding magic!

1.  **Type or Paste:** Enter your natural language prompt for code generation, or paste an existing code snippet into the provided textarea in the UI.
2.  **Generate or Explain:**
    * Click **"Generate Code"** to conjure new code based on your prompt.
    * Click **"Explain Code"** to unravel the mysteries of your provided snippet.
3.  **Voila!** The AI's response will appear right below the buttons.

* **Pro Tip:** Don't worry about hitting the buttons multiple times – they'll automatically disable during loading to prevent accidental extra requests.

---

## 🌐 API Endpoints at a Glance

For those who love to peek under the hood:

| Endpoint    | Method | Description                         | Request Body Example                                     |
| :---------- | :----- | :---------------------------------- | :------------------------------------------------------- |
| `/generate` | `POST` | Generates code from a prompt        | `{ "prompt": "print hello world in python", "max_new_tokens": 100 }` |
| `/explain`  | `POST` | Explains a given code snippet       | `{ "code": "print('Hello World')", "max_new_tokens": 100 }` |

---

## 📝 Important Notes

* For the code generation and explanation to work their magic, ensure your chosen **AI model (e.g., StarCoder)** is properly loaded and configured within your backend.
* If you're deploying your assistant to a different host or port, remember to **update the backend URL in your React frontend**.
* Don't forget to add `.gitignore` files in both your `backend` and `frontend` directories to neatly exclude virtual environments, `node_modules`, and sensitive environment files from your version control.

---

## 📜 License

This project is proudly released under the **Apache 2.0 License © 2025 Abdul Mannaan**.

