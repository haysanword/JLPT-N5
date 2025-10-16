import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-kanji-1',
    level: 'N3',
    title: 'Kanji N3: Sosial, Emosi & Komunikasi',
    description: 'Kuasai kanji terkait pekerjaan, perasaan, dan ekspresi untuk memahami teks yang lebih kompleks.',
    xp: 260,
    content: `
      <h1>Kanji N3: Memahami Konteks Sosial</h1>
      <p>Selamat datang di N3! Di sini, kanji menjadi lebih abstrak dan sering digunakan dalam kombinasi (熟語 - jukugo) untuk mengekspresikan ide-ide yang lebih kompleks, terutama dalam dunia kerja dan interaksi sosial.</p>
      
      <h2>Kategori: Kehidupan Sosial & Pekerjaan</h2>
      <p>Kanji-kanji ini adalah fondasi untuk memahami struktur dan aktivitas dalam sebuah organisasi.</p>
      <table>
        <tr><td>勤 (kin) - bekerja</td><td>課 (ka) - bagian/departemen</td><td>係 (kakari) - penanggung jawab</td></tr>
        <tr><td>事 (ji/koto) - hal/urusan</td><td>役 (yaku) - peran/jabatan</td><td>業 (gyou) - bisnis/industri</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 勤務 (kinmu - tugas kerja), 課長 (kachou - kepala bagian), 関係 (kankei - hubungan), 事務所 (jimusho - kantor), 営業 (eigyou - penjualan/bisnis)</p>
      
      <h2>Kategori: Emosi & Pemikiran</h2>
      <p>Kanji ini membantu Anda membaca dan mengekspresikan dunia batin, seperti perasaan dan proses berpikir.</p>
      <table>
        <tr><td>感 (kan) - merasa</td><td>情 (jou) - perasaan/kondisi</td><td>思 (shi/omo) - berpikir</td></tr>
        <tr><td>忘 (bou/wasure) - lupa</td><td>決 (ketsu/kime) - memutuskan</td><td>信 (shin) - percaya</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 感情 (kanjou - emosi), 感心 (kanshin - kagum), 意見 (iken - pendapat), 思い出 (omoide - kenangan), 決定 (kettei - keputusan), 自信 (jishin - percaya diri)</p>

      <h2>Kategori: Komunikasi & Ekspresi</h2>
      <p>Ini adalah kanji-kanji aksi yang berhubungan dengan cara kita berinteraksi dan berbagi informasi.</p>
      <table>
        <tr><td>伝 (den/tsuta) - menyampaikan</td><td>答 (tou/kotae) - menjawab</td><td>議 (gi) - diskusi</td></tr>
        <tr><td>報 (hou) - laporan/berita</td><td>相 (sou) - mutual/saling</td><td>談 (dan) - bicara/bercerita</td></tr>
      </table>
      <p><strong>Contoh Jukugo:</strong> 手伝う (tetsudau - membantu), 返答 (hentou - balasan), 会議 (kaigi - rapat), 報告 (houkoku - laporan), 相談 (soudan - konsultasi)</p>
    `,
    audioScript: 'Kanji N3 banyak digunakan dalam kombinasi. Misalnya, 感 dan 情 menjadi 感情 (kanjou) atau emosi. 会 dan 議 menjadi 会議 (kaigi) atau rapat. Kuncinya adalah memahami arti gabungan kanji tersebut.',
    quiz: [
      { question: 'Gabungan kanji 「意見」 berarti...', options: ['Keputusan', 'Kenangan', 'Pendapat', 'Perasaan'], correctAnswer: 'Pendapat' },
      { question: 'Kanji 「相談」 (soudan) paling tepat digunakan dalam situasi...', options: ['Melaporkan hasil kerja', 'Meminta nasihat atau berdiskusi', 'Memutuskan jadwal', 'Menyampaikan pesan singkat'], correctAnswer: 'Meminta nasihat atau berdiskusi' },
      { question: 'Apa bacaan dan arti dari 「決定」?', options: ['kettei - keputusan', 'kankei - hubungan', 'kanjou - emosi', 'jishin - percaya diri'], correctAnswer: 'kettei - keputusan' },
      { question: 'Jukugo 「関係」 (kankei) memiliki arti...', options: ['Tugas kerja', 'Kepala bagian', 'Hubungan', 'Kantor'], correctAnswer: 'Hubungan' },
      { question: 'Kanji apa yang berarti "lupa"?', options: ['信', '決', '思', '忘'], correctAnswer: '忘' },
      { question: '「会議」 (kaigi) adalah gabungan dari kanji 会 (bertemu) dan 議 (diskusi). Apa artinya?', options: ['Rapat', 'Laporan', 'Pesta', 'Wawancara'], correctAnswer: 'Rapat' },
      { question: 'Jukugo 「自信」 (jishin) berarti...', options: ['Kepercayaan', 'Informasi', 'Percaya diri', 'Surat kepercayaan'], correctAnswer: 'Percaya diri' },
      { question: 'Kanji 「伝」 dalam kata 「手伝う」 (tetsudau) berarti...', options: ['Menyampaikan', 'Membantu', 'Menjawab', 'Berbicara'], correctAnswer: 'Membantu' },
      { question: 'Apa arti dari 「報告」 (houkoku)?', options: ['Konsultasi', 'Diskusi', 'Laporan', 'Jawaban'], correctAnswer: 'Laporan' },
      { question: 'Jukugo 「感情」 (kanjou) terdiri dari kanji 感 (merasa) dan 情 (perasaan). Apa artinya?', options: ['Kagum', 'Emosi', 'Terima kasih', 'Pendapat'], correctAnswer: 'Emosi' },
      { question: 'Kepala departemen atau kepala bagian dalam bahasa Jepang disebut...', options: ['社長 (shachou)', '部長 (buchou)', '課長 (kachou)', '係長 (kakarichou)'], correctAnswer: '課長 (kachou)' },
      { question: 'Kanji 「答」 (kotae) berarti...', options: ['Bertanya', 'Menjawab', 'Berbicara', 'Mendengar'], correctAnswer: 'Menjawab' },
      { question: 'Kata 「思い出」 (omoide) berarti...', options: ['Pikiran', 'Masa depan', 'Kenangan', 'Ide'], correctAnswer: 'Kenangan' },
      { question: 'Jukugo 「営業」 (eigyou) paling dekat artinya dengan...', options: ['Manufaktur', 'Penjualan/Bisnis', 'Administrasi', 'Penelitian'], correctAnswer: 'Penjualan/Bisnis' },
      { question: 'Apa bacaan dan arti dari 「事務所」?', options: ['jimusho - kantor', 'eigyou - penjualan', 'kinmu - tugas kerja', 'shigoto - pekerjaan'], correctAnswer: 'jimusho - kantor' }
    ],
    pronunciationPhrases: [
        { japanese: '関係 (かんけい)', romaji: 'kankei' },
        { japanese: '感情 (かんじょう)', romaji: 'kanjou' },
        { japanese: '相談 (そうだん)', romaji: 'soudan' }
    ],
    vocabulary: [
        { japanese: '関係', romaji: 'kankei', indonesian: 'Hubungan' },
        { japanese: '感情', romaji: 'kanjou', indonesian: 'Emosi' },
        { japanese: '意見', romaji: 'iken', indonesian: 'Pendapat' },
        { japanese: '決定', romaji: 'kettei', indonesian: 'Keputusan' },
        { japanese: '相談', romaji: 'soudan', indonesian: 'Konsultasi' },
    ]
  };