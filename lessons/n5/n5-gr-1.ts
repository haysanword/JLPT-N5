import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n5-gr-1',
    level: 'N5',
    title: 'MODUL 7: Bentuk ta-form',
    description: 'Konjugasi bentuk lampau kasual dan menceritakan pengalaman.',
    xp: 260,
    content: `
      <h1>MODUL 7: Bentuk ta-form dan Pengalaman</h1>
      <p><em>Bayangkan seorang teman baru dari Jepang bertanya, 「日本へ行ったことがありますか？」 (Pernahkah kamu pergi ke Jepang?). Bagaimana cara menjawabnya? Atau bagaimana cara mengatakan, "Dulu saya tidak bisa bahasa Jepang, tapi sekarang menjadi bisa"? Modul ini adalah kunci untuk menceritakan masa lalu dan pengalaman Anda, sebuah langkah besar untuk membuat percakapan Anda menjadi lebih personal dan menarik.</em></p>

      <h2>A. Konjugasi ta-form: Jantung dari Cerita Masa Lalu</h2>
      <p><strong>Bentuk ta (た形)</strong> adalah bentuk lampau kasual dari kata kerja. Ini adalah "kembaran" dari bentuk <code>～ました</code> yang lebih formal. Aturan perubahannya sangat mirip dengan <strong>bentuk te</strong>, yang membuatnya lebih mudah dihafal!</p>
      
      <h3>Aturan Konjugasi</h3>
      <p>Sama seperti bentuk te, kuncinya ada di huruf sebelum <code>ます</code>.</p>
      
      <h4>Grup 1 (Godan-doushi)</h4>
      <ul>
        <li>Akhiran <strong>い, ち, り</strong> → <strong>った</strong>
            <br/><em>Contoh: かいます (kau) → かった (katta), まちます (matsu) → まった (matta), つくります (tsukuru) → つくった (tsukutta)</em></li>
        <li>Akhiran <strong>み, び, に</strong> → <strong>んだ</strong>
            <br/><em>Contoh: よみます (yomu) → よんだ (yonda), あそびます (asobu) → あそんだ (asonda), しにます (shinu) → しんだ (shinda)</em></li>
        <li>Akhiran <strong>き</strong> → <strong>いた</strong>
            <br/><em>Contoh: ききます (kiku) → きいた (kiita)</em></li>
        <li>Akhiran <strong>ぎ</strong> → <strong>いだ</strong>
            <br/><em>Contoh: およぎます (oyogu) → およいだ (oyoida)</em></li>
        <li>Akhiran <strong>し</strong> → <strong>した</strong>
            <br/><em>Contoh: はなします (hanasu) → はなした (hanashita)</em></li>
        <li><strong>Pengecualian:</strong> いきます (iku) → <strong>いった (itta)</strong></li>
      </ul>

      <h4>Grup 2 (Ichidan-doushi)</h4>
      <p>Ini yang paling mudah! Buang <code>ます</code>, ganti dengan <code>た</code>.</p>
      <ul>
        <li><em>Contoh: たべます (taberu) → たべた (tabeta), みます (miru) → みた (mita)</em></li>
      </ul>
      
      <h4>Grup 3 (Fukisoku-doushi / Tidak Beraturan)</h4>
      <p>Hanya ada dua, jadi hafalkan saja!</p>
      <ul>
        <li>します (suru) → <strong>した (shita)</strong></li>
        <li>きます (kuru) → <strong>きた (kita)</strong></li>
      </ul>

      <h2>B. Penggunaan ta-form: Lebih dari Sekadar Masa Lampau</h2>
      
      <h3>1. Masa Lampau Kasual</h3>
      <p>Saat berbicara dengan teman atau keluarga, Anda akan menggunakan bentuk ta, bukan <code>～ました</code>.</p>
      <blockquote>
        <p><strong>Formal:</strong> きのう、えいがを <strong>みました</strong>。(Kinou, eiga o <strong>mimashita</strong>.)</p>
        <p><strong>Kasual:</strong> きのう、えいが <strong>みた</strong>。(Kinou, eiga <strong>mita</strong>.) - "Kemarin, nonton film."</p>
      </blockquote>
      
      <h3>2. Pola Emas: ～たことがあります (Pernah Melakukan)</h3>
      <p>Ini adalah salah satu pola kalimat paling berguna untuk memulai percakapan dan berbagi cerita. Gunakan ini untuk menceritakan pengalaman Anda.</p>
      <p><strong>Pola:</strong> <code>[Kata Kerja bentuk ta] + ことがあります (koto ga arimasu)</code></p>
      <ul>
        <li><strong>Contoh Positif:</strong> わたしは すしを <strong>たべたことがあります</strong>。(Watashi wa sushi o <strong>tabeta koto ga arimasu</strong>.) - Saya pernah makan sushi.</li>
        <li><strong>Contoh Negatif:</strong> わたしは ほっかいどうへ <strong>いったことがありません</strong>。(Watashi wa Hokkaido e <strong>itta koto ga arimasen</strong>.) - Saya belum pernah pergi ke Hokkaido.</li>
        <li><strong>Contoh Pertanyaan:</strong> にほんの うたを <strong>きいたことがありますか</strong>。(Nihon no uta o <strong>kiita koto ga arimasu ka</strong>?) - Pernahkah Anda mendengar lagu Jepang?</li>
      </ul>
      <p><strong>Catatan Budaya:</strong> Bertanya tentang pengalaman seseorang (seperti perjalanan atau makanan) adalah cara yang sangat umum dan sopan untuk menunjukkan ketertarikan pada mereka dalam budaya Jepang.</p>
      
      <h3>3. Ungkapan Perubahan Keadaan: ～なりました (narimashita)</h3>
      <p><code>～なります</code> berarti "menjadi". Ini digunakan untuk menunjukkan perubahan dari satu kondisi ke kondisi lain. Ini adalah cara yang bagus untuk berbicara tentang pertumbuhan pribadi atau perubahan situasi.</p>
      
      <h4>Aturan Penggunaan:</h4>
      <ul>
        <li><strong>Dengan Kata Benda & Kata Sifat-na:</strong> Gunakan partikel <code>に</code> sebelum <code>なりました</code>.
          <br/><em>Contoh: わたしは せんせい<strong>に なりました</strong>。(Watashi wa sensei <strong>ni narimashita</strong>.) - Saya (telah) menjadi seorang guru.</em>
          <br/><em>Contoh: へやが きれい<strong>に なりました</strong>。(Heya ga kirei <strong>ni narimashita</strong>.) - Kamarnya (telah) menjadi bersih.</em>
        </li>
        <li><strong>Dengan Kata Sifat-i:</strong> Ubah akhiran <code>い (i)</code> menjadi <code>く (ku)</code>, lalu tambahkan <code>なりました</code>.
          <br/><em>Contoh: きょうは あつ<strong>く なりました</strong>ね。(Kyou wa atsu<strong>ku narimashita</strong> ne.) - Hari ini menjadi panas ya. (Dari あつい - atsui)</em>
        </li>
      </ul>
      <p><strong>Contoh Keseharian:</strong> Dulu Anda tidak bisa kanji, sekarang bisa. Anda bisa berkata: 漢字が分かるよう<strong>になりました</strong>。(Kanji ga wakaru you <strong>ni narimashita</strong>.) - Saya menjadi mengerti Kanji.</p>
    `,
    audioScript: 'Modul ini membahas bentuk ta, yaitu bentuk lampau kasual. Aturannya mirip dengan bentuk te. Pola yang sangat penting adalah "ta koto ga arimasu" yang berarti "pernah". Misalnya, "sushi o tabeta koto ga arimasu". Kita juga akan belajar "narimashita" yang berarti "menjadi", untuk menunjukkan perubahan keadaan.',
    quiz: [
      {
        question: 'Bagaimana bentuk ta dari kata kerja "かきます" (kakimasu - menulis)?',
        options: ['かった (katta)', 'かいた (kaita)', 'かいだ (kaida)', 'かした (kashita)'],
        correctAnswer: 'かいた (kaita)'
      },
      {
        question: 'Anda ingin mengatakan "Saya pernah mendaki Gunung Fuji". Kalimat mana yang paling tepat?',
        options: [
          'ふじさんに のぼりたいです。',
          'ふじさんに のぼることができません。',
          'ふじさんに のぼったことがあります。',
          'ふじさんに のぼりましょう。'
        ],
        correctAnswer: 'ふじさんに のぼったことがあります。'
      },
      {
        question: 'Lengkapi kalimat berikut: "去年２５さい___。" (Tahun lalu saya berumur 25 tahun / menjadi 25 tahun).',
        options: ['を なりました', 'で なりました', 'に なりました', 'と なりました'],
        correctAnswer: 'に なりました'
      },
      {
        question: 'Apa arti dari kalimat "日本語が上手になりましたね"? (Nihongo ga jouzu ni narimashita ne)',
        options: [
            'Bahasa Jepangmu bagus.',
            'Bahasa Jepangmu (telah) menjadi mahir ya.',
            'Saya ingin bahasa Jepang saya mahir.',
            'Bahasa Jepang itu mahir.'
        ],
        correctAnswer: 'Bahasa Jepangmu (telah) menjadi mahir ya.'
      },
      { question: 'Bentuk ta dari "のみます" (nomimasu - minum) adalah...', options: ['のんだ', 'のいた', 'のった', 'のした'], correctAnswer: 'のんだ' },
      { question: 'Bagaimana cara bertanya "Apakah Anda pernah ke Kyoto?"', options: ['きょうとへ いきますか。', 'きょうとへ いきましたか。', 'きょうとへ いったことがありますか。', 'きょうとへ いくことがありません。'], correctAnswer: 'きょうとへ いったことがありますか。' },
      { question: 'Lengkapi kalimat: "さむい → さむ___ なりました。" (Menjadi dingin)', options: ['い', 'な', 'に', 'く'], correctAnswer: 'く' },
      { question: 'Bentuk ta dari kata kerja Grup 2 "ねます" (nemasu - tidur) adalah...', options: ['ねた', 'ねんだ', 'ねった', 'ねした'], correctAnswer: 'ねた' },
      { question: 'Kalimat "Saya belum pernah makan natto" adalah...', options: ['なっとうを たべたことがあります。', 'なっとうを たべることがありません。', 'なっとうを たべたことがありません。', 'なっとうを たべませんでした。'], correctAnswer: 'なっとうを たべたことがありません。' },
      { question: 'Bentuk ta dari kata kerja tidak beraturan "します" (shimasu - melakukan) adalah...', options: ['した', 'すた', 'きた', 'しった'], correctAnswer: 'した' },
      { question: 'Pola 「～たことがあります」 digunakan untuk menyatakan...', options: ['Keinginan', 'Pengalaman masa lalu', 'Perintah', 'Kemampuan'], correctAnswer: 'Pengalaman masa lalu' },
      { question: 'Kata kerja "あそびます" (asobimasu - bermain) memiliki bentuk ta...', options: ['あそんだ', 'あそいた', 'あそった', 'あそした'], correctAnswer: 'あそんだ' },
      { question: 'Bagaimana cara mengatakan "Dulu saya benci sayuran, tapi sekarang menjadi suka"?', options: ['やさいがきらいに なりました。', 'やさいがすきに なりました。', 'やさいが きらいでしたが、すきに なりました。', 'やさいが すきですが、きらいに なりました。'], correctAnswer: 'やさいが きらいでしたが、すきに なりました。' },
      { question: 'Bentuk ta dari kata kerja pengecualian "いきます" (ikimasu - pergi) adalah...', options: ['いいた', 'いった', 'いんだ', 'いした'], correctAnswer: 'いった' },
      { question: 'Pola 「～く なります」 digunakan untuk perubahan keadaan dengan...', options: ['Kata benda', 'Kata kerja', 'Kata sifat-na', 'Kata sifat-i'], correctAnswer: 'Kata sifat-i' }
    ],
    pronunciationPhrases: [
        { japanese: '日本へ行ったことがありますか', romaji: 'Nihon e itta koto ga arimasu ka' },
        { japanese: 'すしを食べたことがあります', romaji: 'Sushi o tabeta koto ga arimasu' },
        { japanese: '日本語が上手になりました', romaji: 'Nihongo ga jouzu ni narimashita' }
    ],
    vocabulary: [
        { japanese: '～たことがあります', romaji: '~ta koto ga arimasu', indonesian: 'Pernah (melakukan...)' },
        { japanese: 'けいけん', romaji: 'keiken', indonesian: 'Pengalaman' },
        { japanese: '～に なります', romaji: '~ni narimasu', indonesian: 'Menjadi... (untuk kata benda/sifat-na)' },
        { japanese: '～く なります', romaji: '~ku narimasu', indonesian: 'Menjadi... (untuk kata sifat-i)' },
        { japanese: '去年 (きょねん)', romaji: 'kyonen', indonesian: 'Tahun lalu' },
        { japanese: '上手 (じょうず)', romaji: 'jouzu', indonesian: 'Mahir, pandai' },
    ]
  };
