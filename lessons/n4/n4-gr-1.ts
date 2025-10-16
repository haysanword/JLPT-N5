import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-gr-1',
    level: 'N4',
    title: 'Bentuk Potensial (Kemampuan)',
    description: 'Pelajari cara mengatakan "bisa" atau "mampu" melakukan sesuatu.',
    xp: 240,
    content: `
      <h1>Bentuk Potensial (可能形 - Kanoukei): "Saya Bisa!"</h1>
      <p>Ini adalah tata bahasa untuk menyatakan kemampuan atau kemungkinan. Dalam bahasa Indonesia, ini setara dengan kata "bisa" atau "mampu".</p>

      <h2>Cara Mengubah Kata Kerja Menjadi "Bisa"</h2>
      <p>Aturannya tergantung pada grup kata kerjanya:</p>
      <ul>
        <li><strong>Grup 1 (akhiran -u):</strong> Ubah vokal akhir '-u' menjadi '-eru'.
            <br/><em>Contoh: <strong>かく (kaku - menulis)</strong> → <strong>かける (kakeru - bisa menulis)</strong></em>
            <br/><em>Contoh: <strong>のむ (nomu - minum)</strong> → <strong>のめる (nomeru - bisa minum)</strong></em>
        </li>
        <li><strong>Grup 2 (akhiran -ru):</strong> Ganti akhiran '-ru' dengan '-rareru'.
            <br/><em>Contoh: <strong>たべる (taberu - makan)</strong> → <strong>たべられる (taberareru - bisa makan)</strong></em>
            <br/><em>Contoh: <strong>みる (miru - melihat)</strong> → <strong>みられる (mirareru - bisa melihat)</strong></em>
        </li>
        <li><strong>Grup 3 (tidak beraturan):</strong> Ini harus dihafal!
            <ul>
                <li><strong>する (suru - melakukan)</strong> → <strong>できる (dekiru - bisa melakukan)</strong></li>
                <li><strong>くる (kuru - datang)</strong> → <strong>こられる (korareru - bisa datang)</strong></li>
            </ul>
        </li>
      </ul>

      <h2>Perubahan Penting dalam Kalimat!</h2>
      <p>Saat Anda menggunakan bentuk potensial, ada satu aturan penting:</p>
      <p>Partikel objek <strong><code>を (o)</code></strong> biasanya berubah menjadi <strong><code>が (ga)</code></strong>.</p>
      <p>Ini karena fokus kalimat bergeser dari "melakukan aksi" menjadi "kemampuan itu sendiri".</p>
      
      <p><strong>Kalimat Biasa:</strong></p>
      <p>わたしは にほんご<strong>を</strong> はなします。(Watashi wa Nihongo <strong>o</strong> hanashimasu.) - Saya berbicara bahasa Jepang.</p>
      
      <p><strong>Kalimat Potensial:</strong></p>
      <p>わたしは にほんご<strong>が</strong> はなせます。(Watashi wa Nihongo <strong>ga</strong> hanasemasu.) - Saya <strong>bisa</strong> berbicara bahasa Jepang.</p>
      <p>(Berasal dari 話す (hanasu) → 話せる (hanaseru))</p>
    `,
    audioScript: 'Untuk mengatakan "bisa", gunakan bentuk potensial. Misalnya, "hanashimasu" menjadi "hanasemasu". Ingat, partikel "o" untuk objek seringkali berubah menjadi "ga" dalam kalimat ini. Seperti "Nihongo ga hanasemasu".',
    quiz: [
      { question: 'Bentuk potensial dari "nomu" (minum) adalah...', options: ['のめる', 'のまれる', 'のませる', 'のます'], correctAnswer: 'のめる' },
      { question: 'Lengkapi kalimat: わたしは ピアノ ___ ひけます。(Saya bisa bermain piano)', options: ['を', 'に', 'で', 'が'], correctAnswer: 'が' },
      { question: 'Bagaimana cara mengatakan "Saya tidak bisa berenang"?', options: ['およげません', 'およぎます', 'およぎたい', 'およいだ'], correctAnswer: 'およげません' },
      { question: 'Bentuk potensial dari kata kerja Grup 2 "miru" (melihat) adalah...', options: ['みえる (mieru)', 'みられる (mirareru)', 'みせる (miseru)', 'みれる (mireru)'], correctAnswer: 'みられる (mirareru)' },
      { question: 'Lengkapi kalimat: "かれは かんじ ___ よめます。" (Dia bisa membaca kanji)', options: ['を', 'が', 'は', 'で'], correctAnswer: 'が' },
      { question: 'Bentuk potensial dari kata kerja Grup 3 "suru" (melakukan) adalah...', options: ['される', 'させる', 'できる', 'こられる'], correctAnswer: 'できる' },
      { question: 'Ubah kalimat "さしみを たべます" menjadi bentuk potensial.', options: ['さしみが たべられます', 'さしみを たべられます', 'さしみが たべます', 'さしみが たべさせます'], correctAnswer: 'さしみが たべられます' },
      { question: 'Bentuk potensial dari "hanasu" (berbicara) adalah...', options: ['はなせる', 'はなされる', 'はなさせる', 'はなす'], correctAnswer: 'はなせる' },
      { question: 'Mengapa partikel を sering berubah menjadi が dalam kalimat potensial?', options: ['Untuk membuatnya lebih sopan', 'Karena fokus kalimat beralih ke kemampuan itu sendiri', 'Ini adalah aturan yang tidak memiliki alasan', 'Hanya untuk kata kerja Grup 1'], correctAnswer: 'Karena fokus kalimat beralih ke kemampuan itu sendiri' },
      { question: 'Bagaimana bentuk negatif dari "うたえます" (utaemasu - bisa bernyanyi)?', options: ['うたいません', 'うたえません', 'うたわれません', 'うたわせません'], correctAnswer: 'うたえません' },
      { question: 'Bentuk potensial dari "kuru" (datang) adalah...', options: ['こられる', 'これる', 'きられる', 'こさせる'], correctAnswer: 'こられる' },
      { question: 'Lengkapi kalimat: "アスパラガスが ___。" (Saya tidak bisa makan asparagus)', options: ['たべません', 'たべられます', 'たべられません', 'たべさせません'], correctAnswer: 'たべられません' },
      { question: 'Bentuk potensial dari "kiku" (mendengar/bertanya) adalah...', options: ['きける', 'きかれる', 'きかせる', 'きらす'], correctAnswer: 'きける' },
      { question: 'Pilih kalimat yang benar.', options: ['わたしは えを かけます', 'わたしは えが かけます', 'わたしは えに かけます', 'わたしは えで かけます'], correctAnswer: 'わたしは えが かけます' },
      { question: 'Apa arti dari "じてんしゃに のれますか"? (Jitensha ni noremasu ka?)', options: ['Apakah Anda punya sepeda?', 'Apakah Anda mau naik sepeda?', 'Apakah Anda bisa naik sepeda?', 'Apakah Anda sudah naik sepeda?'], correctAnswer: 'Apakah Anda bisa naik sepeda?' }
    ],
    pronunciationPhrases: [
        { japanese: '日本語が 話せます', romaji: 'Nihongo ga hanasemasu' },
        { japanese: '漢字が 読めます', romaji: 'Kanji ga yomemasu' },
        { japanese: 'ピアノが 弾けます', romaji: 'Piano ga hikemasu' }
    ],
    vocabulary: [
        { japanese: 'はなせます', romaji: 'hanasemasu', indonesian: 'Bisa berbicara' },
        { japanese: 'かけます', romaji: 'kakemasu', indonesian: 'Bisa menulis' },
        { japanese: 'できます', romaji: 'dekimasu', indonesian: 'Bisa melakukan' },
        { japanese: 'こられます', romaji: 'koraremasu', indonesian: 'Bisa datang' },
    ]
  };