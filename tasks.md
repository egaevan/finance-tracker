# Tasks

Checklist implementasi aplikasi **Simple Personal Finance Tracker**.

---

# Phase 1 - Project Setup

## Task 1.1

- [x] Membuat project Google Apps Script
- [x] Menghubungkan dengan Google Spreadsheet
- [x] Deploy sebagai Web App

---

## Task 1.2

Buat spreadsheet dengan sheet:

- [x] Transactions
- [x] Categories

Transactions

| Column |
|---------|
| ID |
| Date |
| Type |
| Category |
| Description |
| Amount |
| CreatedAt |

Categories

| Type | Category |

---

# Phase 2 - Backend

## Transaction Service

- [x] saveTransaction()
- [x] getRecentTransactions()
- [x] getAllTransactions()

---

## Category Service

- [x] getCategories(type)

---

## Dashboard Service

- [x] getBalance()
- [x] getMonthlyIncome()
- [x] getMonthlyExpense()
- [x] getDashboard()

---

## Report Service

- [x] getDailyReport()
- [x] getMonthlyReport()
- [x] getRangeReport()

---

# Phase 3 - Frontend

## Dashboard

- [x] Summary Card
- [x] Recent Transactions

---

## Transaction Page

- [x] Form Input
- [x] Validation
- [x] Success Notification

---

## Report Page

- [x] Daily Report
- [x] Monthly Report
- [x] Range Report

---

# Phase 4 - Integration

- [x] google.script.run
- [x] Loading Spinner
- [x] Error Handling

---

# Phase 5 - Testing

## Income

- [x] Save Income

## Expense

- [x] Save Expense

## Dashboard

- [x] Balance
- [x] Monthly Summary

## Report

- [x] Daily
- [x] Monthly
- [x] Range Date

---

# Phase 6 - Deployment

- [x] Deploy Web App
- [x] Test Desktop
- [x] Test Mobile