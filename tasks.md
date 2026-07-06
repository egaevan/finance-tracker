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

- [ ] saveTransaction()
- [ ] getRecentTransactions()
- [ ] getAllTransactions()

---

## Category Service

- [ ] getCategories(type)

---

## Dashboard Service

- [ ] getBalance()
- [ ] getMonthlyIncome()
- [ ] getMonthlyExpense()
- [ ] getDashboard()

---

## Report Service

- [ ] getDailyReport()
- [ ] getMonthlyReport()
- [ ] getRangeReport()

---

# Phase 3 - Frontend

## Dashboard

- [ ] Summary Card
- [ ] Recent Transactions

---

## Transaction Page

- [ ] Form Input
- [ ] Validation
- [ ] Success Notification

---

## Report Page

- [ ] Daily Report
- [ ] Monthly Report
- [ ] Range Report

---

# Phase 4 - Integration

- [ ] google.script.run
- [ ] Loading Spinner
- [ ] Error Handling

---

# Phase 5 - Testing

## Income

- [ ] Save Income

## Expense

- [ ] Save Expense

## Dashboard

- [ ] Balance
- [ ] Monthly Summary

## Report

- [ ] Daily
- [ ] Monthly
- [ ] Range Date

---

# Phase 6 - Deployment

- [ ] Deploy Web App
- [ ] Test Desktop
- [ ] Test Mobile