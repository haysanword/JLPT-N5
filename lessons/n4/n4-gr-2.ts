import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-gr-2',
    level: 'N4',
    title: 'Alasan, Pengalaman & Contoh',
    description: 'Pelajari cara memberi alasan (から/ので), menceritakan pengalaman (～たことがある), dan menyebutkan contoh (～たり～たり).',
    xp: 240,
    content: `
      <h1>Tata Bahasa untuk Cerita yang Lebih Kaya</h1>
      <p>Dengan tiga pola ini, Anda bisa mulai menceritakan alasan, pengalaman, dan memberikan contoh dalam percakapan Anda.</p>
      
      <h2>Memberi Alasan: ～から vs ～ので</h2>
      <p>Keduanya berarti "karena", tapi punya nuansa yang berbeda.</p>
      <ul>
        <li><strong>～から (kara):</strong> Alasan yang bersifat <strong>subjektif</strong>. Anda menekankan pendapat atau perasaan Anda sebagai penyebabnya. Lebih umum dalam percakapan sehari-hari.
            <br/><em>Contoh: あしたは やすみです<strong>から</strong>、えいがを みます。(Ashita wa yasumi desu <strong>kara</strong>, eiga o mimasu.) - <strong>Karena</strong> (menurut saya) besok libur, saya akan nonton film.</em>
        </li>
        <li><strong>～ので (node):</strong> Sebab-akibat yang bersifat <strong>objektif</strong>. Ini terdengar lebih halus dan sopan. Sering digunakan untuk meminta izin atau dalam situasi yang lebih formal.
            <br/><em>Contoh: あめが ふっている<strong>ので</strong>、でかけません。(Ame ga futte iru <strong>node</strong>, dekakemasen.) - <strong>Karena</strong> (faktanya) sedang hujan, saya tidak akan keluar.</em>
        </li>
      </ul>

      <h2>Menyatakan Pengalaman: ～たことがあります (ta koto ga arimasu)</h2>
      <p>Gunakan pola ini untuk mengatakan "Saya pernah...". Ini sangat mudah!</p>
      <p><strong>Cara membuat:</strong> Ambil kata kerja <strong>bentuk lampau (Bentuk Ta)</strong>, lalu tambahkan <strong><code>ことがあります (koto ga arimasu)</code></strong>.</p>
      <p><em>Contoh: わたしは にほんへ <strong>いったことがあります</strong>。(Watashi wa Nihon e <strong>itta koto ga arimasu</strong>.) - Saya pernah pergi ke Jepang.</em><br/>(Berasal dari いきます → いきました → いった)</p>
      <p><em>Contoh: すしを <strong>たべたことがあります</strong>。(Sushi o <strong>tabeta koto ga arimasu</strong>.) - Saya pernah makan sushi.</em><br/>(Berasal dari たべます → たべました → たべた)</p>

      <h2>Menyebutkan Contoh Aktivitas: ～たり～たりします (tari... tari shimasu)</h2>
      <p>Gunakan pola ini saat Anda ingin menyebutkan beberapa aktivitas secara acak, seperti "kadang..., kadang...", atau "dan lain-lain".</p>
      <p><strong>Cara membuat:</strong> Ambil <strong>Bentuk Ta</strong> dari beberapa kata kerja, ganti 'a' di akhir menjadi 'ari', lalu tutup kalimat dengan <code>します (shimasu)</code>.</p>
      <p><em>Contoh: にちようびは えいがを み<strong>たり</strong>、ほんを よん<strong>だり</strong>します。(Nichiyoubi wa eiga o mi<strong>tari</strong>, hon o yon<strong>dari</strong> shimasu.) - Di hari Minggu, saya (misalnya) nonton film, baca buku, (dan melakukan hal lain juga).</em></p>
    `,
    audioScript: 'Untuk memberi alasan, "kara" lebih subjektif, sedangkan "node" lebih objektif dan sopan. Untuk bilang "pernah", gunakan bentuk Ta plus "koto ga arimasu". Untuk memberi contoh kegiatan, gunakan pola "tari tari shimasu".',
    quiz: [
      { question: 'Bagaimana cara mengatakan "Saya pernah makan sushi"?', options: ['すしを たべたいです', 'すしを たべたことがあります', 'すしを たべなければなりません', 'すしを たべすぎました'], correctAnswer: 'すしを たべたことがあります' },
      { question: 'Pola ~たり～たりします digunakan untuk...', options: ['Menyatakan keharusan', 'Memberi alasan', 'Menyebutkan beberapa contoh kegiatan', 'Menyatakan kemampuan'], correctAnswer: 'Menyebutkan beberapa contoh kegiatan' },
      { question: 'Pola mana yang lebih halus/sopan untuk memberi alasan?', options: ['～から', '～ので', '～たい', '～すぎる'], correctAnswer: '～ので' },
      { question: 'Lengkapi kalimat: "きのうの よるは、おんがくを ___、ともだちと はなし___ しました。"', options: ['きいて/はなして', 'きいたり/はなしたり', 'きく/はなす', 'きいた/はなした'], correctAnswer: 'きいたり/はなしたり' },
      { question: 'Untuk menyatakan alasan yang bersifat subjektif atau pendapat pribadi, lebih baik menggunakan...', options: ['～ので', '～から', '～ために', '～ように'], correctAnswer: '～から' },
      { question: 'Bentuk kata kerja yang dibutuhkan sebelum 「ことがあります」 adalah...', options: ['Bentuk Kamus', 'Bentuk Te', 'Bentuk Ta', 'Bentuk Nai'], correctAnswer: 'Bentuk Ta' },
      { question: 'Bagaimana bentuk negatif dari 「日本へ 行ったことがあります」?', options: ['日本へ 行きませんでした', '日本へ 行きません', '日本へ 行ったことがありません', '日本へ 行かないことです'], correctAnswer: '日本へ 行ったことがありません' },
      { question: 'Lengkapi kalimat: "バスが おくれた___、かいぎに まにあいませんでした。" (Karena bus terlambat, saya tidak keburu rapat). Pilih yang paling alami untuk situasi objektif ini.', options: ['から', 'ので', 'のに', 'けど'], correctAnswer: 'ので' },
      { question: 'Kalimat "Di akhir pekan saya melakukan hal seperti berbelanja dan bersih-bersih" adalah...', options: ['しゅうまつは かいものしたり、そうじしたりします。', 'しゅうまつは かいものして、そうじします。', 'しゅうまつは かいものしたことがあります。', 'しゅうまつは かいものするから、そうじします。'], correctAnswer: 'しゅうまつは かいものしたり、そうじしたりします。' },
      { question: 'Apa perbedaan nuansa utama antara 「から」 dan 「ので」?', options: ['から untuk masa lampau, ので untuk masa depan', 'から lebih formal, ので lebih kasual', 'から lebih subjektif, ので lebih objektif', 'Tidak ada perbedaan sama sekali'], correctAnswer: 'から lebih subjektif, ので lebih objektif' },
      { question: 'Bentuk 「～たり」 dalam pola 「～たり～たりします」 berasal dari...', options: ['Bentuk Te + り', 'Bentuk Kamus + たり', 'Bentuk Ta + り', 'Bentuk Nai + たり'], correctAnswer: 'Bentuk Ta + り' },
      { question: 'Pilih kalimat yang benar.', options: ['さしみを たべるたり、すしを たべるたりします。', 'さしみを たべたり、すしを たべたりします。', 'さしみを たべて、すしを たべたりします。', 'さしみを たべたこと、すしを たべたことします。'], correctAnswer: 'さしみを たべたり、すしを たべたりします。' },
      { question: 'Pola 「～たことがあります」 digunakan untuk menanyakan/menyatakan...', options: ['Keinginan', 'Kemampuan', 'Pengalaman', 'Keharusan'], correctAnswer: 'Pengalaman' },
      { question: '"Karena kepala saya sakit, saya minum obat." Kalimat yang paling alami adalah...', options: ['あたまが いたいから、くすりを のみます。', 'あたまが いたいので、くすりを のみます。', 'A dan B keduanya alami', 'Hanya A yang benar'], correctAnswer: 'A dan B keduanya alami' },
      { question: 'Bagaimana cara bertanya, "Apakah Anda pernah ke Amerika?"', options: ['アメリカへ いきますか。', 'アメリカへ いきましたか。', 'アメリカへ いきたいですか。', 'アメリカへ いったことがありますか。'], correctAnswer: 'アメリカへ いったことがありますか。' }
    ],
    pronunciationPhrases: [
        { japanese: '雨が 降っているので、出かけません', romaji: 'Ame ga futte iru node, dekakemasen' },
        { japanese: '日本へ 行ったことがあります', romaji: 'Nihon e itta koto ga arimasu' },
        { japanese: '映画を見たり、本を読んだりします', romaji: 'Eiga o mitari, hon o yondari shimasu' }
    ],
    vocabulary: [
        { japanese: 'ので', romaji: 'node', indonesian: 'Karena (objektif)' },
        { japanese: '～たことがあります', romaji: 'ta koto ga arimasu', indonesian: '(Pernah...)' },
        { japanese: '～たり～たりします', romaji: 'tari tari shimasu', indonesian: '(Melakukan hal seperti... dan...)' },
    ]
  };