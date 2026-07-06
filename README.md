# 🧠 Memora AI

> An AI-powered memory assistant built with **Cognee**, **FastAPI**, **Next.js**, and **Supabase** that enables persistent memory, intelligent document retrieval, and knowledge graph visualization.

![License](https://img.shields.io/badge/license-MIT-blue)
![Python](https://img.shields.io/badge/Python-3.11-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![FastAPI](https://img.shields.io/badge/FastAPI-0.138-green)
![Cognee](https://img.shields.io/badge/Cognee-1.2.2-orange)

---

# 📖 Overview

Memora AI is an intelligent memory assistant that helps users store, organize, and retrieve knowledge from conversations and uploaded documents.

Instead of relying only on the current conversation, Memora AI creates **persistent AI memory** using **Cognee**, allowing users to upload documents, ask questions, generate summaries, and visualize relationships through a knowledge graph.

---

# 🚀 Features

- 🔐 Secure user authentication with Supabase
- 📄 Upload PDF and DOCX documents
- 🧠 Persistent AI memory powered by Cognee
- 💬 Natural language question answering
- 📚 AI-powered document summarization
- 🎯 Extract skills and projects from resumes
- 🕸 Interactive Knowledge Graph
- 👤 User-specific document storage
- ⚡ Modern responsive UI

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- Tailwind CSS
- TypeScript

## Backend

- FastAPI
- Python

## AI & Memory

- Cognee Open Source
- OpenRouter
- Cohere North Mini Code
- FastEmbed

## Database & Authentication

- Supabase

---

# 🏗 Architecture

```
                ┌────────────────────┐
                │      Next.js       │
                │     Frontend       │
                └─────────┬──────────┘
                          │ REST API
                          ▼
                ┌────────────────────┐
                │      FastAPI       │
                │      Backend       │
                └─────────┬──────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼                               ▼
   ┌──────────────┐              ┌────────────────┐
   │   Cognee     │              │   Supabase     │
   │ Memory Engine│              │ Auth & Storage │
   └──────────────┘              └────────────────┘
```

---

# 📂 Project Structure

```
Memora-AI
│
├── backend
│   ├── app
│   │   ├── routes
│   │   ├── services
│   │   ├── dependencies
│   │   ├── config
│   │   └── main.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   └── public
│
├── docker-compose.yml
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Memora-AI.git

cd Memora-AI
```

---

## Backend

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
# Windows
.venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend

Create `.env`

```env
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
SUPABASE_JWT_SECRET=

LLM_PROVIDER=
LLM_MODEL=
LLM_API_KEY=

EMBEDDING_PROVIDER=
EMBEDDING_MODEL=
EMBEDDING_DIMENSIONS=

COGNEE_SKIP_CONNECTION_TEST=true
```

---

## Frontend

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

---

# 📖 How It Works

### 1. User Authentication

Users securely sign up and log in using Supabase Authentication.

### 2. Upload Documents

Users upload PDF or DOCX files.

### 3. Memory Creation

Cognee processes the uploaded content and converts it into persistent memory.

### 4. Knowledge Graph

Relationships between concepts are extracted and visualized.

### 5. Intelligent Retrieval

Users can ask natural language questions, and Cognee retrieves relevant information from stored memories.

---

# 💬 Example Queries

```
Summarize my resume

What skills are mentioned?

What projects have I worked on?

Remember that my favorite language is Python.

What do you remember about me?
```

---

# 🎯 Hackathon Highlights

- Built using **Cognee Open Source**
- Persistent AI Memory
- User Authentication
- Knowledge Graph Visualization
- AI Document Assistant
- Resume Analysis
- Full-stack AI Application

---

# 📸 Screenshots

### Landing Page

_Add screenshot here_

---

### Dashboard

_Add screenshot here_

---

### Knowledge Graph

_Add screenshot here_

---

# 🚀 Future Improvements

- Chat history persistence
- Streaming AI responses
- OCR support
- Voice interaction
- Multi-workspace support
- Advanced graph analytics
- Mobile application

---

# 👨‍💻 Author

**Frejes D'Costa**

GitHub: https://github.com/Frejes

---

# 📄 License

This project is licensed under the MIT License.

---

# 🙏 Acknowledgements

- Cognee
- Supabase
- FastAPI
- Next.js
- OpenRouter
- Cohere
