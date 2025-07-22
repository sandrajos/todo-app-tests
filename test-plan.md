
# Test Plan: Todo App

## Objective

Verify functionality and reliability of a basic Todo App with React frontend and Node.js backend. This includes UI and API testing for login and todo management.

## Scope

### Functional Tests
- Login with valid and invalid credentials
- Create, read, update, and delete todos
- UI validation for elements and actions

## Test Types & Tools

| Area          | Tool        | Reason                          |
|---------------|-------------|---------------------------------|
| UI Automation | Playwright  | Modern, fast UI E2E framework   |
| API Testing   | Supertest   | Simple, fast for Express APIs   |
| Test Runner   | Jest        | Integration with Supertest      |
| Dev Server    | Express     | Lightweight and fast            |
| Frontend      | React       | Common frontend framework       |

## Test Coverage

### API
- POST /login: success + invalid login
- GET /todos: list items
- POST /todos: create
- PUT /todos/:id: edit existing
- DELETE /todos/:id: delete item

### UI
- Login form interaction
- Add/Delete todo
- Verify todo appears/disappears in list
- Proper error on bad login

## Assumptions

- No user registration; only static login (admin/admin)
- Todo data is in-memory; resets on backend restart
- No auth token enforcement

## How to Run

```bash
cd backend
node server.js

cd ../frontend
npm start

npx jest tests/api.test.js
npx playwright test tests/ui.test.js
```

## Limitations

- No persistent DB or auth enforcement
- Minimal UI and validation

## Optional Additions

- GitHub Actions CI/CD
- `nyc` for code coverage
- Visual regression via Playwright snapshots
