# Architecture

## Overview

Aplikasi menggunakan arsitektur sederhana karena hanya digunakan oleh satu pengguna.

```
Browser
      │
      ▼
Google Apps Script
      │
      ▼
Google Sheets
```

---

# Components

## Frontend

HTML Service

Pages

- Dashboard
- Transaction
- Report

Responsibilities

- Render UI
- Input Validation
- Call Backend

---

## Backend

Google Apps Script

Responsibilities

- Read Spreadsheet
- Write Spreadsheet
- Aggregate Data
- Return JSON

---

## Database

Google Sheets

Sheets

Transactions

Categories

---

# Folder Structure

```
finance-tracker/

Code.gs

services/

    DashboardService.gs

    TransactionService.gs

    CategoryService.gs

utils/

    Spreadsheet.gs

    Validation.gs

    Response.gs

views/

    index.html

    dashboard.html

    transaction.html

    report.html

partials/

    navbar.html

    footer.html

css/

    style.html

js/

    dashboard.html

    transaction.html

    report.html

appsscript.json
```

---

# Data Flow

## Save Transaction

```
UI

↓

Validation

↓

google.script.run

↓

TransactionService

↓

Google Sheet

↓

Success
```

---

## Dashboard

```
Dashboard

↓

DashboardService

↓

Read Transactions

↓

Aggregate

↓

Return JSON
```

---

## Report

```
Report Page

↓

ReportService

↓

Filter Data

↓

Aggregate

↓

Return JSON
```

---

# Principles

- Keep Simple
- No Framework
- No Authentication
- No Database selain Google Sheets
- Reusable Services
- Responsive
- Mobile First

---

# Coding Convention

Function

camelCase

```
saveTransaction()

getDashboard()

getDailyReport()
```

File

PascalCase

```
TransactionService.gs

DashboardService.gs
```

HTML

Gunakan partial untuk komponen yang digunakan berulang.

JavaScript

Pisahkan setiap halaman.

CSS

Satu file global.