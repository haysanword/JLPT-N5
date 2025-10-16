import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n5-cl-2',
    level: 'N5',
    title: 'MODUL 5: Kuantitas',
    description: 'Menghitung benda, kata bantu bilangan, dan membuat kalimat perbandingan.',
    xp: 250,
    content: `
      <h1>Kuantitas dan Perbandingan</h1>
      <p><em>Bayangkan Anda berada di sebuah supermarket (スーパー) di Jepang. Anda melihat berbagai macam buah. Bagaimana cara Anda bertanya "ada berapa apel?" Atau Anda sedang bersama teman memutuskan antara dua jenis teh. Bagaimana cara bertanya "Mana yang lebih enak?" Modul ini akan mengajarkan Anda cara menghitung, membandingkan, dan memilih—keterampilan penting untuk kehidupan sehari-hari di Jepang.</em></p>

      <h2>Menyatakan Kuantitas: "Ada Berapa?"</h2>
      <p>Sebelum kita menghitung, mari kita ingat kembali cara menyatakan "ada". Ini adalah fondasi untuk semua kalimat tentang kuantitas.</p>
      <ul>
        <li>Gunakan <strong>～が あります (ga arimasu)</strong> untuk benda mati: <em>つくえの うえに ほん<strong>が あります</strong>。 (Di atas meja ada buku.)</em></li>
        <li>Gunakan <strong>～が います (ga imasu)</strong> untuk makhluk hidup: <em>こうえんに こども<strong>が います</strong>。 (Di taman ada anak-anak.)</em></li>
      </ul>
      <p>Saat menanyakan jumlah, partikel <strong>が (ga)</strong> tetap digunakan untuk menandai subjek yang sedang dihitung.</p>

      <h3>A. Kata Kuantitas dan Penghitung (Counters)</h3>
      <p>Bahasa Jepang memiliki cara yang unik untuk menghitung benda, yaitu dengan menggunakan "kata bantu bilangan" atau <em>counters</em>. Mari kita mulai dengan yang paling dasar.</p>
      
      <h4>Penghitung Umum (～つ): Untuk Benda Secara Umum</h4>
      <p>Jika Anda tidak tahu <em>counter</em> spesifik untuk sebuah benda, Anda hampir selalu bisa menggunakan sistem hitungan asli Jepang ini (dari 1 sampai 10). Ini adalah 'jaring pengaman' Anda!</p>
      <table>
        <thead>
            <tr><th>Hitungan</th><th>Hiragana</th><th>Romaji</th><th>Arti</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>ひとつ</td><td>hitotsu</td><td>Satu buah</td></tr>
            <tr><td>2</td><td>ふたつ</td><td>futatsu</td><td>Dua buah</td></tr>
            <tr><td>3</td><td>みっつ</td><td>mittsu</td><td>Tiga buah</td></tr>
            <tr><td>4</td><td>よっつ</td><td>yottsu</td><td>Empat buah</td></tr>
            <tr><td>5</td><td>いつつ</td><td>itsutsu</td><td>Lima buah</td></tr>
            <tr><td>6</td><td>むっつ</td><td>muttsu</td><td>Enam buah</td></tr>
            <tr><td>7</td><td>ななつ</td><td>nanatsu</td><td>Tujuh buah</td></tr>
            <tr><td>8</td><td>やっつ</td><td>yattsu</td><td>Delapan buah</td></tr>
            <tr><td>9</td><td>ここのつ</td><td>kokonotsu</td><td>Sembilan buah</td></tr>
            <tr><td>10</td><td>とお</td><td>too</td><td>Sepuluh buah</td></tr>
            <tr><td>Pertanyaan</td><td>いくつ</td><td>ikutsu</td><td>Berapa buah?</td></tr>
        </tbody>
      </table>
      <p><strong>Contoh Dialog di Toko Roti:</strong></p>
      <blockquote>
        <p><strong>Anda:</strong> すみません、このパンは <strong>いくつ</strong> ありますか。(Sumimasen, kono pan wa <strong>ikutsu</strong> arimasu ka?) - Permisi, roti ini ada berapa?</p>
        <p><strong>Penjual:</strong> はい、<strong>みっつ</strong> あります。(Hai, <strong>mittsu</strong> arimasu.) - Ya, ada tiga buah.</p>
      </blockquote>
      
      <h4>Penghitung Spesifik: Menjadi Lebih Natural</h4>
      <p>Menggunakan <em>counter</em> yang tepat akan membuat bahasa Jepang Anda terdengar jauh lebih alami. Berikut beberapa yang paling umum di level N5.</p>
       <table>
        <thead>
            <tr><th>Counter</th><th>Penggunaan</th><th>Contoh Kalimat</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>～こ (ko)</strong></td><td>Benda kecil dan bulat (apel, telur)</td><td>りんごが <strong>さんこ</strong> あります。(Ringo ga <strong>san-ko</strong> arimasu.) - Ada 3 buah apel.</td></tr>
            <tr><td><strong>～ほん (hon/bon/pon)</strong></td><td>Benda panjang dan silindris (pensil, botol, payung)</td><td>えんぴつが <strong>にほん</strong> あります。(Enpitsu ga <strong>ni-hon</strong> arimasu.) - Ada 2 buah pensil.</td></tr>
            <tr><td><strong>～まい (mai)</strong></td><td>Benda tipis dan datar (kertas, perangko, kemeja)</td><td>かみが <strong>じゅうまい</strong> あります。(Kami ga <strong>juu-mai</strong> arimasu.) - Ada 10 lembar kertas.</td></tr>
            <tr><td><strong>～にん (nin)</strong></td><td>Orang (pengecualian: ひとり untuk 1 orang, ふたり untuk 2 orang)</td><td>がくせいが <strong>ごにん</strong> います。(Gakusei ga <strong>go-nin</strong> imasu.) - Ada 5 orang siswa.</td></tr>
        </tbody>
      </table>

      <h2>B. Pola Kalimat Perbandingan</h2>
      <p>Setelah bisa menghitung, mari kita belajar membandingkan. Ini sangat berguna saat berbelanja atau menyatakan preferensi.</p>

      <h4>1. Antara A dan B, Mana yang Lebih...?</h4>
      <p>Ini adalah pola untuk menanyakan perbandingan antara dua hal. Sangat umum digunakan saat Anda diminta memilih.</p>
      <p><strong>Pola Pertanyaan:</strong> <code>[A] と [B] と どちらが [kata sifat] ですか。</code></p>
      <p><strong>Contoh:</strong> くるまと でんしゃ<strong>と、どちらが</strong> はやいですか。(Kuruma to densha <strong>to, dochira ga</strong> hayai desu ka?) - Antara mobil dan kereta, mana yang lebih cepat?</p>
      
      <h4>2. A Lebih ... Daripada B</h4>
      <p>Ini adalah pola untuk menjawab pertanyaan di atas atau membuat pernyataan perbandingan. Partikel <strong>より (yori)</strong> berarti "daripada".</p>
      <p><strong>Pola Jawaban/Pernyataan:</strong> <code>[A] は [B] より [kata sifat] です。</code> atau <code>[A] のほうが [B] より [kata sifat] です。</code> (Bentuk のほうが lebih menekankan pilihan)</p>
      <p><strong>Contoh:</strong> でんしゃ<strong>は</strong> くるま<strong>より</strong> はやいです。(Densha <strong>wa</strong> kuruma <strong>yori</strong> hayai desu.) - Kereta lebih cepat daripada mobil.</p>
      
      <h4>3. Di Antara [Kategori], [B] yang Paling... (Superlatif)</h4>
      <p>Gunakan pola ini untuk menyatakan sesuatu yang "paling" (the most) di antara tiga atau lebih pilihan. Kata kuncinya adalah <strong>いちばん (ichiban)</strong>.</p>
      <p><strong>Pola Pernyataan:</strong> <code>[Kategori] のなかで [B] が いちばん [kata sifat] です。</code></p>
      <p><strong>Contoh:</strong> スポーツ<strong>のなかで</strong>、サッカー<strong>が いちばん</strong> おもしろいです。(Supootsu <strong>no naka de</strong>, sakkaa <strong>ga ichiban</strong> omoshiroi desu.) - Di antara olahraga, sepak bola yang paling menarik.</p>
      <p><strong>Pola Pertanyaan:</strong> <code>[Kategori] のなかで、[Apa/Siapa/Kapan] が いちばん [kata sifat] ですか。</code></p>
      <p><strong>Contoh:</strong> にほんりょうり<strong>のなかで、なにが いちばん</strong> すきですか。(Nihon ryouri <strong>no naka de, nani ga ichiban</strong> suki desu ka?) - Di antara masakan Jepang, apa yang paling kamu suka?</p>
    `,
    audioScript: 'Modul ini membahas cara menghitung dan membandingkan. Untuk menghitung benda secara umum, gunakan hitotsu, futatsu, dan seterusnya. Ada juga penghitung khusus seperti -ko untuk benda kecil, dan -nin untuk orang. Untuk membandingkan dua hal, gunakan pola "A wa B yori ~ desu". Untuk menyatakan "paling", gunakan "ichiban".',
    quiz: [
      {
        question: 'Anda ingin membeli 4 buah apel. Bagaimana Anda mengatakannya dengan benar?',
        options: ['りんごが よっつ', 'りんごが よにん', 'りんごが よんまい', 'りんごが よんほん'],
        correctAnswer: 'りんごが よっつ'
      },
      {
        question: 'Di dalam kelas ada satu orang guru dan sepuluh orang siswa. Kalimat mana yang benar?',
        options: [
          'きょうしつに せんせいが ひとりと がくせいが じゅうにん あります。',
          'きょうしつに せんせいが ひとり、がくせいが じゅうにん います。',
          'きょうしつに せんせいが いちにん、がくせいが じっこ います。',
          'きょうしつに せんせいが います、がくせいも あります。'
        ],
        correctAnswer: 'きょうしつに せんせいが ひとり、がくせいが じゅうにん います。'
      },
      {
        question: 'Bagaimana cara mengatakan "Tokyo lebih ramai daripada Osaka"?',
        options: [
          'おおさかは とうきょうより にぎやかです。',
          'とうきょうは おおさかより にぎやかです。',
          'とうきょうと おおさかと どちらが にぎやかです。',
          'とうきょうがいちばん にぎやかです。'
        ],
        correctAnswer: 'とうきょうは おおさかより にぎやかです。'
      },
      {
        question: 'Lengkapi pertanyaan: "Di antara anggota keluarga, siapa yang paling tinggi?"',
        options: [
          'かぞくのなかで、だれが いちばん せが たかいですか。',
          'かぞくより、だれが いちばん せが たかいですか。',
          'かぞくと、だれと どちらが せが たかいですか。',
          'かぞくで、なにが いちばん せが たかいですか。'
        ],
        correctAnswer: 'かぞくのなかで、だれが いちばん せが たかいですか。'
      },
      { question: 'Kata kerja apa yang digunakan untuk menyatakan keberadaan benda mati seperti buku?', options: ['います (imasu)', 'あります (arimasu)', 'たべます (tabemasu)', 'みます (mimasu)'], correctAnswer: 'あります (arimasu)' },
      { question: 'Anda ingin meminta 5 buah jeruk di pasar. Anda akan bilang...', options: ['オレンジが ごにん ください。', 'オレンジが いつつの ください。', 'オレンジを いつつ ください。', 'オレンジを ごまい ください。'], correctAnswer: 'オレンジを いつつ ください。' },
      { question: 'Kata bantu bilangan 「～ほん」 digunakan untuk menghitung...', options: ['Orang', 'Benda tipis dan datar', 'Benda kecil dan bulat', 'Benda panjang dan silindris'], correctAnswer: 'Benda panjang dan silindris' },
      { question: 'Pilih kalimat yang benar untuk "Di taman ada seekor anjing."', options: ['こうえんに いぬが あります。', 'こうえんに いぬが います。', 'こうえんで いぬが います。', 'こうえんの いぬが います。'], correctAnswer: 'こうえんに いぬが います。' },
      { question: 'Bagaimana cara bertanya "Berapa banyak?" untuk benda secara umum?', options: ['なんにん', 'いくつ', 'どのぐらい', 'いくら'], correctAnswer: 'いくつ' },
      { question: 'Kata bantu bilangan untuk 2 orang adalah...', options: ['ににん (ninin)', 'ふたり (futari)', 'ふたつ (futatsu)', 'にほん (nihon)'], correctAnswer: 'ふたり (futari)' },
      { question: 'Lengkapi kalimat: "きのう、シャツを に___ かいました。" (Kemarin, saya membeli dua lembar kemeja)', options: ['ほん (hon)', 'にん (nin)', 'こ (ko)', 'まい (mai)'], correctAnswer: 'まい (mai)' },
      { question: 'Pola 「～のなかで、～がいちばん...です」 digunakan untuk...', options: ['Membandingkan dua benda', 'Menyatakan yang paling (superlatif)', 'Menanyakan jumlah', 'Menyatakan keberadaan'], correctAnswer: 'Menyatakan yang paling (superlatif)' },
      { question: 'Bagaimana cara bertanya "Antara teh dan kopi, mana yang lebih kamu suka?"', options: ['おちゃと コーヒーと、どちらが すきですか。', 'おちゃは コーヒーより すきですか。', 'おちゃがいちばん すきですか。', 'おちゃか コーヒーが すきですか。'], correctAnswer: 'おちゃと コーヒーと、どちらが すきですか。' },
      { question: 'Kata 「より」 (yori) dalam kalimat perbandingan berarti...', options: ['Paling', 'Dan', 'Daripada', 'Sama seperti'], correctAnswer: 'Daripada' },
      { question: 'Anda ingin mengatakan "Di antara semua musim, saya paling suka musim gugur." Kalimat yang benar adalah...', options: ['きせつのなかで、あきがいちばんすきです。', 'きせつより、あきがすきです。', 'きせつと あきと、どちらがすきです。', 'きせつは あきがいちばんすきです。'], correctAnswer: 'きせつのなかで、あきがいちばんすきです。' }
    ],
    pronunciationPhrases: [
        { japanese: 'りんごが いつつ あります', romaji: 'Ringo ga itsutsu arimasu' },
        { japanese: '車より 電車のほうが 速いです', romaji: 'Kuruma yori densha no hou ga hayai desu' },
        { japanese: '何が いちばん 好きですか', romaji: 'Nani ga ichiban suki desu ka' }
    ],
    vocabulary: [
        { japanese: 'あります', romaji: 'arimasu', indonesian: 'Ada (benda mati)' },
        { japanese: 'います', romaji: 'imasu', indonesian: 'Ada (makhluk hidup)' },
        { japanese: 'ひとつ', romaji: 'hitotsu', indonesian: 'Satu buah (umum)' },
        { japanese: 'いくつ', romaji: 'ikutsu', indonesian: 'Berapa buah? (umum)' },
        { japanese: '～こ', romaji: '-ko', indonesian: 'Counter untuk benda kecil' },
        { japanese: '～ほん', romaji: '-hon', indonesian: 'Counter untuk benda panjang' },
        { japanese: '～まい', romaji: '-mai', indonesian: 'Counter untuk benda tipis' },
        { japanese: '～より', romaji: '...yori', indonesian: 'Daripada...' },
        { japanese: 'いちばん', romaji: 'ichiban', indonesian: 'Paling' },
    ]
  };