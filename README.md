# Bank Account Management Application

## Deskripsi

Aplikasi Manajemen Akun Bank ini adalah aplikasi sederhana yang dibuat menggunakan HTML dan JavaScript. Aplikasi ini memungkinkan pengguna untuk melakukan transaksi seperti deposit, withdraw, memeriksa saldo, dan melihat riwayat transaksi mereka.

## Fitur

- **Deposit**: Menambahkan saldo ke akun.
- **Withdraw**: Mengurangi saldo dari akun.
- **Check Balance**: Memeriksa saldo saat ini.
- **Transaction History**: Melihat riwayat transaksi yang telah dilakukan.
- **Exit**: Mengakhiri aplikasi.

## Cara Menggunakan

1. **Buka aplikasi**: Buka file `index.html` di browser web Anda.
2. **Mulai aplikasi**: Klik tombol "Start Application" untuk memulai aplikasi.
3. **Pilih tindakan**: Pilih salah satu dari opsi berikut melalui dialog prompt:
   - `1` **Deposit**: Masukkan jumlah yang ingin Anda tambahkan ke saldo.
   - `2` **Withdraw**: Masukkan jumlah yang ingin Anda kurangi dari saldo.
   - `3` **Check Balance**: Lihat saldo saat ini.
   - `4` **Transaction History**: Lihat riwayat transaksi.
   - `5` **Exit**: Keluar dari aplikasi.

## Struktur Proyek

```
└── 📁src
    └── bank_account.js
    └── index.html
```

- **index.html**: File HTML utama yang memuat aplikasi dan tombol untuk memulai aplikasi.
- **bank_account.js**: File JavaScript yang berisi logika aplikasi, termasuk fungsi untuk deposit, withdraw, memeriksa saldo, melihat riwayat transaksi, dan menu utama.

## Penjelasan Kode

- **index.html**: Memuat file JavaScript dan menyediakan antarmuka pengguna dasar untuk memulai aplikasi.
- **bank_account.js**:
  - **`balance`**: Variabel global untuk menyimpan saldo akun.
  - **`transactionHistory`**: Array untuk menyimpan riwayat transaksi.
  - **`isValidAmount(amount)`**: Memeriksa validitas jumlah yang dimasukkan.
  - **`deposit()`**: Menambahkan saldo ke akun dan mencatat transaksi.
  - **`withdraw()`**: Mengurangi saldo dari akun dan mencatat transaksi.
  - **`checkBalance()`**: Menampilkan saldo saat ini.
  - **`historyTransaction()`**: Menampilkan riwayat transaksi.
  - **`handleUserChoice(choice)`**: Menangani input pengguna dan memanggil fungsi yang sesuai.
  - **`menu()`**: Menampilkan menu utama dan memproses pilihan pengguna.
  - **Event Listener**: Menjalankan fungsi `menu()` saat tombol "Start Application" diklik.

## Kontribusi

Jika Anda memiliki saran atau perbaikan untuk aplikasi ini, silakan buat pull request atau buka issue di repositori ini.

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.

---
