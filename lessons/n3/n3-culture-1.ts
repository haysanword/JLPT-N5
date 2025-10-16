import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-culture-1',
    level: 'N3',
    title: 'Budaya N3: Etika Kerja & Komunikasi',
    description: 'Pahami etika dasar di tempat kerja Jepang, termasuk konsep uchi-soto dan pertukaran kartu nama.',
    xp: 220,
    content: `
      <h1>Etika di Tempat Kerja Jepang (職場のマナー)</h1>
      <p>Memahami budaya kerja adalah kunci untuk membangun hubungan profesional yang baik di Jepang. Ini bukan hanya tentang bahasa, tapi tentang cara berpikir.</p>
      
      <h2>Konsep Kunci: Uchi (内) dan Soto (外) - "Dalam" dan "Luar"</h2>
      <p>Ini adalah konsep paling fundamental dalam komunikasi bisnis Jepang. Ini membagi dunia menjadi dua: kelompok Anda (<strong>uchi</strong>) dan semua orang di luar itu (<strong>soto</strong>).</p>
      <ul>
        <li><strong>Uchi (内 - Dalam):</strong> Perusahaan Anda, departemen Anda, tim Anda.</li>
        <li><strong>Soto (外 - Luar):</strong> Klien, pelanggan, perusahaan lain.</li>
      </ul>
      <p><strong>Aturan Emas:</strong> Selalu rendahkan 'uchi' saat berbicara dengan 'soto'.</p>
      <p>Ini berarti, ketika Anda berbicara dengan klien (soto) tentang manajer Anda (uchi), Anda tidak akan menggunakan gelar kehormatan untuk manajer Anda. Anda merendahkan kelompok Anda sendiri untuk menghormati orang luar.</p>
      <p><em>Contoh: Pelanggan menelepon mencari Manajer Tanaka (田中部長 - Tanaka-buchou). Anda akan menjawab:</em></p>
      <p>「申し訳ございません。<strong>田中</strong>は、ただいま席を外しております。」<br/>(Moushiwake gozaimasen. <strong>Tanaka</strong> wa, tadaima seki o hazushite orimasu.)</p>
      <p>Perhatikan Anda hanya mengatakan "Tanaka", bukan "Tanaka-buchou". Anda menggunakan bahasa rendah hati (Kenjougo) seperti <code>orimasu</code> (bentuk rendah hati dari <code>imasu</code>).</p>
      
      <h2>Ritual Kartu Nama (名刺交換 - Meishi Koukan)</h2>
      <p>Pertukaran kartu nama bukan sekadar memberikan kontak, ini adalah ritual untuk memulai hubungan bisnis.</p>
      <ol>
        <li><strong>Memberi:</strong> Berdirilah, pegang kartu nama Anda dengan kedua tangan, arahkan agar bisa dibaca oleh penerima, dan perkenalkan diri Anda (misal: "Saya Budi dari Perusahaan ABC").</li>
        <li><strong>Menerima:</strong> Terima dengan kedua tangan sambil berkata "頂戴いたします (choudai itashimasu)" - Saya terima dengan hormat.</li>
        <li><strong>Perlakukan dengan Hormat:</strong> Setelah diterima, baca kartu nama tersebut. Selama rapat, letakkan di atas meja di sebelah Anda. Jangan pernah melipat, mencoret-coret, atau langsung memasukkannya ke saku celana belakang. Ini dianggap sangat tidak sopan.</li>
      </ol>
    `,
    audioScript: 'Di tempat kerja Jepang, ada konsep Uchi-Soto. Saat bicara dengan orang luar, Anda merendahkan tim Anda sendiri, bahkan atasan. Pertukaran kartu nama atau meishi koukan juga sangat penting; terima dan berikan dengan dua tangan.',
    quiz: [
      { question: 'Saat berbicara dengan pelanggan (soto) tentang manajer Anda (uchi), bagaimana cara Anda merujuk manajer Anda?', options: ['Dengan gelar kehormatan (e.g., Buchou-sama)', 'Hanya dengan nama belakangnya (e.g., Tanaka)', 'Dengan nama lengkap dan gelar', 'Dengan nama depannya'], correctAnswer: 'Hanya dengan nama belakangnya (e.g., Tanaka)' },
      { question: 'Apa yang harus Anda lakukan dengan kartu nama yang baru Anda terima saat rapat?', options: ['Segera masukkan ke dalam dompet', 'Letakkan di atas meja di depan Anda', 'Menulis catatan di atasnya', 'Melipatnya menjadi dua'], correctAnswer: 'Letakkan di atas meja di depan Anda' },
      { question: 'Konsep "Uchi-Soto" membedakan antara...', options: ['Teman dekat dan kenalan', 'Kelompok dalam dan kelompok luar', 'Situasi formal dan informal', 'Pria dan wanita'], correctAnswer: 'Kelompok dalam dan kelompok luar' }
    ],
    pronunciationPhrases: [
        { japanese: '内 (うち) と 外 (そと)', romaji: 'uchi to soto' },
        { japanese: '名刺交換 (めいしこうかん)', romaji: 'meishi koukan' },
        { japanese: '頂戴いたします (ちょうだいいたします)', romaji: 'choudai itashimasu' }
    ],
    vocabulary: [
        { japanese: '内', romaji: 'uchi', indonesian: 'Dalam (kelompok sendiri)' },
        { japanese: '外', romaji: 'soto', indonesian: 'Luar (kelompok lain)' },
        { japanese: '名刺交換', romaji: 'meishi koukan', indonesian: 'Pertukaran Kartu Nama' },
    ]
  };
