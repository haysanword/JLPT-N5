import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-culture-1',
    level: 'N4',
    title: 'Budaya Jepang: Etika Sosial & Keigo Dasar',
    description: 'Pahami etika di tempat umum dan pengenalan bahasa hormat (Keigo).',
    xp: 180,
    content: `
      <h1>Etika Sosial & Pengenalan Bahasa Hormat (敬語 - Keigo)</h1>
      <p>Saat Anda semakin mahir, memahami konteks sosial menjadi semakin penting. Mari kita lihat beberapa aturan tak tertulis dan pengenalan singkat ke dunia bahasa hormat.</p>
      
      <h2>Etika di Tempat Umum: Menjaga Keharmonisan (和 - Wa)</h2>
      <p>Inti dari etika sosial Jepang adalah menjaga keharmonisan dan tidak mengganggu orang lain.</p>
      <ul>
        <li><strong>Di Kereta (電車):</strong> Berbicara di telepon adalah hal yang sangat tidak sopan. Jika harus berbicara dengan teman, lakukan dengan suara sangat pelan. Mendengarkan musik dengan headphone yang bocor juga dianggap mengganggu.</li>
        <li><strong>Ketepatan Waktu (時間厳守):</strong> Ini bukan sekadar kebiasaan, tapi bentuk penghormatan terhadap waktu orang lain. Datang terlambat dianggap sangat tidak profesional. Aturan umumnya adalah tiba 5-10 menit sebelum waktu yang dijanjikan.</li>
        <li><strong>Membuang Sampah:</strong> Tempat sampah umum jarang ditemukan. Anda diharapkan membawa pulang sampah Anda sendiri. Jika ada tempat sampah, sampah harus dipisahkan dengan sangat detail (plastik, kaleng, botol, kertas, dll.).</li>
      </ul>
      
      <h1>Pengenalan Bahasa Hormat (敬語 - Keigo)</h1>
      <p>Keigo adalah sistem bahasa sopan yang kompleks, tapi jangan takut! Di level ini, cukup pahami dua konsep utamanya:</p>
      <ul>
        <li><strong>Sonkeigo (尊敬語): Bahasa untuk "Meninggikan" Orang Lain</strong>
            <br/><small>Anda menggunakan ini saat berbicara TENTANG tindakan yang dilakukan oleh orang yang Anda hormati (atasan, pelanggan, guru). Anda seolah-olah menempatkan mereka di atas panggung.</small>
            <br/><em>Contoh: 先生は<strong>いらっしゃいます</strong>か。(Sensei wa <strong>irasshaimasu</strong> ka?) - Apakah guru ada? (Irasshaimasu adalah bentuk hormat dari imasu).</em>
        </li>
        <li><strong>Kenjougo (謙譲語): Bahasa untuk "Merendahkan Diri"</strong>
            <br/><small>Anda menggunakan ini saat berbicara TENTANG tindakan yang Anda lakukan SENDIRI di hadapan orang yang Anda hormati. Dengan "merendahkan" diri, Anda secara tidak langsung "meninggikan" mereka.</small>
            <br/><em>Contoh: 私が<strong>まいります</strong>。(Watashi ga <strong>mairimasu</strong>.) - Saya yang akan datang/pergi. (Mairimasu adalah bentuk rendah hati dari ikimasu/kimasu).</em>
        </li>
      </ul>
      <p>Memahami perbedaan ini adalah langkah pertama untuk terdengar lebih natural dan sopan dalam situasi formal.</p>
    `,
    audioScript: 'Di Jepang, etika sangat penting. Di kereta, jangan berisik. Selalu datang tepat waktu. Untuk bahasa, ada Keigo. Sonkeigo untuk menghormati orang lain, Kenjougo untuk merendahkan diri sendiri. Ini menunjukkan kesopanan.',
    quiz: [
      { question: 'Mana yang merupakan perilaku baik di kereta Jepang?', options: ['Makan dan minum dengan bebas', 'Berbicara keras di telepon', 'Berbicara dengan suara pelan', 'Duduk di kursi prioritas meskipun tidak membutuhkannya'], correctAnswer: 'Berbicara dengan suara pelan' },
      { question: 'Bahasa Keigo yang digunakan untuk meninggikan lawan bicara disebut...', options: ['Sonkeigo', 'Kenjougo', 'Teineigo', 'Bahasa Kasual'], correctAnswer: 'Sonkeigo' },
      { question: 'Jika Anda memiliki janji jam 10 pagi di Jepang, kapan waktu terbaik untuk tiba?', options: ['Jam 10:15', 'Jam 10:30', 'Tepat jam 10:00', 'Jam 09:50'], correctAnswer: 'Jam 09:50' },
      { question: 'Konsep utama dalam etika sosial Jepang yang berarti "keharmonisan" adalah...', options: ['元気 (Genki)', '和 (Wa)', '愛 (Ai)', '力 (Chikara)'], correctAnswer: '和 (Wa)' },
      { question: 'Saat Anda berbicara TENTANG tindakan yang Anda lakukan sendiri di hadapan atasan, Anda menggunakan...', options: ['Sonkeigo', 'Kenjougo', 'Teineigo', 'Bahasa Kasual'], correctAnswer: 'Kenjougo' },
      { question: 'Apa arti dari 「時間厳守」 (jikan genshu)?', options: ['Fleksibel dengan waktu', 'Tepat waktu', 'Bekerja lembur', 'Istirahat'], correctAnswer: 'Tepat waktu' },
      { question: 'Di Jepang, apa yang diharapkan dari Anda terkait sampah pribadi?', options: ['Membuangnya di tempat sampah terdekat', 'Meninggalkannya di kursi taman', 'Membawanya pulang', 'Memberikannya kepada petugas kebersihan'], correctAnswer: 'Membawanya pulang' },
      { question: '「いらっしゃいます」 (irasshaimasu) adalah contoh dari...', options: ['Sonkeigo', 'Kenjougo', 'Teineigo', 'Bahasa Kasual'], correctAnswer: 'Sonkeigo' },
      { question: 'Tujuan utama menggunakan Kenjougo adalah...', options: ['Agar terdengar lebih pintar', 'Untuk menunjukkan keakraban', 'Untuk meninggikan lawan bicara dengan cara merendahkan diri', 'Hanya digunakan dalam surat'], correctAnswer: 'Untuk meninggikan lawan bicara dengan cara merendahkan diri' },
      { question: '「まいります」 (mairimasu) adalah bentuk Kenjougo dari kata kerja...', options: ['たべます (tabemasu)', 'みます (mimasu)', 'します (shimasu)', 'いきます (ikimasu) / きます (kimasu)'], correctAnswer: 'いきます (ikimasu) / きます (kimasu)' },
      { question: 'Perilaku mana yang dianggap paling tidak sopan di kereta Jepang?', options: ['Membaca buku', 'Tertidur', 'Berbicara di telepon', 'Mendengarkan musik dengan headphone'], correctAnswer: 'Berbicara di telepon' },
      { question: 'Sonkeigo digunakan saat berbicara TENTANG tindakan siapa?', options: ['Diri sendiri', 'Teman dekat', 'Orang yang Anda hormati', 'Hewan peliharaan'], correctAnswer: 'Orang yang Anda hormati' },
      { question: 'Jika Anda ingin mengatakan "Saya akan datang" (dalam konteks bisnis/sangat sopan), Anda akan menggunakan...', options: ['いきます (ikimasu)', 'きます (kimasu)', 'まいります (mairimasu)', 'いらっしゃいます (irasshaimasu)'], correctAnswer: 'まいります (mairimasu)' },
      { question: 'Budaya memisahkan sampah dengan detail di Jepang mencerminkan...', options: ['Sikap individualistis', 'Keinginan untuk menjaga kebersihan dan ketertiban', 'Aturan yang tidak penting', 'Hobi masyarakat'], correctAnswer: 'Keinginan untuk menjaga kebersihan dan ketertiban' },
      { question: 'Mengapa datang tepat waktu sangat dihargai di Jepang?', options: ['Karena kereta selalu tepat waktu', 'Sebagai bentuk penghormatan terhadap waktu orang lain', 'Agar tidak dimarahi atasan', 'Hanya berlaku di kota besar'], correctAnswer: 'Sebagai bentuk penghormatan terhadap waktu orang lain' }
    ],
    pronunciationPhrases: [
        { japanese: '時間厳守 (じかんげんしゅ)', romaji: 'jikan genshu' },
        { japanese: '尊敬語 (そんけいご)', romaji: 'sonkeigo' },
        { japanese: '謙譲語 (けんじょうご)', romaji: 'kenjougo' }
    ],
    vocabulary: [
        { japanese: '電車', romaji: 'densha', indonesian: 'Kereta' },
        { japanese: '時間厳守', romaji: 'jikan genshu', indonesian: 'Tepat Waktu' },
        { japanese: '敬語', romaji: 'keigo', indonesian: 'Bahasa Hormat' },
        { japanese: '尊敬語', romaji: 'sonkeigo', indonesian: 'Bahasa Hormat (meninggikan)' },
        { japanese: '謙譲語', romaji: 'kenjougo', indonesian: 'Bahasa Rendah Hati' },
    ]
  };