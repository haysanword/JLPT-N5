import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n5-gr-2',
    level: 'N5',
    title: 'MODUL 8: Pengantar Bentuk Biasa',
    description: 'Pelajari futsuukei, nai-form, dan pola kalimat larangan & keharusan.',
    xp: 280,
    content: `
      <h1>MODUL 8: Pengantar Bentuk Biasa (futsuukei) dan Bentuk nai-form</h1>
      <p><em>Bayangkan Anda sudah mulai akrab dengan teman-teman di Jepang. Berbicara dengan mereka menggunakan bentuk ～ます terus-menerus akan terasa sedikit kaku dan berjarak. Teman-teman Anda mungkin berbicara dengan lebih santai, menggunakan apa yang disebut "Bentuk Biasa" atau <strong>普通形 (futsuukei)</strong>. Modul ini adalah jembatan Anda dari bahasa Jepang "buku teks" ke bahasa Jepang yang hidup dan alami seperti yang digunakan dalam percakapan sehari-hari, anime, dan lagu.</em></p>

      <h2>A. Bentuk Biasa (futsuukei): Bahasa Percakapan Akrab</h2>
      <p>Bentuk Biasa adalah bentuk kasual/informal dari kata kerja, kata sifat, dan kata benda. Ini adalah kebalikan dari Bentuk Sopan (Bentuk ～ます/～です) yang telah kita pelajari.</p>
      
      <h3>Kapan Menggunakan Bentuk Biasa?</h3>
      <ul>
        <li>Saat berbicara dengan teman dekat, keluarga, atau orang yang lebih muda.</li>
        <li>Dalam tulisan informal seperti buku harian atau blog pribadi.</li>
        <li><strong>SANGAT PENTING:</strong> Saat mengutip kalimat sebelum partikel seperti 「と」 (misalnya dalam ～と おもいます).</li>
      </ul>
      <p><strong>Peringatan Budaya:</strong> Menggunakan Bentuk Biasa kepada orang yang lebih tua atau yang tidak Anda kenal baik dianggap tidak sopan. Selalu mulai dengan Bentuk Sopan!</p>

      <h3>Konjugasi ke Bentuk Biasa</h3>
      <p>Mari kita lihat perbandingannya dengan Bentuk Sopan.</p>
      <h4>1. Kata Kerja</h4>
      <table>
        <thead>
            <tr><th>Bentuk</th><th>Bentuk Sopan</th><th>Bentuk Biasa</th><th>Contoh (Biasa)</th></tr>
        </thead>
        <tbody>
            <tr><td>Kamus (Non-lampau, Positif)</td><td>いきます</td><td>いく</td><td>行く (iku)</td></tr>
            <tr><td>Nai (Non-lampau, Negatif)</td><td>いきません</td><td>いかない</td><td>行かない (ikanai)</td></tr>
            <tr><td>Ta (Lampau, Positif)</td><td>いきました</td><td>いった</td><td>行った (itta)</td></tr>
            <tr><td>Nai Lampau</td><td>いきませんでした</td><td>いかなかった</td><td>行かなかった (ikanakatta)</td></tr>
        </tbody>
      </table>
      
      <h4>2. Kata Sifat & Kata Benda</h4>
       <table>
        <thead>
            <tr><th>Jenis</th><th>Bentuk Sopan</th><th>Bentuk Biasa</th><th>Contoh (Biasa)</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>i-Keiyoushi</strong></td><td>おいしいです</td><td>おいしい</td><td>美味しい (oishii)</td></tr>
            <tr><td></td><td>おいしくないです</td><td>おいしくない</td><td>美味しくない (oishikunai)</td></tr>
            <tr><td></td><td>おいしかったです</td><td>おいしかった</td><td>美味しかった (oishikatta)</td></tr>
            <tr><td></td><td>おいしくなかったです</td><td>おいしくなかった</td><td>美味しくなかった (oishikunakatta)</td></tr>
            <tr><td><strong>na-Keiyoushi</strong></td><td>しずかです</td><td>しずかだ</td><td>静かだ (shizuka da)</td></tr>
            <tr><td></td><td>しずかじゃありません</td><td>しずかじゃない</td><td>静かじゃない (shizuka ja nai)</td></tr>
            <tr><td></td><td>しずかでした</td><td>しずかだった</td><td>静かだった (shizuka datta)</td></tr>
            <tr><td></td><td>しずかじゃありませんでした</td><td>しずかじゃなかった</td><td>静かじゃなかった (shizuka ja nakatta)</td></tr>
             <tr><td><strong>Kata Benda</strong></td><td>がくせいです</td><td>がくせいだ</td><td>学生だ (gakusei da)</td></tr>
             <tr><td></td><td>がくせいじゃありません</td><td>がくせいじゃない</td><td>学生じゃない (gakusei ja nai)</td></tr>
        </tbody>
      </table>
      
      <h3>Penggunaan dalam Kutipan: ～と おもいます (Saya Pikir...)</h3>
      <p>Ini adalah salah satu penggunaan Bentuk Biasa yang paling penting. Kalimat sebelum <code>と おもいます</code> atau <code>と いいます</code> (berkata bahwa...) harus dalam Bentuk Biasa.</p>
      <ul>
          <li><strong>Contoh:</strong> <em>(Saya pikir Tanaka-san akan datang besok.)</em>
              <br/><strong>Benar:</strong> 田中さんは明日来る<strong>と 思います</strong>。(Tanaka-san wa ashita <strong>kuru to omoimasu</strong>.)
              <br/><strong>Salah:</strong> <span style="text-decoration: line-through;">Tanaka-san wa ashita kimasu to omoimasu.</span>
          </li>
           <li><strong>Contoh:</strong> <em>(Dia bilang dia adalah seorang dokter.)</em>
              <br/><strong>Benar:</strong> 彼は医者だ<strong>と 言いました</strong>。(Kare wa isha <strong>da to iimashita</strong>.)
          </li>
      </ul>
      
      <h2>B. Bentuk Negatif (nai-form): Fondasi Larangan dan Keharusan</h2>
      <p>Bentuk <strong>ない (nai)</strong> adalah bentuk negatif kasual dari kata kerja. Menguasainya sangat penting karena menjadi dasar untuk banyak pola kalimat lain.</p>

      <h3>Aturan Konjugasi nai-form</h3>
      <ul>
          <li><strong>Grup 1:</strong> Ubah vokal akhir dari deret <code>-u</code> ke deret <code>-a</code>, lalu tambahkan <code>ない</code>. (Pengecualian: vokal <code>う</code> menjadi <code>わ</code>).
              <br/><em>Contoh: かく (kaku) → かか<strong>ない</strong> (kakanai), のむ (nomu) → のま<strong>ない</strong> (nomanai), かう (kau) → か<strong>わ</strong>ない (kawanai)</em>
          </li>
          <li><strong>Grup 2:</strong> Buang <code>る (ru)</code>, tambahkan <code>ない</code>.
              <br/><em>Contoh: たべる (taberu) → たべ<strong>ない</strong> (tabenai)</em>
          </li>
          <li><strong>Grup 3:</strong> Hafalkan.
              <br/><em>Contoh: する (suru) → <strong>しない</strong> (shinai), くる (kuru) → <strong>こない</strong> (konai)</em>
          </li>
      </ul>
      
      <h3>Penggunaan nai-form dalam Kalimat</h3>
      <h4>1. Tolong Jangan... (～ないでください)</h4>
      <p>Ini adalah cara sopan untuk meminta seseorang agar tidak melakukan sesuatu.</p>
      <p><strong>Pola:</strong> <code>[Kata Kerja bentuk Nai] + でください</code></p>
      <ul>
          <li><strong>Contoh di Museum:</strong> ここで写真(しゃしん)を<strong>撮(と)らないでください</strong>。(Koko de shashin o <strong>toranai de kudasai</strong>.) - Tolong jangan mengambil foto di sini.</li>
          <li><strong>Contoh kepada Teman yang Sakit:</strong> 無理(むり)を<strong>しないでください</strong>。(Muri o <strong>shinai de kudasai</strong>.) - Tolong jangan memaksakan diri.</li>
      </ul>

      <h4>2. Harus... (～なければなりません)</h4>
      <p>Ini adalah cara standar dan sedikit formal untuk menyatakan keharusan atau kewajiban.</p>
      <p><strong>Pola:</strong> <code>[Kata Kerja bentuk Nai, buang い] + ければなりません</code></p>
      <ul>
          <li><strong>Contoh:</strong> 毎日(まいにち)、薬(くすり)を<strong>飲(の)まなければなりません</strong>。(Mainichi, kusuri o <strong>nomanakereba narimasen</strong>.) - Saya harus minum obat setiap hari.</li>
          <li><strong>Bentuk Percakapan:</strong> Dalam obrolan, sering disingkat menjadi <code>～なきゃ (nakya)</code> atau <code>～ないと (naito)</code>.
          <br/>Contoh: ああ、もう帰らなきゃ！ (Aa, mou kaeranakya!) - Oh, sudah harus pulang!</li>
      </ul>
    `,
    audioScript: 'Modul ini memperkenalkan bentuk biasa atau futsuukei, yang digunakan dalam percakapan kasual dan sebelum "to omoimasu". Kita juga akan fokus pada bentuk nai, seperti "tabenai". Dari sini, kita bisa membuat kalimat larangan sopan "naide kudasai", dan kalimat keharusan "nakereba narimasen".',
    quiz: [
      {
        question: 'Bagaimana bentuk biasa (bentuk kamus) dari "たべます"?',
        options: ['たべない', 'たべた', 'たべる', 'たべて'],
        correctAnswer: 'たべる'
      },
      {
        question: 'Lengkapi kalimat: "あしたは あめが ___ と おもいます。"',
        options: ['ふります', 'ふって', 'ふらない', 'ふる'],
        correctAnswer: 'ふる'
      },
      {
        question: 'Bagaimana cara mengatakan "Tolong jangan merokok di sini" dengan sopan?',
        options: [
          'ここで たばこを すわないでください。',
          'ここで たばこを すいません。',
          'ここで たばこを すわなければなりません。',
          'ここで たばこを すったことがあります。'
        ],
        correctAnswer: 'ここで たばこを すわないでください。'
      },
      {
        question: 'Bentuk nai-form dari kata kerja "いきます" (pergi) adalah...',
        options: ['いかない', 'いかないで', 'いきない', 'いけない'],
        correctAnswer: 'いかない'
      },
      { question: 'Bentuk biasa dari "しずかです" (shizuka desu) adalah...', options: ['しずか', 'しずかった', 'しずかだ', 'しずかじゃない'], correctAnswer: 'しずかだ' },
      { question: 'Bentuk nai-form dari kata kerja "まちます" (machimasu - menunggu) adalah...', options: ['またない', 'まちゃない', 'またない', 'まない'], correctAnswer: 'またない' },
      { question: 'Lengkapi kalimat: "かれは がくせいだ ___ いいました。" (Dia berkata bahwa dia adalah mahasiswa)', options: ['を', 'に', 'が', 'と'], correctAnswer: 'と' },
      { question: 'Apa arti dari "はやく ねなければなりません"?', options: ['Tidak perlu tidur cepat', 'Harus tidur cepat', 'Tolong jangan tidur cepat', 'Pernah tidur cepat'], correctAnswer: 'Harus tidur cepat' },
      { question: 'Bentuk nai-form dari "きます" (kimasu - datang) adalah...', options: ['きない', 'こない', 'かない', 'しない'], correctAnswer: 'こない' },
      { question: 'Pola 「～ないでください」 digunakan untuk...', options: ['Menyatakan keharusan', 'Memberi izin', 'Membuat larangan sopan', 'Menyatakan pendapat'], correctAnswer: 'Membuat larangan sopan' },
      { question: 'Bentuk lampau kasual (bentuk Ta) dari "おいしい" adalah...', options: ['おいしいでした', 'おいしかった', 'おいしいだった', 'おいしいだ'], correctAnswer: 'おいしかった' },
      { question: 'Lengkapi kalimat: "ここで あそば___ください。" (Tolong jangan bermain di sini)', options: ['ない', 'ないで', 'なくて', 'なければ'], correctAnswer: 'ないで' },
      { question: 'Bentuk biasa negatif lampau dari kata benda "あめ" (hujan) adalah...', options: ['あめじゃなかった', 'あめじゃありません', 'あめじゃありませんでした', 'あめじゃないでした'], correctAnswer: 'あめじゃなかった' },
      { question: 'Pola 「～なければなりません」 dibentuk dari...', options: ['Bentuk Kamus', 'Bentuk Te', 'Bentuk Ta', 'Bentuk Nai'], correctAnswer: 'Bentuk Nai' },
      { question: 'Dalam percakapan kasual, "いかなければなりません" sering disingkat menjadi...', options: ['いきたい', 'いかなくてもいい', 'いかなきゃ', 'いった'], correctAnswer: 'いかなきゃ' }
    ],
    pronunciationPhrases: [
        { japanese: '明日雨が降ると 思います', romaji: 'Ashita ame ga furu to omoimasu' },
        { japanese: '心配しないでください', romaji: 'Shinpai shinai de kudasai' },
        { japanese: '早く寝なければなりません', romaji: 'Hayaku nenakereba narimasen' }
    ],
    vocabulary: [
        { japanese: '普通形 (ふつうけい)', romaji: 'futsuukei', indonesian: 'Bentuk Biasa (kasual)' },
        { japanese: '～と 思います', romaji: '~to omoimasu', indonesian: 'Saya pikir...' },
        { japanese: '～ないでください', romaji: '~naide kudasai', indonesian: 'Tolong jangan...' },
        { japanese: '～なければなりません', romaji: '~nakereba narimasen', indonesian: 'Harus...' },
        { japanese: '心配します (しんぱい)', romaji: 'shinpai shimasu', indonesian: 'Khawatir' },
        { japanese: '無理をします (むり)', romaji: 'muri o shimasu', indonesian: 'Memaksakan diri' },
    ]
  };