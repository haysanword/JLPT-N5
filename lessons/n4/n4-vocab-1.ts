import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-vocab-1',
    level: 'N4',
    title: 'Kosakata N4: Kehidupan, Pekerjaan & Emosi',
    description: 'Perluas kosakata untuk situasi kantor, perasaan, dan aktivitas harian.',
    xp: 200,
    content: `
      <h1>Kosakata N4: Percakapan Lebih Dewasa</h1>
      <p>Dengan kosakata ini, Anda bisa mulai berbicara tentang topik yang lebih spesifik seperti pekerjaan, perasaan, dan aktivitas yang lebih kompleks.</p>
      
      <h2>Kehidupan Sehari-hari & Tugas</h2>
      <ul>
        <li><strong>掃除 (souji)</strong> - bersih-bersih. <em>Contoh: 部屋を掃除します (Heya o souji shimasu) - Membersihkan kamar.</em></li>
        <li><strong>洗濯 (sentaku)</strong> - mencuci baju. <em>Contoh: 洗濯の時間です (Sentaku no jikan desu) - Waktunya mencuci.</em></li>
        <li><strong>料理 (ryouri)</strong> - masakan/memasak. <em>Contoh: 料理が上手です (Ryouri ga jouzu desu) - Pandai memasak.</em></li>
        <li><strong>宿題 (shukudai)</strong> - pekerjaan rumah (PR). <em>Contoh: 宿題をします (Shukudai o shimasu) - Mengerjakan PR.</em></li>
        <li><strong>試験 (shiken)</strong> - ujian. <em>Contoh: 明日、試験があります (Ashita, shiken ga arimasu) - Besok ada ujian.</em></li>
      </ul>
      
      <h2>Kantor & Pekerjaan</h2>
      <ul>
        <li><strong>会社員 (kaishain)</strong> - pegawai perusahaan</li>
        <li><strong>会議 (kaigi)</strong> - rapat. <em>Contoh: ３時から会議です (San-ji kara kaigi desu) - Rapat mulai dari jam 3.</em></li>
        <li><strong>上司 (joushi)</strong> - atasan</li>
        <li><strong>同僚 (douryou)</strong> - rekan kerja</li>
      </ul>
      
      <h2>Perasaan & Emosi</h2>
      <ul>
        <li><strong>うれしい (ureshii)</strong> - senang, gembira (karena suatu hal)</li>
        <li><strong>悲しい (kanashii)</strong> - sedih</li>
        <li><strong>怖い (kowai)</strong> - takut</li>
        <li><strong>恥ずかしい (hazukashii)</strong> - malu</li>
        <li><strong>びっくりする (bikkuri suru)</strong> - terkejut</li>
      </ul>
      
      <h2>Kata Kerja Penting</h2>
      <ul>
        <li><strong>見える (mieru)</strong> - terlihat (sesuatu masuk ke pandangan kita tanpa sengaja)</li>
        <li><strong>聞こえる (kikoeru)</strong> - terdengar (suara masuk ke telinga kita tanpa sengaja)</li>
        <li><strong>知っている (shitte iru)</strong> - mengetahui/tahu. Bentuk negatifnya adalah 知りません (shirimasen).</li>
        <li><strong>思う (omou)</strong> - berpikir/berpendapat</li>
        <li><strong>決める (kimeru)</strong> - memutuskan</li>
      </ul>
    `,
    audioScript: 'Kosakata N4 mencakup banyak situasi. Di kantor, ada "kaigi" untuk rapat dan "joushi" untuk atasan. Untuk perasaan, "ureshii" berarti senang dan "kanashii" berarti sedih. Kata kerja penting seperti "omou" untuk berpikir juga harus dihafal.',
    quiz: [
      { question: 'Apa bahasa Jepangnya "rapat"?', options: ['かいしゃ', 'しけん', 'かいぎ', 'しゅくだい'], correctAnswer: 'かいぎ' },
      { question: 'Kata "ureshii" memiliki arti...', options: ['Sedih', 'Takut', 'Senang', 'Malu'], correctAnswer: 'Senang' },
      { question: 'Untuk mengatakan "Saya tahu", digunakan frasa...', options: ['しりません', 'しっています', 'おもいます', 'きめます'], correctAnswer: 'しっています' },
      { question: 'Aktivitas mencuci baju dalam bahasa Jepang disebut...', options: ['そうじ (souji)', 'りょうり (ryouri)', 'せんたく (sentaku)', 'しゅくだい (shukudai)'], correctAnswer: 'せんたく (sentaku)' },
      { question: 'Atasan di tempat kerja disebut...', options: ['どうりょう (douryou)', 'かいしゃいん (kaishain)', 'せんせい (sensei)', 'じょうし (joushi)'], correctAnswer: 'じょうし (joushi)' },
      { question: 'Jika Anda merasa malu, kata sifat yang tepat adalah...', options: ['こわい (kowai)', 'かなしい (kanashii)', 'はずかしい (hazukashii)', 'うれしい (ureshii)'], correctAnswer: 'はずかしい (hazukashii)' },
      { question: 'Kata kerja "memutuskan" dalam bahasa Jepang adalah...', options: ['おもう (omou)', 'しる (shiru)', 'きめる (kimeru)', 'みえる (mieru)'], correctAnswer: 'きめる (kimeru)' },
      { question: 'Apa arti dari 「宿題」 (shukudai)?', options: ['Ujian', 'Rapat', 'Pekerjaan rumah (PR)', 'Bersih-bersih'], correctAnswer: 'Pekerjaan rumah (PR)' },
      { question: 'Lengkapi kalimat: "遠くの山が ___。" (Gunung yang jauh terlihat.)', options: ['きこえます (kikoemasu)', 'みえます (miemasu)', 'おもいます (omoimasu)', 'します (shimasu)'], correctAnswer: 'みえます (miemasu)' },
      { question: 'Jika Anda terkejut, Anda akan menggunakan ungkapan...', options: ['かなしかったです (kanashikatta desu)', 'うれしいです (ureshii desu)', 'びっくりしました (bikkuri shimashita)', 'はずかしいです (hazukashii desu)'], correctAnswer: 'びっくりしました (bikkuri shimashita)' },
      { question: 'Rekan kerja dalam bahasa Jepang disebut...', options: ['じょうし (joushi)', 'かいしゃいん (kaishain)', 'どうりょう (douryou)', 'ともだち (tomodachi)'], correctAnswer: 'どうりょう (douryou)' },
      { question: 'Kata 「怖い」 (kowai) berarti...', options: ['Takut', 'Sedih', 'Senang', 'Malu'], correctAnswer: 'Takut' },
      { question: 'Perbedaan antara 「見える」 dan 「見る」 adalah...', options: ['見える untuk melihat dengan sengaja, 見る tidak sengaja', 'Tidak ada perbedaan', '見える tidak sengaja terlihat, 見る melihat dengan sengaja', '見える untuk benda mati, 見る untuk makhluk hidup'], correctAnswer: '見える tidak sengaja terlihat, 見る melihat dengan sengaja' },
      { question: 'Apa arti dari 「試験」 (shiken)?', options: ['Pelajaran', 'Ujian', 'Tugas', 'Liburan'], correctAnswer: 'Ujian' },
      { question: 'Kata kerja untuk "berpikir" atau "berpendapat" adalah...', options: ['しる (shiru)', 'きめる (kimeru)', 'おもう (omou)', 'わかる (wakaru)'], correctAnswer: 'おもう (omou)' }
    ],
    pronunciationPhrases: [
        { japanese: '会議 (かいぎ)', romaji: 'kaigi' },
        { japanese: '嬉しい (うれしい)', romaji: 'ureshii' },
        { japanese: '知っています (しっています)', romaji: 'shitte imasu' }
    ],
    vocabulary: [
        { japanese: '掃除', romaji: 'souji', indonesian: 'Bersih-bersih' },
        { japanese: '宿題', romaji: 'shukudai', indonesian: 'Pekerjaan Rumah (PR)' },
        { japanese: '会議', romaji: 'kaigi', indonesian: 'Rapat' },
        { japanese: '上司', romaji: 'joushi', indonesian: 'Atasan' },
        { japanese: 'うれしい', romaji: 'ureshii', indonesian: 'Senang' },
        { japanese: '悲しい', romaji: 'kanashii', indonesian: 'Sedih' },
    ]
  };