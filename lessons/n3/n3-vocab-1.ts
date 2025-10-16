import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-vocab-1',
    level: 'N3',
    title: 'Kosakata N3: Istilah Formal & Abstrak',
    description: 'Perluas kosakata Anda dengan istilah untuk pekerjaan, ide, dan konsep abstrak.',
    xp: 250,
    content: `
      <h1>Kosakata N3: Menuju Kefasihan</h1>
      <p>Kosakata di level ini memungkinkan Anda untuk memahami dan berpartisipasi dalam percakapan yang lebih formal dan mendalam. Banyak dari kata-kata ini akan Anda temui di berita, email kantor, dan artikel.</p>
      
      <h2>Pekerjaan & Bisnis</h2>
      <ul>
        <li><strong>出張 (shucchou)</strong> - perjalanan dinas. <em>Contoh: 来週、大阪へ出張します。(Raishuu, Oosaka e shucchou shimasu.) - Minggu depan, saya akan dinas ke Osaka.</em></li>
        <li><strong>退職 (taishoku)</strong> - pensiun/mengundurkan diri. <em>Contoh: 父は去年退職しました。(Chichi wa kyonen taishoku shimashita.) - Ayah saya pensiun tahun lalu.</em></li>
        <li><strong>締切 (shimekiri)</strong> - batas waktu (deadline). <em>Contoh: レポートの締切は金曜日です。(Repooto no shimekiri wa kinyoubi desu.) - Deadline laporan adalah hari Jumat.</em></li>
        <li><strong>情報 (jouhou)</strong> - informasi</li>
        <li><strong>記事 (kiji)</strong> - artikel</li>
      </ul>
      
      <h2>Konsep Abstrak & Ide</h2>
      <ul>
        <li><strong>理由 (riyuu)</strong> - alasan. <em>Contoh: 遅れた理由を説明してください。(Okureta riyuu o setsumei shite kudasai.) - Tolong jelaskan alasan keterlambatan Anda.</em></li>
        <li><strong>結果 (kekka)</strong> - hasil</li>
        <li><strong>目的 (mokuteki)</strong> - tujuan. <em>Contoh: 日本へ行く目的は何ですか。(Nihon e iku mokuteki wa nan desu ka.) - Apa tujuan Anda pergi ke Jepang?</em></li>
        <li><strong>意見 (iken)</strong> - pendapat</li>
        <li><strong>経験 (keiken)</strong> - pengalaman</li>
        <li><strong>習慣 (shuukan)</strong> - kebiasaan</li>
      </ul>
      
      <h2>Kehidupan & Masyarakat</h2>
      <ul>
        <li><strong>家事 (kaji)</strong> - pekerjaan rumah tangga (memasak, bersih-bersih, dll.)</li>
        <li><strong>節約 (setsuyaku)</strong> - menghemat. <em>Contoh: 電気をもっと節約しましょう。(Denki o motto setsuyaku shimashou.) - Mari kita lebih menghemat listrik.</em></li>
        <li><strong>環境 (kankyou)</strong> - lingkungan</li>
        <li><strong>経済 (keizai)</strong> - ekonomi</li>
        <li><strong>体調 (taichou)</strong> - kondisi fisik/kesehatan. <em>Contoh: 今日は体調が悪いです。(Kyou wa taichou ga warui desu.) - Hari ini kondisi badan saya tidak baik.</em></li>
      </ul>
    `,
    audioScript: 'Kosakata N3 penting untuk percakapan yang lebih mendalam. "Shimekiri" adalah deadline. "Riyuu" adalah alasan, dan "kekka" adalah hasil. Kata-kata ini sering muncul di email kerja dan berita.',
    quiz: [
      { question: 'Apa bahasa Jepang untuk "batas waktu" atau "deadline"?', options: ['しゅっちょう', 'たいしょく', 'しめきり', 'じょうほう'], correctAnswer: 'しめきり' },
      { question: 'Kata "keiken" (経験) memiliki arti...', options: ['Tujuan', 'Hasil', 'Alasan', 'Pengalaman'], correctAnswer: 'Pengalaman' },
      { question: 'Jika Anda ingin berbicara tentang "lingkungan", kata yang tepat adalah...', options: ['けいざい', 'かんきょう', 'たいちょう', 'しゅうかん'], correctAnswer: 'かんきょう' },
      { question: 'Perjalanan dinas ke luar kota dalam bahasa Jepang disebut...', options: ['りょこう (ryokou)', 'しゅっちょう (shucchou)', 'たいしょく (taishoku)', 'しごと (shigoto)'], correctAnswer: 'しゅっちょう (shucchou)' },
      { question: 'Apa arti dari kata 「目的」 (mokuteki)?', options: ['Hasil', 'Tujuan', 'Pendapat', 'Kebiasaan'], correctAnswer: 'Tujuan' },
      { question: 'Jika kondisi fisik Anda sedang tidak baik, Anda akan mengatakan...', options: ['たいちょうが悪いです (taichou ga warui desu)', 'きぶんが悪いです (kibun ga warui desu)', 'A dan B benar', 'A dan B salah'], correctAnswer: 'A dan B benar' },
      { question: 'Tindakan menghemat uang atau listrik disebut...', options: ['せつやく (setsuyaku)', 'けいざい (keizai)', 'じょうほう (jouhou)', 'かいぎ (kaigi)'], correctAnswer: 'せつやく (setsuyaku)' },
      { question: 'Kata 「記事」 (kiji) paling sering ditemukan di...', options: ['Menu restoran', 'Koran atau majalah', 'Buku resep', 'Kamus'], correctAnswer: 'Koran atau majalah' },
      { question: 'Lengkapi kalimat: "遅れた___を説明してください。" (Tolong jelaskan alasan keterlambatan Anda.)', options: ['けっか (kekka)', 'もくてき (mokuteki)', 'りゆう (riyuu)', 'いけん (iken)'], correctAnswer: 'りゆう (riyuu)' },
      { question: 'Pekerjaan rumah tangga seperti memasak dan mencuci disebut...', options: ['しゅくだい (shukudai)', 'しごと (shigoto)', 'かじ (kaji)', 'かいぎ (kaigi)'], correctAnswer: 'かじ (kaji)' },
      { question: 'Kata 「退職」 (taishoku) berarti...', options: ['Mulai bekerja', 'Pindah tugas', 'Mengundurkan diri / Pensiun', 'Perjalanan dinas'], correctAnswer: 'Mengundurkan diri / Pensiun' },
      { question: 'Ujian JLPT mengukur kemampuan bahasa Jepang Anda. Hasil ujian tersebut disebut...', options: ['けいけん (keiken)', 'もくてき (mokuteki)', 'しゅうかん (shuukan)', 'けっか (kekka)'], correctAnswer: 'けっか (kekka)' },
      { question: 'Apa arti dari kata 「情報」 (jouhou)?', options: ['Artikel', 'Informasi', 'Pendapat', 'Pengalaman'], correctAnswer: 'Informasi' },
      { question: 'Kebiasaan baik seperti bangun pagi setiap hari disebut...', options: ['けいけん (keiken)', 'しゅうかん (shuukan)', 'もくてき (mokuteki)', 'りゆう (riyuu)'], correctAnswer: 'しゅうかん (shuukan)' },
      { question: 'Kata 「経済」 (keizai) merujuk pada...', options: ['Lingkungan', 'Masyarakat', 'Ekonomi', 'Kesehatan'], correctAnswer: 'Ekonomi' }
    ],
    pronunciationPhrases: [
        { japanese: '締切 (しめきり)', romaji: 'shimekiri' },
        { japanese: '理由 (りゆう)', romaji: 'riyuu' },
        { japanese: '環境 (かんきょう)', romaji: 'kankyou' }
    ],
    vocabulary: [
        { japanese: '出張', romaji: 'shucchou', indonesian: 'Perjalanan Dinas' },
        { japanese: '締切', romaji: 'shimekiri', indonesian: 'Batas Waktu' },
        { japanese: '理由', romaji: 'riyuu', indonesian: 'Alasan' },
        { japanese: '結果', romaji: 'kekka', indonesian: 'Hasil' },
        { japanese: '経験', romaji: 'keiken', indonesian: 'Pengalaman' },
        { japanese: '環境', romaji: 'kankyou', indonesian: 'Lingkungan' },
    ]
  };