# Prompt for Opencode AI Agent

## Context

You are building a **Simple Personal Finance Tracker** using Google Apps Script.

The application is intended for **personal use only**, so keep the implementation simple and avoid unnecessary abstractions.

---

## Technology

- Google Apps Script
- Google Sheets
- HTML Service
- Vanilla JavaScript
- CSS

Do not use:

- React
- Vue
- Angular
- Bootstrap
- jQuery
- Firebase
- External database
- External API

---

## Database

Use Google Sheets.

Sheets:

- Transactions
- Categories

Transactions columns:

- ID
- Date
- Type
- Category
- Description
- Amount
- CreatedAt

Categories columns:

- Type
- Category

---

## Architecture

Keep service-oriented architecture.

Services

- TransactionService
- DashboardService
- CategoryService
- ReportService

Utilities

- Spreadsheet
- Validation
- Response

---

## Requirements

### Dashboard

Display

- Current Balance
- Monthly Income
- Monthly Expense
- Five Recent Transactions

---

### Transaction

Support

- Income
- Expense

Validation

- Required fields
- Amount > 0
- Category required

---

### Report

Support

- Daily
- Monthly
- Date Range

Return

- Income
- Expense
- Balance
- Transactions

---

## UI

Requirements

- Mobile First
- Responsive
- Material-like design
- Clean interface
- Green primary color
- Large buttons
- Rounded cards

---

## Coding Rules

- Keep code readable.
- Write small reusable functions.
- Avoid duplicated logic.
- Use meaningful variable names.
- Add comments only where necessary.
- Return consistent JSON responses.
- Validate all user input.
- Handle errors gracefully.

---

## Expected Folder Structure

```
finance-tracker/

Code.gs

services/

utils/

views/

partials/

css/

js/

appsscript.json
```

---

## Implementation Strategy

Implement one phase at a time.

1. Project setup
2. Spreadsheet helper
3. Category service
4. Transaction service
5. Dashboard service
6. Report service
7. UI
8. Integration
9. Testing

Do not jump to future phases until the current phase is complete.

After completing each phase:

- Verify the implementation.
- Ensure there are no duplicated functions.
- Keep the project organized.
- Wait for the next task before continuing.