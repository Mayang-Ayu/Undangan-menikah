# Logbook Pemanfaatan Kecerdasan Artifisial (AI)

Dokumen ini mencatat riwayat konsultasi dan pemanfaatan asisten kecerdasan artifisial (AI) selama proses pengembangan proyek **Everlasting Wedding Invitation**. Peran AI dibatasi seminimal mungkin sebagai asisten konsultasi teknis, sementara logika pemrograman dan modifikasi akhir dikerjakan secara mandiri.

---

### Tahap 1: Eksplorasi Ide & Perancangan Solusi
* **Bentuk Interaksi AI:** Berdiskusi dengan AI mengenai konsep dasar pembuatan aplikasi web generator undangan pernikahan sederhana yang mencakup input nama, tanggal, foto, dan tanda tangan digital.
* **Saran/Bantuan dari AI:** Memberikan gambaran alur fitur dasar (*user flow*) dari formulir pengisian data menuju halaman pratinjau hasil undangan.
* **Validasi & Modifikasi Mandiri:** 
  * Saya merancang sendiri tata letak visual (*theme color* bernuansa elegan klasik) agar sesuai dengan estetika undangan pernikahan tanpa mengikuti mentah-mentah struktur bawaan AI.

### Tahap 2: Penyusunan Kerangka Kode (Scaffolding)
* **Bentuk Interaksi AI:** Meminta bantuan AI untuk membuatkan struktur awal kerangka HTML, dasar penataan CSS, dan fungsi dasar manipulasi `HTMLCanvasElement` untuk tanda tangan digital.
* **Saran/Bantuan dari AI:** Draf kode dasar elemen form, penataan grid foto, serta fungsi dasar *event listener* pointer pada canvas.
* **Validasi & Modifikasi Mandiri:**
  * Menyesuaikan atribut HTML dan nama kelas CSS agar selaras dengan kebutuhan spesifik halaman saya.
  * Memahami dan menulis ulang logika skrip JavaScript agar alur pengambilan data form lebih mudah dipelihara.

### Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)
* **Bentuk Interaksi AI:** 
  1. Berkonsultasi terkait kendala awal di mana fitur unggah foto mempelai belum tersedia (*placeholder* masih berupa `div` kosong).
  2. Meminta solusi mengapa posisi foto di bagian hasil undangan (*result section*) tampil rata kiri dan tidak berada di tengah (*center*).
* **Saran/Bantuan dari AI:** 
  * Disarankan menambahkan elemen `<input type="file">` serta API pembaca berkas (`FileReader`) untuk menghasilkan pratinjau gambar.
  * Disarankan menambahkan properti CSS fleksibel (`display: flex`, `flex-direction: column`, dan `align-items: center`) pada penampung foto hasil.
* **Validasi & Modifikasi Mandiri:**
  * Saya menguji coba langsung skrip `FileReader` tersebut ke dalam kode lokal, memastikan format data gambar aman, serta menyesuaikan kelas CSS secara mandiri agar selaras dengan desain responsif perangkat seluler (*mobile-friendly*).

### Tahap 4: Refleksi & Penjelasan Kode
* **Verifikasi Pemahaman:** 
  * Saya memahami sepenuhnya bagaimana API `FileReader` bekerja untuk mengubah file gambar lokal menjadi format *Data URL* (`base64`) sehingga dapat disematkan ke dalam atribut `src` elemen `<img>`.
  * Saya memahami pemanfaatan `canvas.toDataURL("image/png")` untuk mengekstrak hasil coretan tanda tangan digital menjadi sebuah gambar yang langsung tampil di kartu hasil undangan.
  * Seluruh kode akhir yang dikumpulkan merupakan hasil verifikasi, pemahaman, dan penyesuaian mandiri demi memastikan program berjalan bebas galat.
