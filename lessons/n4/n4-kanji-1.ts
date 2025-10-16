import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-kanji-1',
    level: 'N4',
    title: 'Kanji N4: Waktu, Tempat & Kegiatan',
    description: 'Pelajari kanji esensial N4 terkait jadwal, lokasi, dan aktivitas.',
    xp: 220,
    content: `
      <h1>Kanji N4 Esensial: Membangun Kosakata</h1>
      <p>Selamat naik level! Di N4, kita tidak hanya belajar kanji baru, tapi juga fokus pada bagaimana kanji-kanji ini bergabung untuk membentuk kata-kata yang lebih kompleks (熟語 - jukugo). Ini adalah kunci untuk memahami teks yang lebih panjang.</p>
      
      <h2>Kategori: Waktu & Musim</h2>
      <p>Kanji-kanji ini membantu Anda berbicara tentang jadwal dan musim.</p>
      <table>
        <tr><td>春 (haru) - musim semi</td><td>夏 (natsu) - musim panas</td></tr>
        <tr><td>秋 (aki) - musim gugur</td><td>冬 (fuyu) - musim dingin</td></tr>
        <tr><td>朝 (asa) - pagi</td><td>昼 (hiru) - siang</td></tr>
        <tr><td>夜 (yoru) - malam</td><td>仕事 (shigoto) - pekerjaan</td></tr>
      </table>
      
      <h2>Kategori: Tempat & Transportasi</h2>
      <p>Kanji yang akan sering Anda lihat di papan penunjuk jalan atau saat bepergian.</p>
      <table>
        <tr><td>駅 (eki) - stasiun</td><td>店 (mise) - toko</td></tr>
        <tr><td>病院 (byouin) - rumah sakit</td><td>図書館 (toshokan) - perpustakaan</td></tr>
        <tr><td>道 (michi) - jalan</td><td>歩く (aruku) - berjalan</td></tr>
        <tr><td>車 (kuruma) - mobil</td><td>会社 (kaisha) - perusahaan</td></tr>
      </table>
      
      <h2>Kategori: Aktivitas & Kehidupan</h2>
      <p>Kanji-kanji ini membentuk kata kerja dan kata sifat yang sangat umum.</p>
      <table>
        <tr><td>勉強 (benkyou) - belajar</td><td>旅行 (ryokou) - perjalanan/wisata</td></tr>
        <tr><td>運動 (undou) - olahraga</td><td>医者 (isha) - dokter</td></tr>
        <tr><td>食べる (taberu) - makan</td><td>飲む (nomu) - minum</td></tr>
        <tr><td>買う (kau) - membeli</td><td>売る (uru) - menjual</td></tr>
        <tr><td>強い (tsuyoi) - kuat</td><td>弱い (yowai) - lemah</td></tr>
        <tr><td>速い (hayai) - cepat</td><td>遅い (osoi) - lambat</td></tr>
      </table>
      <p><strong>Tips Pro:</strong> Jangan hanya hafal kanjinya. Hafalkan kata gabungannya! Contoh, daripada hanya menghafal 医 (i - medis) dan 者 (sha - orang), hafalkan <strong>医者 (isha)</strong> sebagai satu kata yang berarti "dokter".</p>
    `,
    audioScript: 'Kanji N4 lebih fokus pada gabungan. Contohnya, 医 (i) dan 者 (sha) menjadi 医者 (isha) yang artinya dokter. Atau, 図 (zu), 書 (sho), dan 館 (kan) menjadi 図書館 (toshokan), perpustakaan.',
    quiz: [
      { question: 'Gabungan kanji 「病院」 dibaca...', options: ['kaisha', 'ginkou', 'byouin', 'daigaku'], correctAnswer: 'byouin' },
      { question: 'Apa arti dari kanji 「旅行」?', options: ['Belajar', 'Olahraga', 'Bekerja', 'Perjalanan'], correctAnswer: 'Perjalanan' },
      { question: 'Kanji untuk "membeli" adalah...', options: ['売る', '買う', '読む', '書く'], correctAnswer: '買う' },
      { question: 'Apa arti dari kanji「秋」?', options: ['Musim Panas', 'Musim Gugur', 'Musim Dingin', 'Musim Semi'], correctAnswer: 'Musim Gugur' },
      { question: 'Jukugo 「勉強」 dibaca...', options: ['べんきょう (benkyou)', 'うんどう (undou)', 'しごと (shigoto)', 'いしゃ (isha)'], correctAnswer: 'べんきょう (benkyou)' },
      { question: 'Kombinasi kanji 「図書館」 berarti...', options: ['Rumah Sakit', 'Perusahaan', 'Toko Buku', 'Perpustakaan'], correctAnswer: 'Perpustakaan' },
      { question: 'Lawan kata dari 「強い」 (tsuyoi - kuat) adalah...', options: ['弱い (yowai)', '速い (hayai)', '遅い (osoi)', '安い (yasui)'], correctAnswer: '弱い (yowai)' },
      { question: 'Kanji 「夜」 memiliki arti...', options: ['Pagi', 'Siang', 'Malam', 'Sore'], correctAnswer: 'Malam' },
      { question: 'Bagaimana cara membaca kanji「歩く」?', options: ['はしる (hashiru)', 'あるく (aruku)', 'のる (noru)', 'おりる (oriru)'], correctAnswer: 'あるく (aruku)' },
      { question: '「医者」 adalah gabungan dari kanji 医 (medis) dan 者 (orang). Apa artinya?', options: ['Pasien', 'Perawat', 'Dokter', 'Apoteker'], correctAnswer: 'Dokter' },
      { question: 'Kanji untuk "menjual" adalah...', options: ['買う (kau)', '売る (uru)', '読む (yomu)', '書く (kaku)'], correctAnswer: '売る (uru)' },
      { question: 'Apa arti dari jukugo 「運動」?', options: ['Belajar', 'Perjalanan', 'Pekerjaan', 'Olahraga'], correctAnswer: 'Olahraga' },
      { question: 'Kanji 「道」 memiliki arti...', options: ['Stasiun', 'Toko', 'Jalan', 'Rumah'], correctAnswer: 'Jalan' },
      { question: 'Bacaan dari kanji 「夏」 adalah...', options: ['はる (haru)', 'なつ (natsu)', 'あき (aki)', 'ふゆ (fuyu)'], correctAnswer: 'なつ (natsu)' },
      { question: 'Kombinasi kanji apa yang berarti "pekerjaan"?', options: ['仕事 (shigoto)', '勉強 (benkyou)', '運動 (undou)', '医者 (isha)'], correctAnswer: '仕事 (shigoto)' }
    ],
    pronunciationPhrases: [
        { japanese: '病院 (びょういん)', romaji: 'byouin' },
        { japanese: '旅行 (りょこう)', romaji: 'ryokou' },
        { japanese: '勉強 (べんきょう)', romaji: 'benkyou' }
    ],
    vocabulary: [
        { japanese: '春', romaji: 'haru', indonesian: 'Musim Semi' },
        { japanese: '夏', romaji: 'natsu', indonesian: 'Musim Panas' },
        { japanese: '仕事', romaji: 'shigoto', indonesian: 'Pekerjaan' },
        { japanese: '病院', romaji: 'byouin', indonesian: 'Rumah Sakit' },
        { japanese: '旅行', romaji: 'ryokou', indonesian: 'Perjalanan' },
        { japanese: '買う', romaji: 'kau', indonesian: 'Membeli' },
    ]
  };