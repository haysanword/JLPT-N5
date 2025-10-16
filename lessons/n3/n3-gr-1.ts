import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-1',
    level: 'N3',
    title: 'Bentuk Pasif (～られる)',
    description: 'Pelajari cara menyatakan "dikenai tindakan" (kalimat pasif).',
    xp: 250,
    content: `
      <h1>Kalimat Pasif (うけみ) - Saat Subjek Menjadi Korban Aksi</h1>
      <p>Bentuk pasif digunakan ketika subjek kalimat adalah pihak yang <strong>menerima</strong> atau <strong>dikenai</strong> sebuah tindakan, bukan yang melakukan. Dalam bahasa Indonesia, ini sering ditandai dengan awalan "di-".</p>
      
      <h2>Cara Membentuk:</h2>
      <ul>
        <li><strong>Grup 1 (-u):</strong> Ubah vokal akhir ke vokal <code>-a</code> lalu tambah <code>れる</code>.<br/><em>Contoh: <strong>かく (kaku - menulis)</strong> → <strong>かかれる (kakareru - ditulis)</strong></em></li>
        <li><strong>Grup 2 (-ru):</strong> Ganti <code>る</code> dengan <code>られる</code>.<br/><em>Contoh: <strong>たべる (taberu - makan)</strong> → <strong>たべられる (taberareru - dimakan)</strong></em></li>
        <li><strong>Grup 3:</strong><br/>
            <ul>
                <li><strong>する (suru)</strong> → <strong>される (sareru - dilakukan)</strong></li>
                <li><strong>くる (kuru)</strong> → <strong>こられる (korareru - didatangi)</strong></li>
            </ul>
        </li>
      </ul>
      
      <h2>1. Pasif Langsung (Direct Passive)</h2>
      <p>Ini adalah bentuk pasif yang paling umum, mirip dengan bahasa Indonesia.</p>
      <p><strong>Pola:</strong> <code>[Penerima Aksi] は/が [Pelaku Aksi] に [Kata Kerja Pasif].</code></p>
      <p><strong>Kalimat Aktif:</strong> 先生は わたしを ほめました。(Sensei wa watashi o homemashita.) - Guru memuji saya.</p>
      <p><strong>Kalimat Pasif:</strong> <strong>わたしは せんせいに ほめられました。</strong> (Watashi wa sensei ni homeraremashita.) - Saya <strong>dipuji</strong> oleh guru.</p>

      <h2>2. Pasif "Penderitaan" (迷惑の受け身 - Meiwaku no Ukemi)</h2>
      <p>Ini adalah penggunaan pasif yang unik dalam bahasa Jepang! Ini digunakan ketika subjek merasa terganggu atau dirugikan oleh tindakan orang lain, bahkan jika tindakan itu tidak ditujukan langsung kepadanya.</p>
      
      <p><em>Contoh 1: <strong>わたしは あめに ふられました。</strong> (Watashi wa ame ni furaremashita.)</em><br/>
      Terjemahan harfiah: "Saya dihujani oleh hujan."<br/>
      Makna sebenarnya: "Saya merasa terganggu karena hujan turun (misalnya, jadi basah kuyup)."</p>
      
      <p><em>Contoh 2: <strong>わたしは ともだちに パソコンを こわされました。</strong> (Watashi wa tomodachi ni pasokon o kowasaremashita.)</em><br/>
      Terjemahan harfiah: "Saya dirusakkan laptop oleh teman."<br/>
      Makna sebenarnya: "Laptop saya dirusak oleh teman (dan saya menderita/kesal karenanya)."</p>
      <p>Bentuk ini menambahkan nuansa emosi negatif (gangguan, kerugian) ke dalam kalimat.</p>
    `,
    audioScript: 'Kalimat pasif menyatakan subjek dikenai tindakan. Ada pasif langsung, seperti "homeraremasu" (dipuji), dan ada juga pasif penderitaan, seperti "ame ni furaremashita," yang menunjukkan bahwa kita terganggu oleh hujan.',
    quiz: [
      { question: 'Bentuk pasif dari kata kerja "yomu" (membaca) adalah...', options: ['やまれる', 'よまれる', 'よませる', 'よばれる'], correctAnswer: 'よまれる' },
      { question: 'Kalimat "Kue ini dimakan oleh adik laki-laki saya" adalah...', options: ['このケーキは おとうとが たべました。', 'このケーキは おとうとに たべられました。', 'このケーキは おとうとを たべさせました。'], correctAnswer: 'このケーキは おとうとに たべられました。' },
      { question: 'Bentuk pasif dari "miru" (melihat) adalah...', options: ['みられる', 'みさせる', 'みえる', 'まれる'], correctAnswer: 'みられる' },
      { question: 'Apa arti kalimat "Ano tatemono wa 100 nen mae ni tateraremashita"?', options: ['Gedung itu akan dibangun 100 tahun lagi', 'Gedung itu dibangun 100 tahun yang lalu', 'Gedung itu sedang dibangun selama 100 tahun', 'Gedung itu membangun 100 tahun yang lalu'], correctAnswer: 'Gedung itu dibangun 100 tahun yang lalu' },
      { question: 'Bentuk pasif dari kata kerja Grup 1 "kaku" (menulis) adalah...', options: ['かかれる', 'かえられる', 'かかせられる', 'かきられる'], correctAnswer: 'かかれる' },
      { question: 'Kalimat 「私は母に叱られました」 (Watashi wa haha ni shikararemashita) berarti...', options: ['Saya memarahi ibu', 'Ibu memarahi saya', 'Saya dimarahi oleh ibu', 'Ibu dan saya dimarahi'], correctAnswer: 'Saya dimarahi oleh ibu' },
      { question: 'Pasif "Penderitaan" (Meiwaku no Ukemi) digunakan untuk mengekspresikan...', options: ['Rasa terima kasih', 'Rasa terganggu atau dirugikan', 'Perintah', 'Kemampuan'], correctAnswer: 'Rasa terganggu atau dirugikan' },
      { question: 'Bentuk pasif dari kata kerja Grup 3 "suru" (melakukan) adalah...', options: ['される', 'させられる', 'しられる', 'すられる'], correctAnswer: 'される' },
      { question: 'Ubah kalimat aktif berikut menjadi pasif: 「犬が 私の 足を かみました。」 (Anjing menggigit kaki saya)', options: ['私は 犬に 足を かまれました。', '私は 犬が 足を かみました。', '犬は 私に 足を かませました。', '私の足は 犬を かみました。'], correctAnswer: '私は 犬に 足を かまれました。' },
      { question: 'Bentuk pasif dari kata kerja "kuru" (datang) adalah...', options: ['きられる', 'こられる', 'こさせられる', 'くられる'], correctAnswer: 'こられる' },
      { question: 'Dalam kalimat pasif, pelaku aksi biasanya ditandai dengan partikel...', options: ['を', 'が', 'に', 'で'], correctAnswer: 'に' },
      { question: 'Kalimat "Saya kehujanan" yang menyiratkan rasa terganggu adalah...', options: ['雨が降りました。', '雨に降られました。', '雨を降らせました。', '雨が降るそうです。'], correctAnswer: '雨に降られました。' },
      { question: 'Bentuk pasif dari kata kerja "hanasu" (berbicara) adalah...', options: ['はなされる', 'はなせられる', 'はなさされる', 'はなさせられる'], correctAnswer: 'はなされる' },
      { question: 'Apa perbedaan antara bentuk pasif (taberareru) dan bentuk potensial (taberareru) dari kata kerja Grup 2?', options: ['Tidak ada perbedaan sama sekali', 'Bentuknya sama, artinya dibedakan dari konteks kalimat', 'Bentuknya berbeda', 'Satu untuk benda mati, satu untuk makhluk hidup'], correctAnswer: 'Bentuknya sama, artinya dibedakan dari konteks kalimat' },
      { question: 'Kalimat "Rapat akan diadakan besok" adalah...', options: ['明日、会議をします。', '明日、会議がされます。', '明日、会議が行われます。', '明日、会議をさせます。'], correctAnswer: '明日、会議が行われます。' }
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