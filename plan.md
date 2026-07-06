# Simple Personal Finance Tracker

Aplikasi pencatatan keuangan pribadi berbasis **Google Sheets** dan **Google Apps Script**.

---

# Tujuan

Membuat aplikasi pencatatan keuangan yang:

- Simple
- Cepat digunakan
- Gratis (Google Workspace)
- Mobile friendly
- Tidak memerlukan server
- Mudah dikembangkan di kemudian hari

Target pengguna hanya **1 orang (pribadi)** sehingga tidak memerlukan autentikasi maupun fitur multi-user.

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Database | Google Sheets |
| Backend | Google Apps Script |
| Frontend | HTML Service + Vanilla JavaScript |
| Styling | CSS |
| Hosting | Google Apps Script Web App |

---

# Scope MVP

## Dashboard

Menampilkan ringkasan keuangan.

- Total Saldo
- Total Pemasukan Bulan Ini
- Total Pengeluaran Bulan Ini
- 5 Transaksi Terakhir

---

## Transaksi

Tambah transaksi baru.

Field:

- Tanggal
- Jenis
    - Income
    - Expense
- Kategori
- Nominal
- Deskripsi

---

## Kategori

Kategori disimpan pada Sheet terpisah.

Contoh:

### Income

- Salary
- Bonus
- Gift

### Expense

- Food
- Transport
- Shopping
- Internet
- Entertainment
- Bills

Kategori cukup dikelola langsung melalui Google Sheets.

---

## Laporan

### Daily

Filter berdasarkan tanggal.

Menampilkan:

- Total Income
- Total Expense
- Saldo
- Daftar transaksi

---

### Monthly

Filter:

- Bulan
- Tahun

Menampilkan:

- Total Income
- Total Expense
- Saldo
- Daftar transaksi

---

### Range Date

Filter:

- Tanggal Awal
- Tanggal Akhir

Menampilkan:

- Total Income
- Total Expense
- Saldo
- Daftar transaksi

---

# Struktur Spreadsheet

## Sheet : Transactions

| Column |
|---------|
| ID |
| Date |
| Type |
| Category |
| Description |
| Amount |
| CreatedAt |

Contoh:

| ID | Date | Type | Category | Description | Amount |
|----|------|------|----------|-------------|--------|
| 1 | 2026-07-06 | Income | Salary | Gaji Juli | 8500000 |
| 2 | 2026-07-06 | Expense | Food | Makan Siang | 35000 |

---

## Sheet : Categories

| Type | Category |
|------|----------|
| Income | Salary |
| Income | Bonus |
| Income | Gift |
| Expense | Food |
| Expense | Transport |
| Expense | Shopping |
| Expense | Internet |

---

# Struktur Project

```text
finance-tracker/

appsscript.json

Code.gs

services/
    TransactionService.gs
    CategoryService.gs
    DashboardService.gs

utils/
    Response.gs
    Validation.gs
    Spreadsheet.gs

views/
    index.html
    dashboard.html
    transaction.html
    report.html

partials/
    navbar.html
    header.html
    footer.html

css/
    style.html

js/
    dashboard.html
    transaction.html
    report.html
```

---

# Tampilan

## Dashboard

```
----------------------------------------

Personal Finance

----------------------------------------

Saldo

Rp 12.500.000

----------------------------------------

Income Bulan Ini

Rp 9.500.000

----------------------------------------

Expense Bulan Ini

Rp 2.300.000

----------------------------------------

5 Transaksi Terakhir

----------------------------------------
```

---

## Tambah Transaksi

```
Tanggal

Jenis

( ) Income

( ) Expense

Kategori

[ Dropdown ]

Nominal

Deskripsi

[ Simpan ]
```

---

## Laporan

Terdapat tiga tab:

- Daily
- Monthly
- Range Date

Setiap laporan menampilkan:

- Total Income
- Total Expense
- Saldo
- List transaksi

---

# Backend Function

## Dashboard

```javascript
getDashboard()
```

---

## Category

```javascript
getCategories(type)
```

---

## Transaction

```javascript
saveTransaction(data)
```

---

## Report

```javascript
getDaily(date)

getMonthly(month, year)

getRange(startDate, endDate)
```

---

# Validasi

Saat menyimpan transaksi.

- Semua field wajib diisi
- Nominal harus berupa angka
- Nominal > 0
- Jenis harus Income atau Expense
- Kategori harus tersedia

---

# UI Guidelines

- Material Design sederhana
- Responsive
- Mobile First
- Warna utama hijau
- Card dengan shadow ringan
- Tombol besar agar mudah digunakan di HP

---

# Out of Scope (Versi Berikutnya)

Tidak termasuk pada MVP.

- Edit transaksi
- Hapus transaksi
- Upload foto struk
- Export PDF
- Export Excel
- Grafik
- Budget bulanan
- Target tabungan
- Reminder
- Multi User
- Login
- Sinkronisasi rekening bank

---

# Development Roadmap

## Phase 1 — Setup

- Membuat Google Spreadsheet
- Membuat Sheet Transactions
- Membuat Sheet Categories
- Membuat Google Apps Script
- Deploy sebagai Web App

---

## Phase 2 — Backend

- Struktur project
- Utility Spreadsheet
- Category Service
- Transaction Service
- Dashboard Service
- Report Service

---

## Phase 3 — Frontend

- Layout utama
- Dashboard
- Form transaksi
- Halaman laporan

---

## Phase 4 — Integrasi

- Integrasi UI dengan Apps Script
- Loading indicator
- Validasi form
- Notifikasi berhasil/gagal

---

## Phase 5 — Testing

- Input Income
- Input Expense
- Dashboard
- Daily Report
- Monthly Report
- Range Report
- Responsive Mobile

---

# Estimasi

| Phase | Estimasi |
|--------|-----------|
| Setup | 30 menit |
| Backend | 2 jam |
| Frontend | 2–3 jam |
| Integrasi | 1 jam |
| Testing | 1 jam |

**Total estimasi:** sekitar **6–8 jam** untuk menghasilkan aplikasi pencatatan keuangan pribadi yang sederhana, ringan, dan mudah dipelihara.