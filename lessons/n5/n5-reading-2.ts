import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n5-reading-2',
    level: 'N5',
    title: 'MODUL 13: Latihan Pemahaman Membaca (Dokkai)',
    description: 'Kembangkan strategi membaca efektif untuk memahami teks pendek seperti email, poster, dan pengumuman.',
    xp: 180,
    content: `
      <h1>MODUL 13: Latihan Pemahaman Membaca (読解 - Dokkai)</h1>
      <p><em>Membaca adalah keterampilan penting untuk bertahan hidup di Jepang—mulai dari membaca menu di restoran hingga memahami pengumuman di stasiun. Di modul ini, kita tidak hanya akan membaca, tetapi juga belajar <strong>cara</strong> membaca dengan efisien untuk menemukan informasi yang Anda butuhkan dengan cepat.</em></p>

      <h2>A. Strategi Membaca Efektif</h2>
      <p>Jangan panik jika Anda tidak mengerti setiap kata! Kuncinya adalah menemukan informasi penting. Ada dua teknik utama:</p>
      <ul>
        <li><strong>Skimming (Membaca Cepat):</strong> Baca judul dan kalimat pertama setiap paragraf untuk mendapatkan gambaran umum tentang isi teks. Apa topik utamanya?</li>
        <li><strong>Scanning (Mencari Detail):</strong> Setelah tahu topik utamanya, cari kata kunci yang berhubungan dengan pertanyaan. Jika pertanyaan menanyakan "kapan?", cari kanji waktu (時, 日, 年). Jika bertanya "di mana?", cari kanji tempat (駅, 学校).</li>
      </ul>

      <h2>B. Latihan: Membaca Pengumuman</h2>
      <p>Bayangkan Anda melihat poster ini di perpustakaan (図書館 - toshokan). Mari kita coba baca bersama.</p>

      <div style="border: 2px dashed #4B5563; padding: 1.5rem; border-radius: 8px; background-color: #F3F4F6;">
        <h2 style="text-align: center; font-size: 1.5rem; margin-bottom: 1rem;">図書館からのお知らせ (Oshirase - Pengumuman dari Perpustakaan)</h2>
        <p>
          来週の月曜日（１０月５日）は、休みです。<br/>
          本を返す日（へんきゃくび）が月曜日の人は、火曜日に来てください。
        </p>
        <p style="margin-top: 1rem;">
          <strong>時間：</strong>午前９時から午後５時まで<br/>
          <strong>場所：</strong>さくら図書館
        </p>
        <p style="margin-top: 1.5rem; font-size: 0.9rem; text-align: right;">
          ありがとうございました。
        </p>
      </div>

      <h3>Analisis Teks dengan Strategi</h3>
      <ol>
        <li><strong>Skimming:</strong> Judulnya 「図書館からのお知らせ」 (Pengumuman dari Perpustakaan). Kalimat pertama menyebutkan 「来週の月曜日...休みです」 (Senin depan... libur). Oke, jadi ini pengumuman tentang perpustakaan yang libur.</li>
        <li><strong>Scanning untuk Pertanyaan:</strong>
          <ul>
            <li><strong>Pertanyaan:</strong> Kapan perpustakaan libur?
              <br/><strong>Scanning:</strong> Cari kata kunci tanggal dan hari. Ah, ada 「来週の月曜日（１０月５日）」 (Senin depan, 5 Oktober).
            </li>
            <li><strong>Pertanyaan:</strong> Apa yang harus dilakukan jika batas waktu pengembalian buku adalah hari Senin?
              <br/><strong>Scanning:</strong> Cari kata kunci "buku" (本) dan "mengembalikan" (返す). Ditemukan kalimat: 「本を返す日...火曜日に来てください」 (Hari mengembalikan buku... silakan datang hari Selasa).
            </li>
             <li><strong>Pertanyaan:</strong> Di mana lokasi perpustakaan ini?
              <br/><strong>Scanning:</strong> Cari kata kunci "lokasi" (場所). Ditemukan: 「場所：さくら図書館」 (Lokasi: Perpustakaan Sakura).
            </li>
          </ul>
        </li>
      </ol>
      <p>Dengan menggunakan teknik ini, Anda bisa menjawab pertanyaan dengan cepat bahkan tanpa perlu mengerti 100% dari setiap kata dalam teks.</p>
    `,
    audioScript: 'Modul ini adalah latihan membaca atau dokkai. Strategi penting adalah skimming, untuk ide utama, dan scanning, untuk mencari detail. Mari kita lihat contoh pengumuman perpustakaan. Judulnya "oshirase" atau pengumuman. Kapan libur? Cari tanggal. Apa yang harus dilakukan? Cari kata kerja. Dengan begitu, Anda bisa paham tanpa tahu semua kata.',
    quiz: [
      { question: 'Berdasarkan pengumuman, kapan perpustakaan akan tutup?', options: ['Hari Selasa, 5 Oktober', 'Setiap hari Senin', 'Senin depan, 5 Oktober', 'Hari Selasa, 6 Oktober'], correctAnswer: 'Senin depan, 5 Oktober' },
      { question: 'Apa yang harus dilakukan oleh orang yang seharusnya mengembalikan buku pada hari Senin?', options: ['Mengembalikannya pada hari Minggu', 'Tidak perlu mengembalikan', 'Mengembalikannya pada hari Selasa', 'Mengirimnya lewat pos'], correctAnswer: 'Mengembalikannya pada hari Selasa' },
      { question: 'Apa topik utama dari pengumuman ini?', options: ['Acara spesial di perpustakaan', 'Jam buka baru perpustakaan', 'Informasi hari libur perpustakaan', 'Aturan peminjaman buku baru'], correctAnswer: 'Informasi hari libur perpustakaan' },
      { question: 'Apa nama perpustakaan dalam pengumuman tersebut?', options: ['Perpustakaan Oshirase', 'Perpustakaan Sakura', 'Perpustakaan Pusat', 'Tidak disebutkan'], correctAnswer: 'Perpustakaan Sakura' },
      { question: 'Jam berapa perpustakaan biasanya tutup?', options: ['Pukul 9 pagi', 'Pukul 5 sore', 'Pukul 10 pagi', 'Tidak disebutkan'], correctAnswer: 'Pukul 5 sore' },
      { question: 'Kata 「お知らせ」 (oshirase) berarti...', options: ['Jadwal', 'Aturan', 'Pengumuman', 'Perpustakaan'], correctAnswer: 'Pengumuman' },
      { question: 'Teknik membaca cepat untuk mendapatkan gambaran umum teks disebut...', options: ['Scanning', 'Skimming', 'Translating', 'Memorizing'], correctAnswer: 'Skimming' },
      { question: 'Kata 「来週」 (raishuu) berarti...', options: ['Minggu lalu', 'Minggu ini', 'Minggu depan', 'Setiap minggu'], correctAnswer: 'Minggu depan' },
      { question: '「へんきゃくび」 (henkyakubi) adalah...', options: ['Hari peminjaman buku', 'Hari pengembalian buku', 'Hari libur', 'Hari kerja'], correctAnswer: 'Hari pengembalian buku' },
      { question: 'Dalam teknik Scanning, jika pertanyaan menanyakan "siapa?", Anda akan mencari kata-kata yang berhubungan dengan...', options: ['Waktu', 'Tempat', 'Orang', 'Jumlah'], correctAnswer: 'Orang' },
      { question: 'Jam buka perpustakaan adalah dari...', options: ['Pukul 5 sore hingga 9 malam', 'Pukul 10 pagi hingga 5 sore', 'Pukul 9 pagi hingga 5 sore', 'Pukul 9 pagi hingga 10 malam'], correctAnswer: 'Pukul 9 pagi hingga 5 sore' },
      { question: 'Kata 「休み」 (yasumi) berarti...', options: ['Buka', 'Sibuk', 'Libur', 'Acara'], correctAnswer: 'Libur' },
      { question: 'Pengumuman ini ditujukan untuk siapa?', options: ['Hanya staf perpustakaan', 'Pengunjung perpustakaan', 'Siswa sekolah', 'Semua warga kota'], correctAnswer: 'Pengunjung perpustakaan' },
      { question: 'Kata 「場所」 (basho) digunakan untuk menunjukkan...', options: ['Waktu', 'Harga', 'Lokasi', 'Nama'], correctAnswer: 'Lokasi' },
      { question: 'Teknik mencari detail spesifik seperti nama atau tanggal dalam teks disebut...', options: ['Skimming', 'Summarizing', 'Scanning', 'Paraphrasing'], correctAnswer: 'Scanning' }
    ],
    vocabulary: [
      { japanese: 'お知らせ', romaji: 'oshirase', indonesian: 'Pengumuman' },
      { japanese: '休み', romaji: 'yasumi', indonesian: 'Libur' },
      { japanese: '返す', romaji: 'kaesu', indonesian: 'Mengembalikan' },
      { japanese: '日', romaji: 'hi / bi', indonesian: 'Hari' },
      { japanese: '時間', romaji: 'jikan', indonesian: 'Waktu' },
      { japanese: '場所', romaji: 'basho', indonesian: 'Lokasi, Tempat' },
    ]
  }