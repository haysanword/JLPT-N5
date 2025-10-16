import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n5-rw-2',
    level: 'N5',
    title: 'MODUL 2: Dasar Tata Bahasa & Pola Kalimat 1',
    description: 'Pengenalan struktur kalimat, kata penunjuk, dan kesopanan dasar.',
    xp: 250,
    content: `
      <h1>Dasar Tata Bahasa & Pola Kalimat 1</h1>
      <p><em>Bayangkan kamu baru tiba di Jepang, misalnya di Bandara Haneda. Kamu mendengar orang-orang berkata 「こんにちは」(konnichiwa) dengan senyum hangat. Di sinilah kamu mulai menyadari bahwa bahasa Jepang memiliki struktur, ritme, dan kesopanan yang khas. Modul ini akan membantu kamu memahami dasar dari semua kalimat Jepang: subjek, topik, dan predikat. Setelah memahami ini, kamu bisa memperkenalkan diri, menanyakan nama orang lain, menyebutkan pekerjaan, dan berinteraksi dengan sopan dalam situasi nyata.</em></p>

      <h2>Pola Kalimat Nominal (Desu Sentences)</h2>
      <p>Kalimat nominal adalah fondasi dari bahasa Jepang. Tidak seperti bahasa Indonesia yang sering menggunakan kata 'adalah', bahasa Jepang menggunakan kata <strong>です (desu)</strong> untuk menyatakan hal yang sama, tetapi dengan nuansa sopan. Kata です tidak bisa diterjemahkan secara langsung; ia adalah bentuk netral-sopan dari predikat yang menutup kalimat dengan lembut dan penuh hormat.</p>
      <h4>Contoh Dasar:</h4>
      <ul>
        <li>わたしは せんせいです。(Watashi wa sensei desu.) - Saya adalah guru.</li>
        <li>あのひとは いしゃです。(Ano hito wa isha desu.) - Orang itu adalah dokter.</li>
      </ul>
      <p><strong>Konsep Mendalam:</strong> Bahasa Jepang adalah bahasa topik-komentar. Partikel <strong>は (dibaca 'wa')</strong> menandai apa yang sedang dibicarakan — bukan selalu subjek gramatikal. Jadi, <code>わたしは sensei desu</code> artinya: 'Tentang saya, (saya) adalah guru.' Ini berbeda dari bahasa Indonesia yang lebih berbasis subjek.</p>
      <p><strong>Catatan Budaya:</strong> Dalam percakapan, kata 'saya' (わたし) bisa dihilangkan jika konteksnya jelas. Orang Jepang lebih memilih kesopanan implisit. Misalnya, cukup mengatakan 「田中です。」(Tanaka desu.) — artinya 'Saya Tanaka'.</p>

      <h2>Pola Kalimat Negatif</h2>
      <p>Untuk menyatakan penolakan atau 'bukan', bahasa Jepang menggunakan pola <strong>ではありません (dewa arimasen)</strong> atau bentuk lebih halus <strong>じゃありません (ja arimasen)</strong>.</p>
      <ul>
        <li>わたしは がくせいではありません。(Watashi wa gakusei dewa arimasen.) - Saya bukan mahasiswa.</li>
        <li>かれは いしゃじゃありません。(Kare wa isha ja arimasen.) - Dia bukan dokter.</li>
      </ul>

      <h2>Kalimat Tanya (Pertanyaan)</h2>
      <p>Untuk mengubah kalimat pernyataan menjadi pertanyaan, cukup tambahkan partikel <strong>か (ka)</strong> di akhir kalimat dengan intonasi sedikit naik.</p>
      <ul>
        <li>あなたは がくせいですか？ (Anata wa gakusei desu ka?) - Apakah Anda seorang mahasiswa?</li>
      </ul>
      <h4>Dialog Kontekstual:</h4>
      <blockquote>
        <p>A: はじめまして。あなたは せんせいですか？ (Hajimemashite. Anata wa sensei desu ka?)<br/>
        <em>Salam kenal. Apakah Anda guru?</em></p>
        <p>B: はい、そうです。あなたは がくせいですか？ (Hai, sou desu. Anata wa gakusei desu ka?)<br/>
        <em>Ya, benar. Apakah Anda siswa?</em></p>
      </blockquote>

      <h2>Partikel の (Kepemilikan) dan も (Kesamaan)</h2>
      <ul>
        <li><strong>の (no):</strong> Menunjukkan kepemilikan. Contoh: わたしの ほん (Watashi no hon) - Buku saya.</li>
        <li><strong>も (mo):</strong> Menunjukkan kesamaan atau 'juga'. Contoh: わたしも がくせいです。(Watashi mo gakusei desu.) - Saya juga mahasiswa.</li>
      </ul>

      <h2>Kata Penunjuk Dasar (Kore, Sore, Are)</h2>
      <p>Kata penunjuk (shiji-shi) digunakan untuk menunjukkan benda dengan sistem tiga arah pandang: dekat pembicara, dekat lawan bicara, dan jauh dari keduanya.</p>
      <table>
        <thead><tr><th>Kata</th><th>Arti</th></tr></thead>
        <tbody>
          <tr><td>これ (kore)</td><td>ini (dekat pembicara)</td></tr>
          <tr><td>それ (sore)</td><td>itu (dekat lawan bicara)</td></tr>
          <tr><td>あれ (are)</td><td>itu (jauh dari keduanya)</td></tr>
          <tr><td>どれ (dore)</td><td>yang mana?</td></tr>
        </tbody>
      </table>
      <p>Gunakan <strong>この (kono), その (sono), あの (ano)</strong> jika diikuti kata benda. Contoh: このほん (kono hon) - Buku ini.</p>
      
      <h4>Dialog di Toko Buku:</h4>
      <blockquote>
        <p>A: すみません。このほんは いくらですか？ (Sumimasen. Kono hon wa ikura desu ka?)<br/>
        <em>Permisi, berapa harga buku ini?</em></p>
        <p>B: そのほんは 800えんです。(Sono hon wa happyaku-en desu.)<br/>
        <em>Buku itu harganya 800 yen.</em></p>
        <p>A: じゃ、これをください。(Ja, kore o kudasai.)<br/>
        <em>Kalau begitu, saya ambil yang ini.</em></p>
      </blockquote>
      
      <h2>Menunjukkan Lokasi (Koko, Soko, Asoko)</h2>
       <table>
        <thead><tr><th>Kata</th><th>Arti</th></tr></thead>
        <tbody>
          <tr><td>ここ (koko)</td><td>di sini (dekat pembicara)</td></tr>
          <tr><td>そこ (soko)</td><td>di situ (dekat lawan bicara)</td></tr>
          <tr><td>あそこ (asoko)</td><td>di sana (jauh dari keduanya)</td></tr>
          <tr><td>どこ (doko)</td><td>di mana?</td></tr>
        </tbody>
      </table>
      <p><em>Contoh: トイレは どこですか？ (Toire wa doko desu ka?) - Toilet di mana?</em></p>
    `,
    audioScript: 'Modul ini mengajarkan dasar tata bahasa Jepang. Kita akan belajar pola kalimat A adalah B dengan desu, bentuk negatifnya dewa arimasen, dan bentuk tanya dengan partikel ka. Juga partikel kepemilikan no, kata penunjuk seperti kore untuk ini dan sore untuk itu, serta penunjuk lokasi seperti koko, soko, dan asoko.',
    quiz: [
      { question: 'Anda melihat sebuah buku di tangan teman Anda dan ingin bertanya "Itu apa?". Ungkapan yang benar adalah...', options: ['これは なんですか', 'それは なんですか', 'あれは なんですか', 'このほん なんですか'], correctAnswer: 'それは なんですか' },
      { question: 'Partikel apa yang digunakan untuk menunjukkan kepemilikan, seperti dalam "buku saya"?', options: ['は', 'も', 'か', 'の'], correctAnswer: 'の' },
      { question: 'Bagaimana cara bertanya di mana letak stasiun?', options: ['えきは これですか', 'えきは なんですか', 'えきは どこですか', 'えきは いつですか'], correctAnswer: 'えきは どこですか' },
      { question: 'Lengkapi dialog: "Anata wa sensei desu ka?" "Hai, ___ desu."', options: ['anata', 'sensei', 'sou', 'kore'], correctAnswer: 'sou' },
      { question: 'Bagaimana cara mengatakan "Saya bukan orang Jepang"?', options: ['わたしは にほんじんです', 'わたしは にほんじんですか', 'わたしは にほんじんじゃありません', 'わたしは にほんじんでした'], correctAnswer: 'わたしは にほんじんじゃありません' },
      { question: 'Jika teman Anda seorang dokter, dan Anda juga seorang dokter, kalimat apa yang Anda ucapkan?', options: ['わたしも いしゃです', 'わたしは いしゃです', 'わたしは いしゃじゃない', 'わたしの いしゃです'], correctAnswer: 'わたしも いしゃです' },
      { question: 'Anda menunjuk sebuah gedung yang jauh dan bertanya "Gedung itu apa?". Kata penunjuk yang tepat adalah...', options: ['この', 'その', 'あの', 'どの'], correctAnswer: 'あの' },
      { question: 'Lengkapi kalimat: "___ は わたしの じしょです。" (Ini adalah kamus saya.) - Kamus ada di tangan Anda.', options: ['これ', 'それ', 'あれ', 'どこ'], correctAnswer: 'これ' },
      { question: 'Bagaimana cara mengubah kalimat "これは ほんです" menjadi kalimat tanya?', options: ['これは ほんですか', 'これは ほんじゃありません', 'これの ほんです', 'これは ほんもです'], correctAnswer: 'これは ほんですか' },
      { question: 'Anda sedang berada di dalam stasiun. Bagaimana Anda mengatakan "Di sini adalah stasiun"?', options: ['そこは えきです', 'あそこは えきです', 'ここは えきです', 'えきは どこですか'], correctAnswer: 'ここは えきです' },
      { question: 'Partikel 「は」 (wa) dalam kalimat "Watashi wa gakusei desu" berfungsi sebagai penanda...', options: ['Objek', 'Topik', 'Kepemilikan', 'Pertanyaan'], correctAnswer: 'Topik' },
      { question: 'Apa perbedaan antara 「これ」 dan 「この」?', options: ['Tidak ada perbedaan', '「これ」 untuk benda, 「この」 untuk orang', '「この」 harus diikuti kata benda, 「これ」 bisa berdiri sendiri', '「これ」 lebih sopan daripada 「この」'], correctAnswer: '「この」 harus diikuti kata benda, 「これ」 bisa berdiri sendiri' },
      { question: 'Lengkapi kalimat: "A: わたしは エンジニアです。" "B: そうですか。わたし ___ エンジニアです。"', options: ['も', 'の', 'か', 'は'], correctAnswer: 'も' },
      { question: 'Pilih kalimat yang benar secara gramatikal.', options: ['わたしの かばんです これ', 'これは の わたし かばんです', 'これは わたしのかばんです', 'これ わたしは かばんです'], correctAnswer: 'これは わたしのかばんです' },
      { question: 'Jika Anda bertanya "どれですか？" (Dore desu ka?), Anda sedang menanyakan...', options: ['Di mana?', 'Kapan?', 'Apa?', 'Yang mana? (di antara tiga atau lebih pilihan)'], correctAnswer: 'Yang mana? (di antara tiga atau lebih pilihan)' }
    ],
    pronunciationPhrases: [
        { japanese: 'わたしは せんせいです', romaji: 'Watashi wa sensei desu' },
        { japanese: 'それは なんですか', romaji: 'Sore wa nan desu ka?' },
        { japanese: 'トイレは どこですか', romaji: 'Toire wa doko desu ka?' }
    ],
    vocabulary: [
        { japanese: 'です', romaji: 'desu', indonesian: 'Adalah (bentuk sopan)' },
        { japanese: 'じゃありません', romaji: 'ja arimasen', indonesian: 'Bukan (bentuk sopan)' },
        { japanese: 'か', romaji: 'ka', indonesian: 'Partikel tanya' },
        { japanese: 'の', romaji: 'no', indonesian: 'Partikel kepemilikan' },
        { japanese: 'も', romaji: 'mo', indonesian: 'Juga' },
        { japanese: 'これ', romaji: 'kore', indonesian: 'Ini (dekat pembicara)' },
        { japanese: 'それ', romaji: 'sore', indonesian: 'Itu (dekat lawan bicara)' },
        { japanese: 'あれ', romaji: 'are', indonesian: 'Itu (jauh dari keduanya)' },
        { japanese: 'どこ', romaji: 'doko', indonesian: 'Di mana?' },
    ]
  };