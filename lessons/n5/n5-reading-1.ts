import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n5-reading-1',
    level: 'N5',
    title: 'MODUL 10: Pengenalan Kanji N5 (Bagian I)',
    description: 'Pelajari dasar-dasar kanji dan kuasai 60 kanji pertama N5 (angka, waktu, orang).',
    xp: 200,
    content: `
      <h1>MODUL 10: Pengenalan Kanji N5 (Bagian I)</h1>
      <p><em>Selamat datang di dunia Kanji! Kanji (漢字) adalah karakter logografik yang dipinjam dari Tiongkok. Setiap kanji memiliki makna dan satu atau lebih cara baca. Menguasai kanji adalah lompatan besar dalam perjalanan belajar bahasa Jepang Anda, dari sekadar "berbicara" menjadi benar-benar "memahami". Modul ini adalah langkah pertama Anda.</em></p>

      <h2>A. Struktur dan Radikal Kanji: Memahami Logikanya</h2>
      <p>Jangan melihat kanji sebagai gambar acak. Mereka punya struktur!</p>
      <ul>
        <li><strong>Goresan (Strokes):</strong> Setiap kanji terbentuk dari goresan-goresan dasar. Urutan goresan (書き順 - kakijun) sangat penting untuk menulis kanji dengan benar dan seimbang. Aturan umumnya adalah: dari kiri ke kanan, dari atas ke bawah.</li>
        <li><strong>Radikal (Radicals):</strong> Banyak kanji kompleks terdiri dari komponen-komponen yang lebih sederhana yang disebut radikal. Radikal seringkali memberikan petunjuk tentang makna kanji tersebut. Contoh: kanji 木 (pohon) adalah radikal dalam kanji 林 (hutan kecil) dan 森 (hutan lebat).</li>
      </ul>
      
      <h3>On'yomi vs. Kun'yomi: Dua Cara Baca</h3>
      <ul>
        <li><strong>On'yomi (音読み - Cara Baca Suara):</strong> Ini adalah cara baca yang berasal dari bahasa Tionghoa asli. Biasanya digunakan ketika kanji tersebut digabungkan dengan kanji lain untuk membentuk kata majemuk (熟語 - jukugo).</li>
        <li><strong>Kun'yomi (訓読み - Cara Baca Arti):</strong> Ini adalah cara baca asli Jepang yang sudah ada sebelum kanji masuk. Biasanya digunakan ketika kanji berdiri sendiri atau diikuti oleh hiragana (okurigana).</li>
      </ul>
      <p><strong>Contoh:</strong> Kanji 水 (air).<br/>- On'yomi: スイ (sui) → 水曜日 (<strong>sui</strong>youbi - Hari Rabu)<br/>- Kun'yomi: みず (mizu) → 水をください (<strong>mizu</strong> o kudasai - Tolong airnya)</p>
      
      <h2>B. Kanji Angka, Waktu, dan Orang (Kanji 1-60)</h2>
      <p>Mari kita mulai dengan kanji yang paling sering Anda temui.</p>

      <h3>Angka (数字)</h3>
      <table>
        <thead><tr><th>Kanji</th><th>Arti</th><th>Kun'yomi</th><th>On'yomi</th></tr></thead>
        <tbody>
          <tr><td>一</td><td>Satu</td><td>ひと(つ)</td><td>イチ</td></tr>
          <tr><td>二</td><td>Dua</td><td>ふた(つ)</td><td>ニ</td></tr>
          <tr><td>三</td><td>Tiga</td><td>みっ(つ)</td><td>サン</td></tr>
          <tr><td>四</td><td>Empat</td><td>よん, よ</td><td>シ</td></tr>
          <tr><td>五</td><td>Lima</td><td>いつ(つ)</td><td>ゴ</td></tr>
          <tr><td>六</td><td>Enam</td><td>むっ(つ)</td><td>ロク</td></tr>
          <tr><td>七</td><td>Tujuh</td><td>なな(つ)</td><td>シチ</td></tr>
          <tr><td>八</td><td>Delapan</td><td>やっ(つ)</td><td>ハチ</td></tr>
          <tr><td>九</td><td>Sembilan</td><td>ここの(つ)</td><td>キュウ, ク</td></tr>
          <tr><td>十</td><td>Sepuluh</td><td>とお</td><td>ジュウ</td></tr>
          <tr><td>百</td><td>Ratus</td><td>-</td><td>ヒャク</td></tr>
          <tr><td>千</td><td>Ribu</td><td>-</td><td>セン</td></tr>
          <tr><td>万</td><td>Sepuluh Ribu</td><td>-</td><td>マン</td></tr>
          <tr><td>円</td><td>Yen</td><td>-</td><td>エン</td></tr>
        </tbody>
      </table>

      <h3>Waktu (時間)</h3>
       <table>
        <thead><tr><th>Kanji</th><th>Arti</th><th>Kun'yomi</th><th>On'yomi</th></tr></thead>
        <tbody>
          <tr><td>日</td><td>Hari, Matahari</td><td>ひ, -び, -か</td><td>ニチ, ジツ</td></tr>
          <tr><td>月</td><td>Bulan, Rembulan</td><td>つき</td><td>ゲツ, ガツ</td></tr>
          <tr><td>火</td><td>Api</td><td>ひ</td><td>カ</td></tr>
          <tr><td>水</td><td>Air</td><td>みず</td><td>スイ</td></tr>
          <tr><td>木</td><td>Pohon, Kayu</td><td>き</td><td>モク</td></tr>
          <tr><td>金</td><td>Emas, Uang</td><td>かね</td><td>キン</td></tr>
          <tr><td>土</td><td>Tanah</td><td>つち</td><td>ド</td></tr>
          <tr><td>年</td><td>Tahun</td><td>とし</td><td>ネン</td></tr>
          <tr><td>時</td><td>Waktu, Jam</td><td>とき</td><td>ジ</td></tr>
          <tr><td>分</td><td>Menit, Membagi</td><td>わ(ける)</td><td>フン, プン</td></tr>
          <tr><td>午</td><td>Siang</td><td>-</td><td>ゴ</td></tr>
          <tr><td>前</td><td>Sebelum</td><td>まえ</td><td>ゼン</td></tr>
          <tr><td>後</td><td>Setelah, Belakang</td><td>あと, うし(ろ)</td><td>ゴ</td></tr>
        </tbody>
      </table>
      
      <h3>Orang & Tubuh (人 & 体)</h3>
       <table>
        <thead><tr><th>Kanji</th><th>Arti</th><th>Kun'yomi</th><th>On'yomi</th></tr></thead>
        <tbody>
          <tr><td>人</td><td>Orang</td><td>ひと</td><td>ジン, ニン</td></tr>
          <tr><td>男</td><td>Pria</td><td>おとこ</td><td>ダン</td></tr>
          <tr><td>女</td><td>Wanita</td><td>おんな</td><td>ジョ</td></tr>
          <tr><td>子</td><td>Anak</td><td>こ</td><td>シ</td></tr>
          <tr><td>父</td><td>Ayah</td><td>ちち</td><td>フ</td></tr>
          <tr><td>母</td><td>Ibu</td><td>はは</td><td>ボ</td></tr>
          <tr><td>友</td><td>Teman</td><td>とも</td><td>ユウ</td></tr>
          <tr><td>目</td><td>Mata</td><td>め</td><td>モク</td></tr>
          <tr><td>口</td><td>Mulut</td><td>くち</td><td>コウ</td></tr>
          <tr><td>手</td><td>Tangan</td><td>て</td><td>シュ</td></tr>
        </tbody>
      </table>
    `,
    audioScript: 'Modul ini adalah pengantar kanji. Setiap kanji punya on-yomi, bacaan dari China, dan kun-yomi, bacaan asli Jepang. Misalnya kanji untuk air, dibaca mizu untuk kun-yomi dan sui untuk on-yomi seperti pada suiyoubi, hari Rabu.',
    quiz: [
      {
        question: 'Bagaimana cara membaca "月曜日"?',
        options: ['つきようび (tsukiyoubi)', 'げつようび (getsuyoubi)', 'がつようび (gatsuyoubi)', 'つきび (tsukibi)'],
        correctAnswer: 'げつようび (getsuyoubi)'
      },
      {
        question: 'Kanji 「人」 bisa dibaca "jin" atau "nin". Dalam kata "日本人", bacaannya adalah...',
        options: ['にほんひと (nihonhito)', 'にほんじん (nihonjin)', 'にほんにん (nihon-nin)', 'にっぽんひと (nipponhito)'],
        correctAnswer: 'にほんじん (nihonjin)'
      },
      {
        question: 'Apa arti dari kombinasi kanji 「午前」?',
        options: ['Setelah siang (PM)', 'Sebelum siang (AM)', 'Tengah hari', 'Setiap hari'],
        correctAnswer: 'Sebelum siang (AM)'
      },
      {
        question: 'Kun\'yomi adalah cara baca kanji yang berasal dari...',
        options: ['Bahasa Korea', 'Bahasa Inggris', 'Bahasa Tionghoa', 'Bahasa Jepang Asli'],
        correctAnswer: 'Bahasa Jepang Asli'
      },
      { question: 'Berapakah nilai dari 「三百円」?', options: ['30 Yen', '300 Yen', '3000 Yen', '3 Yen'], correctAnswer: '300 Yen' },
      { question: 'Bacaan On\'yomi dari kanji 「水」 adalah...', options: ['みず (mizu)', 'すい (sui)', 'みつ (mitsu)', 'すし (sushi)'], correctAnswer: 'すい (sui)' },
      { question: 'Kanji 「女の人」 dibaca...', options: ['じょのひと (jo no hito)', 'おんなのひと (onna no hito)', 'おとこのひと (otoko no hito)', 'にょにん (nyonin)'], correctAnswer: 'おんなのひと (onna no hito)' },
      { question: 'Apa arti dari kanji 「手」?', options: ['Mata', 'Mulut', 'Kaki', 'Tangan'], correctAnswer: 'Tangan' },
      { question: 'On\'yomi biasanya digunakan ketika...', options: ['Kanji berdiri sendiri', 'Kanji digabungkan dengan kanji lain', 'Kanji diikuti hiragana', 'Kanji digunakan sebagai nama orang'], correctAnswer: 'Kanji digabungkan dengan kanji lain' },
      { question: '「七時」 dibaca...', options: ['ななじ (nanaji)', 'しちじ (shichiji)', 'ななとき (nanatoki)', 'しちとき (shichitoki)'], correctAnswer: 'しちじ (shichiji)' },
      { question: 'Apa arti dari kanji 「父」 dan 「母」?', options: ['Pria dan Wanita', 'Anak dan Teman', 'Ayah dan Ibu', 'Kakek dan Nenek'], correctAnswer: 'Ayah dan Ibu' },
      { question: 'Kombinasi kanji 「一分」 dapat dibaca...', options: ['いちぶん (ichibun)', 'いっぷん (ippun)', 'ひとぶん (hitobun)', 'いちふん (ichifun)'], correctAnswer: 'いっぷん (ippun)' },
      { question: 'Bacaan Kun\'yomi dari kanji 「金」 adalah...', options: ['きん (kin)', 'こん (kon)', 'かね (kane)', 'きんぞく (kinzoku)'], correctAnswer: 'かね (kane)' },
      { question: 'Apa arti dari kombinasi kanji 「火口」?', options: ['Api kecil', 'Mobil pemadam kebakaran', 'Kawah gunung berapi', 'Hari Selasa'], correctAnswer: 'Kawah gunung berapi' },
      { question: 'Kanji 「友人」 (yuujin) berarti...', options: ['Orang terkenal', 'Orang asing', 'Teman', 'Musuh'], correctAnswer: 'Teman' }
    ],
    pronunciationPhrases: [
        { japanese: '月曜日', romaji: 'Getsuyoubi' },
        { japanese: '日本人', romaji: 'Nihonjin' },
        { japanese: '三千円', romaji: 'Sanzen-en' }
    ],
    vocabulary: [
        { japanese: '一', romaji: 'ichi', indonesian: 'Satu' },
        { japanese: '十', romaji: 'juu', indonesian: 'Sepuluh' },
        { japanese: '百', romaji: 'hyaku', indonesian: 'Seratus' },
        { japanese: '日', romaji: 'nichi / hi', indonesian: 'Hari, Matahari' },
        { japanese: '月', romaji: 'getsu / tsuki', indonesian: 'Bulan, Rembulan' },
        { japanese: '人', romaji: 'jin / hito', indonesian: 'Orang' },
        { japanese: '男', romaji: 'otoko', indonesian: 'Pria' },
        { japanese: '女', romaji: 'onna', indonesian: 'Wanita' },
    ]
  }