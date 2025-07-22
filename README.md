
# Todo App Automation Project

A simple Todo app with full-stack testing examples (UI + API).

## Features

- React frontend + Node.js backend
- Login + Todo CRUD functionality
- UI Automation using Playwright
- API Automation using Supertest
- Clean file structure and setup

## Folder Structure

/backend       - Node.js Express API
/frontend      - React frontend
/tests         - Supertest + Playwright tests

## Getting Started

### 1. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Run app

```bash
# Backend (port 4000)
cd backend
node server.js

# Frontend (port 3000)
cd ../frontend
npm start
```

## Run Tests

```bash
# API Tests
npx jest tests/api.test.js

# UI Tests
npx playwright test tests/ui.test.js
```

## Login Credentials

- Username: admin
- Password: admin

## Tools Used

- React, Express
- Playwright, Supertest, Jest
