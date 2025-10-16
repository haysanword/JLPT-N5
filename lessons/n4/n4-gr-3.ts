import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-gr-3',
    level: 'N4',
    title: 'Pendapat, Keharusan & Larangan',
    description: 'Ekspresikan pendapat (～と思います), kewajiban (～なければなりません), dan larangan (～てはいけません).',
    xp: 230,
    content: `
      <h1>Ekspresi Lebih Lanjut: Opini, Kewajiban, dan Larangan</h1>
      <p>Tiga pola ini akan sangat meningkatkan kemampuan Anda untuk berkomunikasi dalam situasi yang lebih kompleks.</p>

      <h2>Menyatakan Pendapat: ～と思います (to omoimasu) - "Saya Pikir..."</h2>
      <p>Gunakan ini untuk menyatakan pendapat, pemikiran, atau dugaan Anda. Polanya adalah meletakkan <code>と思います (to omoimasu)</code> setelah sebuah kalimat lengkap dalam <strong>bentuk biasa/kasual</strong>.</p>
      <p><em>Contoh: この ほんは おもしろい<strong>と おもいます</strong>。(Kono hon wa omoshiroi <strong>to omoimasu</strong>.) - Saya pikir buku ini menarik.</em><br/>
      <small>(Kalimat aslinya: この本はおもしろい - Kono hon wa omoshiroi - Buku ini menarik)</small></p>
      <p><em>Contoh: あした あめが ふる<strong>と おもいます</strong>。(Ashita ame ga furu <strong>to omoimasu</strong>.) - Saya pikir besok akan hujan.</em><br/>
      <small>(Kalimat aslinya: 明日雨が降る - Ashita ame ga furu - Besok hujan)</small></p>
      
      <h2>Menyatakan Keharusan: ～なければなりません (nakereba narimasen) - "Harus..."</h2>
      <p>Ini adalah cara formal untuk mengatakan "harus" atau "wajib". Meskipun panjang, polanya logis.</p>
      <p><strong>Cara membuat:</strong> Ambil <strong>bentuk Nai</strong> dari kata kerja, buang akhiran <code>い (i)</code>, lalu tambahkan <code>ければなりません (kereba narimasen)</code>.</p>
      <p><em>Contoh: のみます (minum) → のまない (bentuk Nai) → のま<strong>なければなりません</strong> (noma<strong>nakereba narimasen</strong>) - Harus minum.</em></p>
      <p><em>Contoh Kalimat: くすりを のまなければなりません。(Kusuri o nomanakereba narimasen.) - Saya harus minum obat.</em></p>
      <p><strong>Bentuk Singkat (Percakapan):</strong> Dalam obrolan sehari-hari, Anda akan lebih sering mendengar <code>～なきゃ (nakya)</code> atau <code>～ないと (naito)</code>. Contoh: <code>いかなきゃ (ikanakya)</code> - Harus pergi!</p>

      <h2>Menyatakan Larangan: ～てはいけません (te wa ikemasen) - "Tidak Boleh..."</h2>
      <p>Gunakan pola ini untuk menyatakan larangan atau aturan.</p>
      <p><strong>Cara membuat:</strong> Ambil <strong>bentuk Te</strong> dari kata kerja, lalu tambahkan <code>はいけません (wa ikemasen)</code>.</p>
      <p><em>Contoh: すいます (merokok) → すって (bentuk Te) → すって<strong>はいけません</strong> (sutte <strong>wa ikemasen</strong>) - Tidak boleh merokok.</em></p>
      <p><em>Contoh Kalimat: ここで たばこを すってはいけません。(Koko de tabako o sutte wa ikemasen.) - Tidak boleh merokok di sini.</em></p>
    `,
    audioScript: 'Untuk bilang "Saya pikir", gunakan "to omoimasu" di akhir kalimat kasual. Untuk "harus", gunakan pola "nakereba narimasen". Dan untuk melarang, gunakan bentuk Te plus "wa ikemasen".',
    quiz: [
      { question: 'Bagaimana cara mengatakan "Harus belajar"?', options: ['べんきょうしたいです', 'べんきょうしなければなりません', 'べんきょうしなくてもいいです', 'べんきょうするでしょう'], correctAnswer: 'べんきょうしなければなりません' },
      { question: 'Pola ～と思います digunakan untuk...', options: ['Menyatakan kemampuan', 'Menyatakan pendapat', 'Menyatakan larangan', 'Menyatakan pengalaman'], correctAnswer: 'Menyatakan pendapat' },
      { question: 'Lengkapi kalimat: としょかんで しゃしんを とって___。(Tidak boleh mengambil foto di perpustakaan)', options: ['もいいです', 'ください', 'はいけません', 'います'], correctAnswer: 'はいけません' },
      { question: 'Kalimat sebelum 「と思います」 harus dalam bentuk...', options: ['Sopan (-masu)', 'Biasa/Kasual (Futsuukei)', 'Perintah', 'Lampau saja'], correctAnswer: 'Biasa/Kasual (Futsuukei)' },
      { question: 'Ubah "いきます" (pergi) menjadi bentuk "harus pergi".', options: ['いかなければなりません', 'いかなければいけません', 'いくなければなりません', 'いかなければなりません'], correctAnswer: 'いかなければなりません' },
      { question: 'Lengkapi kalimat: "私は 日本が きれいだ ___。" (Saya pikir Jepang itu indah)', options: ['を思います', 'と思います', 'に思います', 'だと思います'], correctAnswer: 'だと思います' },
      { question: 'Pola 「～てはいけません」 dibentuk dari...', options: ['Bentuk Ta', 'Bentuk Te', 'Bentuk Nai', 'Bentuk Kamus'], correctAnswer: 'Bentuk Te' },
      { question: 'Apa bentuk kasual/singkat dari 「食べなければなりません」?', options: ['たべなきゃ', 'たべたい', 'たべた', 'たべる'], correctAnswer: 'たべなきゃ' },
      { question: 'Bagaimana cara mengatakan "Saya pikir dia tidak akan datang"?', options: ['かれは こないと おもいます。', 'かれは きませんと おもいます。', 'かれは こないですと おもいます。', 'かれは くるないと おもいます。'], correctAnswer: 'かれは こないと おもいます。' },
      { question: 'Lengkapi kalimat: "ここで およいで___。" (Tidak boleh berenang di sini)', options: ['ください', 'もいいです', 'はいけません', 'います'], correctAnswer: 'はいけません' },
      { question: 'Pola 「～なければなりません」 berasal dari bentuk kata kerja apa?', options: ['Bentuk Te', 'Bentuk Ta', 'Bentuk Kamus', 'Bentuk Nai'], correctAnswer: 'Bentuk Nai' },
      { question: '"Tidak boleh masuk" dalam bahasa Jepang adalah...', options: ['はいってもいいです', 'はいってはいけません', 'はいらなければなりません', 'はいらないでください'], correctAnswer: 'はいってはいけません' },
      { question: 'Pilih kalimat yang benar.', options: ['日本語は むずかしいです と思います。', '日本語は むずかしい と思います。', '日本語は むずかしいと思います。', '日本語は むずかしいと思います。'], correctAnswer: '日本語は むずかしい と思います。' },
      { question: 'Apa arti dari 「もう ねなければなりません」?', options: ['Sudah tidur', 'Mau tidur', 'Harus tidur sekarang', 'Tidak boleh tidur'], correctAnswer: 'Harus tidur sekarang' },
      { question: 'Pola 「～てはいけません」 digunakan untuk menyatakan...', options: ['Izin', 'Keinginan', 'Larangan', 'Kemampuan'], correctAnswer: 'Larangan' }
    ],
    pronunciationPhrases: [
        { japanese: '面白いと 思います', romaji: 'Omoshiroi to omoimasu' },
        { japanese: '薬を 飲まなければなりません', romaji: 'Kusuri o nomanakereba narimasen' },
        { japanese: 'ここで タバコを吸ってはいけません', romaji: 'Koko de tabako o sutte wa ikemasen' }
    ],
    vocabulary: [
        { japanese: '～と思います', romaji: 'to omoimasu', indonesian: 'Saya pikir...' },
        { japanese: '～なければなりません', romaji: 'nakereba narimasen', indonesian: 'Harus...' },
        { japanese: '～てはいけません', romaji: 'te wa ikemasen', indonesian: 'Tidak boleh...' },
        { japanese: 'くすり', romaji: 'kusuri', indonesian: 'Obat' },
    ]
  };