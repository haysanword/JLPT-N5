import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n5-cl-1',
    level: 'N5',
    title: 'MODUL 4: Pola Kalimat',
    description: 'Pelajari kata sifat, partikel objek を, dan pola ajakan (~masen ka / ~mashou).',
    xp: 250,
    content: `
      <h1>Pola Kalimat Lanjutan: Deskripsi, Aksi, dan Ajakan</h1>
      <p><em>Bayangkan Anda sedang berada di sebuah toko di Akihabara. Anda melihat action figure yang keren. Bagaimana cara Anda mengatakan, "Ini mahal"? Atau saat di restoran, bagaimana cara memesan dengan mengatakan, "Saya minum teh"? Setelah itu, bagaimana cara mengajak teman, "Maukah kita pergi nonton film?" Modul ini akan mengajarkan Anda tiga pola kalimat penting untuk percakapan sehari-hari yang lebih hidup.</em></p>

      <h2>1. Mendeskripsikan Dunia di Sekitar Anda (Kata Sifat)</h2>
      <p>Dalam bahasa Jepang, ada dua "tim" kata sifat. Mengetahui tim mana sebuah kata sifat berasal sangat penting karena cara perubahannya berbeda.</p>
      
      <h3>Tim い (い-形容詞 - i-keiyoushi)</h3>
      <p>Kata sifat ini selalu berakhiran dengan huruf <strong>い (i)</strong>. Mereka sangat mudah dikenali.</p>
      <p><strong>Pola Kalimat:</strong> <code>[Benda] は [Kata Sifat-i] です。</code></p>
      <ul>
        <li><strong>Contoh:</strong> このラーメンは <strong>おいしい</strong>です。(Kono raamen wa <strong>oishii</strong> desu.) - Ramen ini enak.</li>
        <li><strong>Contoh Lain:</strong> たかい (takai - mahal), やすい (yasui - murah), あたらしい (atarashii - baru).</li>
      </ul>

      <h3>Tim な (な-形容詞 - na-keiyoushi)</h3>
      <p>Kata sifat ini biasanya tidak berakhiran dengan い (misalnya: しずか - shizuka, tenang). Beberapa pengecualian seperti きれい (kirei, cantik) memang berakhiran 'i' tapi tetap masuk tim な.</p>
      <p><strong>Pola Kalimat:</strong> <code>[Benda] は [Kata Sifat-na] です。</code></p>
      <ul>
        <li><strong>Contoh:</strong> このこうえんは <strong>しずか</strong>です。(Kono kouen wa <strong>shizuka</strong> desu.) - Taman ini tenang.</li>
      </ul>
      <p><strong>Perbedaan Penting:</strong> Saat kata sifat-na menerangkan kata benda, Anda harus menambahkan <strong>な (na)</strong> di antara keduanya. <br/><em>Contoh: <strong>しずかな</strong> へや (shizuka <strong>na</strong> heya) - kamar yang tenang.</em></p>

      <h2>2. Melakukan Sesuatu: Partikel Objek を (o)</h2>
      <p>Partikel <strong>を (o)</strong> digunakan untuk menandai <strong>objek langsung</strong> dari sebuah kata kerja. Partikel ini memberitahu kita apa yang "dikenai" oleh aksi tersebut.</p>
      <p><strong>Pola Kalimat:</strong> <code>[Subjek] は [Objek] を [Kata Kerja]。</code></p>
      <ul>
        <li>わたしは パン<strong>を</strong> <strong>たべます</strong>。(Watashi wa pan <strong>o</strong> <strong>tabemasu</strong>.) - Saya makan roti.</li>
        <li>わたしは コーヒー<strong>を</strong> <strong>のみます</strong>。(Watashi wa koohii <strong>o</strong> <strong>nomimasu</strong>.) - Saya minum kopi.</li>
        <li>わたしは えいが<strong>を</strong> <strong>みます</strong>。(Watashi wa eiga <strong>o</strong> <strong>mimasu</strong>.) - Saya menonton film.</li>
      </ul>

      <h2>3. Mengajak Seseorang: ～ませんか vs ～ましょう</h2>
      <p>Keduanya digunakan untuk mengajak, tetapi dengan nuansa yang berbeda.</p>
      
      <h3>Pola Ajakan Sopan: ～ませんか (masen ka?)</h3>
      <p>Ini adalah cara yang sangat sopan untuk mengajak seseorang, setara dengan "Maukah Anda...?" atau "Bagaimana kalau kita...?". Karena bentuknya pertanyaan negatif, lawan bicara bisa menolak dengan mudah tanpa merasa tidak enak.</p>
      <p><em>Contoh: いっしょに えいがを <strong>みませんか</strong>。(Issho ni eiga o <strong>mimasen ka</strong>?) - Maukah (Anda) menonton film bersama?</em></p>

      <h3>Pola Usulan: ～ましょう (mashou)</h3>
      <p>Ini lebih berupa usulan atau ajakan yang positif, setara dengan "Ayo kita...!" atau "Mari kita...". Anda menggunakannya saat Anda cukup yakin teman Anda akan setuju.</p>
      <p><em>Contoh: えいがを <strong>みましょう</strong>。(Eiga o <strong>mimashou</strong>.) - Ayo kita nonton film!</em></p>

      <h4>Dialog Singkat:</h4>
      <blockquote>
        <p><strong>A:</strong> 土曜日、いっしょに 映画を <strong>見ませんか</strong>。(Doyoubi, issho ni eiga o <strong>mimasen ka</strong>?)<br/>
        <em>Hari Sabtu, maukah nonton film bersama?</em></p>
        <p><strong>B:</strong> いいですね。<strong>見ましょう</strong>！(Ii desu ne. <strong>Mimashou</strong>!)<br/>
        <em>Ide bagus! Ayo kita nonton!</em></p>
      </blockquote>
    `,
    audioScript: 'Modul ini mengajarkan cara menggunakan kata sifat, seperti "oishii" untuk enak dan "shizuka" untuk tenang. Partikel "o" digunakan untuk objek, misalnya "pan o tabemasu" yang artinya makan roti. Terakhir, kita belajar cara mengajak seseorang dengan sopan menggunakan "masen ka", dan membuat usulan dengan "mashou".',
    quiz: [
      { question: 'Manakah di bawah ini yang merupakan kata sifat-na (na-keiyoushi)?', options: ['たかい (takai)', 'しずか (shizuka)', 'やすい (yasui)', 'あたらしい (atarashii)'], correctAnswer: 'しずか (shizuka)' },
      { question: 'Lengkapi kalimat: "わたしは ほん ___ よみます。" (Saya membaca buku)', options: ['が', 'で', 'に', 'を'], correctAnswer: 'を' },
      { question: 'Anda ingin mengajak senior Anda minum kopi dengan cara yang sangat sopan. Kalimat mana yang paling tepat?', options: ['コーヒーを のみましょう', 'コーヒーを のみます', 'コーヒーを のみませんか', 'コーヒーを のみたいです'], correctAnswer: 'コーヒーを のみませんか' },
      { question: 'Apa bentuk negatif dari "このへやは しずかです" (Kamar ini tenang)?', options: ['しずかでした', 'しずかじゃありません', 'しずかかったです', 'しずかくないです'], correctAnswer: 'しずかじゃありません' },
      { question: 'Bagaimana cara mengatakan "kamar yang cantik"?', options: ['きれい へや', 'きれいな へや', 'きれいくて へや', 'きれいだった へや'], correctAnswer: 'きれいな へや' },
      { question: 'Pilih partikel yang tepat untuk melengkapi kalimat: "きのう、えいが ___ みました。"', options: ['に', 'で', 'へ', 'を'], correctAnswer: 'を' },
      { question: 'Teman Anda berkata, "いいですね。やりましょう！" (Ide bagus! Ayo kita lakukan!). Pola ajakan apa yang kemungkinan besar Anda gunakan sebelumnya?', options: ['～ませんか', '～たいです', '～てください', '～ます'], correctAnswer: '～ませんか' },
      { question: 'Manakah di bawah ini yang merupakan kata sifat-i (i-keiyoushi)?', options: ['げんき (genki)', 'べんり (benri)', 'ゆうめい (yuumei)', 'たのしい (tanoshii)'], correctAnswer: 'たのしい (tanoshii)' },
      { question: 'Apa fungsi partikel 「を」 (o) dalam kalimat?', options: ['Menandai lokasi', 'Menandai waktu', 'Menandai objek langsung', 'Menandai subjek'], correctAnswer: 'Menandai objek langsung' },
      { question: 'Anda dan teman-teman Anda sudah sepakat untuk pergi ke karaoke. Untuk menyemangati, Anda berkata...', options: ['カラオケへ 行きませんか', 'カラオケへ 行きましょう', 'カラオケへ 行きます', 'カラオケへ 行きたいです'], correctAnswer: 'カラオケへ 行きましょう' },
      { question: 'Bagaimana bentuk lampau negatif dari kata sifat "おいしいです"?', options: ['おいしかったです', 'おいしくなかったです', 'おいしいじゃありませんでした', 'おいしいではありません'], correctAnswer: 'おいしくなかったです' },
      { question: 'Lengkapi kalimat: "A: しゅくだいを しませんか。" "B: すみません、ちょっと...。" Respons B menunjukkan...', options: ['Penerimaan ajakan', 'Penolakan halus', 'Kebingungan', 'Kemarahan'], correctAnswer: 'Penolakan halus' },
      { question: 'Kalimat "Saya minum jus" yang benar adalah...', options: ['ジュースが のみます', 'ジュースを のみます', 'ジュースで のみます', 'ジュースに のみます'], correctAnswer: 'ジュースを のみます' },
      { question: 'Kata sifat 「きれい」 (kirei) termasuk dalam kelompok...', options: ['i-keiyoushi', 'na-keiyoushi', 'Kata kerja', 'Kata benda'], correctAnswer: 'na-keiyoushi' },
      { question: 'Nuansa apa yang terkandung dalam ajakan dengan pola 「～ませんか」?', options: ['Perintah yang kuat', 'Ajakan yang pasti diterima', 'Ajakan sopan yang memberi ruang untuk menolak', 'Keinginan pribadi'], correctAnswer: 'Ajakan sopan yang memberi ruang untuk menolak' }
    ],
    pronunciationPhrases: [
      { japanese: 'このラーメンは おいしいです', romaji: 'Kono raamen wa oishii desu' },
      { japanese: 'コーヒーを のみます', romaji: 'Koohii o nomimasu' },
      { japanese: '映画を 見ませんか', romaji: 'Eiga o mimasen ka' }
    ],
    vocabulary: [
        { japanese: 'おいしい', romaji: 'oishii', indonesian: 'Enak' },
        { japanese: 'たかい', romaji: 'takai', indonesian: 'Mahal / Tinggi' },
        { japanese: 'しずか(な)', romaji: 'shizuka(na)', indonesian: 'Tenang' },
        { japanese: 'きれい(な)', romaji: 'kirei(na)', indonesian: 'Cantik / Bersih' },
        { japanese: 'たべます', romaji: 'tabemasu', indonesian: 'Makan' },
        { japanese: 'のみます', romaji: 'nomimasu', indonesian: 'Minum' },
        { japanese: 'みます', romaji: 'mimasu', indonesian: 'Melihat / Menonton' },
        { japanese: '～ませんか', romaji: '~masen ka', indonesian: 'Maukah... / Bagaimana kalau...' },
        { japanese: '～ましょう', romaji: '~mashou', indonesian: 'Ayo... / Mari kita...' },
    ]
  };