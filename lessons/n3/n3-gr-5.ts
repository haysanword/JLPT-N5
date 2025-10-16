import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-5',
    level: 'N3',
    title: 'Dasar-dasar Keigo (Bahasa Hormat)',
    description: 'Pahami konsep dasar Sonkeigo (menghormati orang lain) dan Kenjougo (merendahkan diri).',
    xp: 300,
    content: `
      <h1>Bahasa Hormat (けいご - Keigo): Seni Berbicara Sopan</h1>
      <p>Keigo adalah sistem bahasa yang digunakan untuk menunjukkan rasa hormat dalam situasi formal atau saat berbicara dengan orang yang statusnya lebih tinggi. Menguasainya akan membuat Anda terdengar sangat profesional. Mari kita pecah menjadi tiga bagian utama.</p>
      
      <h2>1. Teineigo (丁寧語) - Bahasa Sopan Dasar</h2>
      <p>Ini adalah Keigo yang sudah Anda pelajari! Penggunaan <code>～です</code> dan <code>～ます</code> adalah Teineigo. Ini adalah tingkat kesopanan standar yang aman digunakan hampir di semua situasi.</p>
      
      <h2>2. Sonkeigo (尊敬語) - Bahasa untuk Menghormati/Meninggikan Orang Lain</h2>
      <p>Anda menggunakan Sonkeigo saat berbicara <strong>TENTANG</strong> tindakan atau keadaan <strong>orang lain</strong> yang Anda hormati (atasan, pelanggan, orang tua, dll.). Anda seolah-olah "meninggikan" mereka.</p>
      <p><strong>Pola Umum:</strong> <code>お + [akar kata kerja bentuk -masu] + になります</code>.<br/><em>Contoh: かく (kaku) → かき(ます) → <strong>おかきになります (okaki ni narimasu)</strong> - (Beliau) menulis.</em></p>
      
      <h4>Kata Kerja Khusus (Harus Dihafal):</h4>
      <table>
        <thead>
          <tr><th>Bentuk Biasa</th><th>Bentuk Sonkeigo</th><th>Arti</th></tr>
        </thead>
        <tbody>
          <tr><td>いる / 行く / 来る</td><td><strong>いらっしゃる</strong></td><td>ada / pergi / datang</td></tr>
          <tr><td>する</td><td><strong>なさる</strong></td><td>melakukan</td></tr>
          <tr><td>言う</td><td><strong>おっしゃる</strong></td><td>berkata</td></tr>
          <tr><td>食べる / 飲む</td><td><strong>召し上がる (めしあがる)</strong></td><td>makan / minum</td></tr>
          <tr><td>見る</td><td><strong>ご覧になる (ごらんになる)</strong></td><td>melihat</td></tr>
        </tbody>
      </table>
      <p><em>Contoh: <strong>社長は もう お帰りになりましたか。</strong> (Shachou wa mou okaeri ni narimashita ka.) - Apakah direktur sudah pulang?</em></p>
      
      <h2>3. Kenjougo (謙譲語) - Bahasa untuk Merendahkan Diri Sendiri</h2>
      <p>Anda menggunakan Kenjougo saat berbicara <strong>TENTANG</strong> tindakan <strong>Anda sendiri</strong> (atau kelompok Anda) di hadapan orang yang Anda hormati. Dengan "merendahkan diri", Anda secara tidak langsung meninggikan mereka.</p>
      <p><strong>Pola Umum:</strong> <code>お + [akar kata kerja bentuk -masu] + します</code>.<br/><em>Contoh: もつ (motsu) → もち(ます) → <strong>おもちします (omochi shimasu)</strong> - Saya akan bawakan.</em></p>
      
      <h4>Kata Kerja Khusus (Harus Dihafal):</h4>
      <table>
        <thead>
          <tr><th>Bentuk Biasa</th><th>Bentuk Kenjougo</th><th>Arti</th></tr>
        </thead>
        <tbody>
          <tr><td>行く / 来る</td><td><strong>参る (まいる)</strong></td><td>pergi / datang</td></tr>
          <tr><td>言う</td><td><strong>申す (もうす)</strong></td><td>berkata</td></tr>
          <tr><td>する</td><td><strong>致す (いたす)</strong></td><td>melakukan</td></tr>
          <tr><td>食べる / 飲む</td><td><strong>頂く (いただく)</strong></td><td>makan / minum (menerima)</td></tr>
          <tr><td>見る</td><td><strong>拝見する (はいけんする)</strong></td><td>melihat</td></tr>
        </tbody>
      </table>
      <p><em>Contoh: <strong>私が お荷物を お持ちします。</strong> (Watashi ga onimotsu o omochi shimasu.) - Biar saya yang bawakan barang Anda.</em></p>
    `,
    audioScript: 'Keigo adalah bahasa hormat. Sonkeigo untuk meninggikan orang lain, contohnya irasshaimasu. Kenjougo untuk merendahkan diri sendiri, contohnya mairimasu. Selain kata kerja khusus, ada juga pola umum seperti o-ni naru dan o-shimasu.',
    quiz: [
      { question: 'Kata "nasaru" (なさる) adalah bentuk Sonkeigo dari kata kerja...', options: ['する', 'くる', 'いる', 'みる'], correctAnswer: 'する' },
      { question: 'Saat Anda berkata "Nama saya Tanaka" kepada atasan, bentuk yang paling sopan adalah...', options: ['たなかです (Tanaka desu)', 'たなかと いいます (Tanaka to iimasu)', 'たなかと もうします (Tanaka to moushimasu)'], correctAnswer: 'たなかと もうします (Tanaka to moushimasu)' },
      { question: 'Sonkeigo digunakan untuk...', options: ['Membicarakan diri sendiri', 'Membicarakan tindakan orang yang dihormati', 'Membicarakan teman sebaya', 'Menulis surat informal'], correctAnswer: 'Membicarakan tindakan orang yang dihormati' },
      { question: '"Irassharu" adalah bentuk hormat (Sonkeigo) dari...', options: ['iku (pergi)', 'kuru (datang)', 'iru (ada)', 'Semua benar'], correctAnswer: 'Semua benar' }
    ],
    pronunciationPhrases: [
        { japanese: 'いらっしゃいます', romaji: 'irasshaimasu' },
        { japanese: 'なさいます', romaji: 'nasaimasu' },
        { japanese: '申します (もうします)', romaji: 'moushimasu' },
        { japanese: '参ります (まいります)', romaji: 'mairimasu' }
    ],
    vocabulary: [
        { japanese: 'いらっしゃいます', romaji: 'irasshaimasu', indonesian: 'Ada/Pergi/Datang (Sonkeigo)' },
        { japanese: 'なさいます', romaji: 'nasaimasu', indonesian: 'Melakukan (Sonkeigo)' },
        { japanese: 'めしあがります', romaji: 'meshiagarimasu', indonesian: 'Makan/Minum (Sonkeigo)' },
        { japanese: 'まいります', romaji: 'mairimasu', indonesian: 'Pergi/Datang (Kenjougo)' },
        { japanese: 'もうします', romaji: 'moushimasu', indonesian: 'Berkata (Kenjougo)' },
        { japanese: 'いたします', romaji: 'itashimasu', indonesian: 'Melakukan (Kenjougo)' },
    ]
  };