import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-3',
    level: 'N3',
    title: 'Tata Bahasa N3: Sebab-Akibat, Kontras & Tujuan',
    description: 'Pelajari pola kalimat ～ため, ～によって, ～のに, dan ～ようにする untuk membuat kalimat yang lebih kompleks.',
    xp: 280,
    content: `
        <h1>Pola Kalimat N3: Membuat Argumen yang Kompleks</h1>
        <p>Dengan pola-pola ini, Anda bisa mulai menghubungkan ide-ide secara lebih logis, seperti menjelaskan sebab-akibat, menunjukkan kontras, dan menyatakan tujuan.</p>
        
        <h2>Menyatakan Tujuan & Penyebab</h2>
        <ul>
            <li><strong>～ため(に) (tame ni):</strong> "Untuk..." atau "Karena...". Ini adalah cara yang lebih formal untuk menyatakan tujuan atau penyebab.
                <br/><em>Contoh (Tujuan): 日本で働く<strong>ために</strong>、日本語を勉強しています。(Nihon de hataraku <strong>tame ni</strong>, Nihongo o benkyou shiteimasu.) - Saya belajar bahasa Jepang <strong>untuk</strong> bekerja di Jepang.</em>
                <br/><em>Contoh (Penyebab): 大雪の<strong>ため</strong>、電車が遅れました。(Ooyuki no <strong>tame</strong>, densha ga okuremashita.) - <strong>Karena</strong> salju lebat, kereta terlambat. (Sering digunakan dalam pengumuman).</em>
            </li>
            <li><strong>～によって (ni yotte):</strong> "Tergantung pada..." atau "Disebabkan oleh...". Menunjukkan bahwa hasil atau kondisi bervariasi.
                <br/><em>Contoh: 人<strong>によって</strong>考え方が違います。(Hito <strong>ni yotte</strong> kangaekata ga chigaimasu.) - Cara berpikir berbeda <strong>tergantung pada</strong> orangnya.</em>
            </li>
        </ul>
        
        <h2>Menyatakan Kontras yang Tak Terduga</h2>
        <ul>
            <li><strong>～のに (noni):</strong> "Meskipun..." atau "Padahal...". Digunakan ketika hasil yang terjadi berlawanan dengan apa yang diharapkan, dan seringkali mengandung nada kejutan, keluhan, atau kekecewaan.
                <br/><em>Contoh: 約束した<strong>のに</strong>、彼は来ませんでした。(Yakusoku shita <strong>noni</strong>, kare wa kimasen deshita.) - <strong>Padahal</strong> sudah janji, dia tidak datang.</em>
                <br/><em>Contoh: こんなに勉強した<strong>のに</strong>、試験に落ちました。(Konna ni benkyou shita <strong>noni</strong>, shiken ni ochimashita.) - <strong>Meskipun</strong> sudah belajar sebanyak ini, saya gagal ujian.</em>
            </li>
        </ul>
        
        <h2>Menyatakan Usaha dan Perubahan</h2>
        <ul>
            <li><strong>～ようにする (you ni suru):</strong> "Berusaha untuk...". Menunjukkan sebuah usaha atau kebiasaan yang sedang coba Anda bangun.
                <br/><em>Contoh: 毎日、野菜を食べる<strong>ようにしています</strong>。(Mainichi, yasai o taberu <strong>you ni shiteimasu</strong>.) - Saya <strong>berusaha untuk</strong> makan sayur setiap hari.</em>
            </li>
            <li><strong>～ようになる (you ni naru):</strong> "Menjadi bisa...". Menunjukkan perubahan kemampuan dari yang tadinya tidak bisa menjadi bisa.
                <br/><em>Contoh: ピアノが弾ける<strong>ようになりました</strong>。(Piano ga hikeru <strong>you ni narimashita</strong>.) - Saya (akhirnya) <strong>jadi bisa</strong> bermain piano.</em>
            </li>
        </ul>
    `,
    audioScript: 'Tata bahasa N3 membantu Anda membuat kalimat lebih kaya. Gunakan "tame ni" untuk tujuan atau sebab formal. "Ni yotte" untuk "tergantung pada". "Noni" untuk kontras yang tak terduga. Dan "you ni suru" untuk menunjukkan usaha.',
    quiz: [
        { question: 'Lengkapi kalimat: "健康の___、毎日運動しています。" (Demi kesehatan, saya berolahraga setiap hari)', options: ['ように', 'ために', 'によって', 'のに'], correctAnswer: 'ために' },
        { question: 'Pola "～のに" paling tepat digunakan untuk menyatakan...', options: ['Tujuan', 'Hasil yang tidak terduga/kontras', 'Kemampuan', 'Penyebab formal'], correctAnswer: 'Hasil yang tidak terduga/kontras' },
        { question: 'Kalimat "Saya berusaha untuk tidak lupa" dalam bahasa Jepang adalah...', options: ['忘れないようにします (Wasurenai you ni shimasu)', '忘れるようになりました (Wasureru you ni narimashita)', '忘れたことがあります (Wasureta koto ga arimasu)', '忘れるかもしれません (Wasureru kamoshiremasen)'], correctAnswer: '忘れないようにします (Wasurenai you ni shimasu)' }
    ],
    pronunciationPhrases: [
        { japanese: '働くために 勉強します', romaji: 'Hataraku tame ni benkyou shimasu' },
        { japanese: '約束したのに 来ませんでした', romaji: 'Yakusoku shita noni, kimasen deshita' },
        { japanese: '野菜を食べるようにしています', romaji: 'Yasai o taberu you ni shiteimasu' }
    ],
    vocabulary: [
        { japanese: '～ために', romaji: 'tame ni', indonesian: 'Untuk / Demi' },
        { japanese: '～によって', romaji: 'ni yotte', indonesian: 'Tergantung pada' },
        { japanese: '～のに', romaji: 'noni', indonesian: 'Meskipun / Padahal' },
        { japanese: '～ようにする', romaji: 'you ni suru', indonesian: 'Berusaha untuk...' },
        { japanese: '～ようになる', romaji: 'you ni naru', indonesian: 'Menjadi bisa...' },
    ]
  };
