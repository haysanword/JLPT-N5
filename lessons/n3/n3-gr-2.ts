import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-2',
    level: 'N3',
    title: 'Bentuk Kausatif (～させる)',
    description: 'Pelajari cara menyatakan "menyuruh/membuat/membiarkan" seseorang melakukan sesuatu.',
    xp: 250,
    content: `
      <h1>Kalimat Kausatif (しえき) - Menyuruh, Membuat, atau Membiarkan</h1>
      <p>Bentuk kausatif digunakan ketika subjek kalimat <strong>menyebabkan</strong> orang lain melakukan sebuah aksi. Ini bisa berarti "menyuruh", "membuat", atau "mengizinkan/membiarkan".</p>
      
      <h2>Cara Membentuk:</h2>
      <ul>
        <li><strong>Grup 1 (-u):</strong> Ubah vokal akhir ke vokal <code>-a</code> lalu tambah <code>せる</code>.<br/><em>Contoh: <strong>かく (kaku - menulis)</strong> → <strong>かかせる (kakaseru - menyuruh menulis)</strong></em></li>
        <li><strong>Grup 2 (-ru):</strong> Ganti <code>る</code> dengan <code>させる</code>.<br/><em>Contoh: <strong>たべる (taberu - makan)</strong> → <strong>たべさせる (tabesaseru - menyuruh/membiarkan makan)</strong></em></li>
        <li><strong>Grup 3:</strong><br/>
            <ul>
                <li><strong>する (suru)</strong> → <strong>させる (saseru - menyuruh melakukan)</strong></li>
                <li><strong>くる (kuru)</strong> → <strong>こさせる (kosaseru - menyuruh datang)</strong></li>
            </ul>
        </li>
      </ul>
      
      <h2>Siapa yang Disuruh? (Partikel に atau を)</h2>
      <p>Ini bagian yang sedikit rumit. Partikel yang menandai "orang yang disuruh" bergantung pada jenis kata kerjanya.</p>
      <ul>
          <li><strong>Jika kata kerja Intransitif (tidak punya objek):</strong> Gunakan partikel <code>を</code>.<br/><em>Contoh: わたしは こども<strong>を</strong> いかせます。(Watashi wa kodomo <strong>o</strong> ikasemasu.) - Saya membiarkan anak pergi.</em></li>
          <li><strong>Jika kata kerja Transitif (punya objek):</strong> Gunakan partikel <code>に</code>.<br/><em>Contoh: せんせいは がくせい<strong>に</strong> しゅくだいを させました。(Sensei wa gakusei <strong>ni</strong> shukudai o sasemashita.) - Guru menyuruh murid mengerjakan PR.</em> (PR adalah objeknya).</li>
      </ul>

      <h2>Level Up: Kausatif Pasif (使役受け身) - "Saya Dipaksa!"</h2>
      <p>Ketika Anda menggabungkan bentuk kausatif dan pasif (<code>～させられる</code>), artinya menjadi "dipaksa melakukan sesuatu" (melawan kehendak). Ini adalah ekspresi keluhan.</p>
      <p><strong>Cara membuat:</strong> Bentuk Kausatif + Bentuk Pasif.</p>
      <p><em>Contoh: のむ (minum) → のませる (menyuruh minum) → のませ<strong>られる</strong> (dipaksa minum)</em></p>
      <p><em>Contoh Kalimat: <strong>わたしは ぶちょうに おさけを のませられました。</strong> (Watashi wa buchou ni osake o nomaseraremashita.) - Saya dipaksa minum sake oleh manajer.</em></p>
    `,
    audioScript: 'Bentuk kausatif artinya menyuruh seseorang. Partikelnya bisa "o" atau "ni", tergantung kata kerjanya. Jika digabung dengan pasif menjadi "saserareru", artinya menjadi "dipaksa melakukan sesuatu".',
    quiz: [
      { question: 'Bentuk kausatif dari kata kerja "motsu" (membawa) adalah...', options: ['もたれる', 'もてる', 'もたせる', 'またせる'], correctAnswer: 'もたせる' },
      { question: 'Bagaimana cara mengatakan "Ibu menyuruh saya membersihkan kamar"?', options: ['ははは わたしに へやを そうじさせました。', 'ははは わたしに へやを そうじされました。', 'ははは わたしが へやを そうじしました。'], correctAnswer: 'ははは わたしに へやを そうじさせました。' },
      { question: 'Bentuk kausatif dari "taberu" (makan) adalah...', options: ['たべられる', 'たべさせる', 'たべるせる', 'たべらせる'], correctAnswer: 'たべさせる' },
      { question: 'Apa arti kalimat "Buchou wa watashi ni repooto o kakasemashita"?', options: ['Manajer menulis laporan untuk saya', 'Saya menulis laporan untuk manajer', 'Manajer menyuruh saya menulis laporan', 'Laporan ditulis oleh manajer'], correctAnswer: 'Manajer menyuruh saya menulis laporan' },
      { question: 'Bentuk kausatif pasif 「待たせられた」 (mataserareta) berarti...', options: ['Disuruh menunggu', 'Dipaksa menunggu', 'Boleh menunggu', 'Ingin menunggu'], correctAnswer: 'Dipaksa menunggu' },
      { question: 'Pilih partikel yang benar: "先生は 学生___ 本を 読ませました。"', options: ['を', 'に', 'が', 'で'], correctAnswer: 'に' },
      { question: 'Bentuk kausatif dari kata kerja Grup 1 "yomu" (membaca) adalah...', options: ['よませる', 'よめせる', 'よみさせる', 'よまれる'], correctAnswer: 'よませる' },
      { question: 'Kalimat "Saya membiarkan anak-anak bermain di taman" yang benar adalah...', options: ['こどもたちに こうえんで あそばせました。', 'こどもたちを こうえんで あそばせました。', 'こどもたちが こうえんで あそばされました。', 'こどもたちと こうえんで あそびました。'], correctAnswer: 'こどもたちを こうえんで あそばせました。' },
      { question: 'Bentuk kausatif dari "kuru" (datang) adalah...', options: ['きさせる', 'こさせる', 'こられる', 'きられる'], correctAnswer: 'こさせる' },
      { question: 'Bentuk kausatif pasif digunakan untuk mengekspresikan...', options: ['Perizinan', 'Paksaan atau tindakan yang tidak diinginkan', 'Kemampuan', 'Keinginan'], correctAnswer: 'Paksaan atau tindakan yang tidak diinginkan' },
      { question: 'Ubah kalimat menjadi kausatif: 「娘が ピアノを 習います。」 (Anak perempuan saya belajar piano.)', options: ['娘に ピアノを 習わせます。', '娘を ピアノを 習わせます。', '娘が ピアノを 習われます。', '娘に ピアノを 習われます。'], correctAnswer: '娘に ピアノを 習わせます。' },
      { question: 'Apa bentuk kausatif dari "aruku" (berjalan)?', options: ['あるかせる', 'あるきさせる', 'あるかれる', 'あるかされる'], correctAnswer: 'あるかせる' },
      { question: 'Lengkapi kalimat: "私は 部長に お酒を ___。" (Saya dipaksa minum sake oleh manajer.)', options: ['飲まれました', '飲ませました', '飲ませられました', '飲みました'], correctAnswer: '飲ませられました' },
      { question: 'Kapan partikel 「を」 digunakan untuk menandai orang yang disuruh dalam kalimat kausatif?', options: ['Saat kata kerjanya transitif', 'Saat kata kerjanya intransitif', 'Tidak pernah', 'Selalu'], correctAnswer: 'Saat kata kerjanya intransitif' },
      // FIX: Completed the malformed quiz question that was causing a TypeScript error.
      { question: 'Bentuk kausatif dari "suru" (melakukan) adalah...', options: ['される', 'させる', 'しられる', 'すられる'], correctAnswer: 'させる' }
    ],
    pronunciationPhrases: [
        { japanese: '先生に 褒められました', romaji: 'Sensei ni homeraremashita' },
        { japanese: '雨に 降られました', romaji: 'Ame ni furaremashita' },
        { japanese: 'この本は 読まれました', romaji: 'Kono hon wa yomaremashita' }
    ],
    vocabulary: [
        { japanese: 'ほめられます', romaji: 'homeraremasu', indonesian: 'Dipuji' },
        { japanese: 'ふられます', romaji: 'furaremasu', indonesian: 'Dihujani (pasif penderitaan)' },
        { japanese: 'こわされます', romaji: 'kowasaremasu', indonesian: 'Dirusak (pasif penderitaan)' },
    ]
  };
