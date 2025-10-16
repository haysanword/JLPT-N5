import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-reading-1',
    level: 'N3',
    title: 'Latihan Membaca N3: Artikel Berita Ringan',
    description: 'Pahami sebuah artikel berita pendek tentang acara lokal dan temukan informasi kuncinya.',
    xp: 270,
    content: `
      <h1>Membaca Artikel Singkat: Festival Musim Semi</h1>
      <p>Membaca teks otentik seperti artikel adalah cara terbaik untuk menguji pemahaman Anda. Mari kita baca berita tentang festival lokal dan coba pahami detailnya.</p>
      
      <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; background-color: #f9f9f9; dark:bg-slate-800;">
        <h2>記事：町の公園で「春祭り」</h2>
        <p>
        来月３日、さくら町の中心公園で<strong>毎年恒例の</strong>「春祭り」が<strong>行われます</strong>。この祭りは、<strong>地域の交流を目的として</strong>、今年で１０回目を迎えます。
        </p>
        <p>
        祭りでは、地元の店による食べ物の販売や、子ども向けのゲームコーナーが用意される<strong>予定です</strong>。また、ステージでは、地元の学生たちによる音楽の演奏も<strong>計画されています</strong>。
        </p>
        <p>
        町の<strong>担当者</strong>は、「家族や友人と一緒に、春の一日を楽しんでほしい」と話しています。祭りは午前１０時から午後４時までで、雨の<strong>場合は</strong>次の日に<strong>延期されます</strong>。
        </p>
      </div>
      
      <h2>Analisis Teks</h2>
      <p><strong>Paragraf 1:</strong><br/>
      "Bulan depan tanggal 3, di taman pusat kota Sakura, 'Festival Musim Semi' <strong>tahunan</strong> akan <strong>diselenggarakan</strong>. Festival ini, <strong>dengan tujuan interaksi warga</strong>, tahun ini akan memasuki tahun ke-10."</p>

      <p><strong>Paragraf 2:</strong><br/>
      "Di festival, penjualan makanan oleh toko lokal dan area permainan untuk anak-anak <strong>direncanakan</strong> akan disiapkan. Selain itu, di panggung, pertunjukan musik oleh siswa-siswa lokal juga <strong>sedang direncanakan</strong>."</p>

      <p><strong>Paragraf 3:</strong><br/>
      "<strong>Penanggung jawab</strong> kota berkata, 'Kami ingin (Anda) menikmati satu hari di musim semi bersama keluarga dan teman.' Festival berlangsung dari jam 10 pagi sampai jam 4 sore, dan <strong>dalam kasus</strong> hujan, akan <strong>ditunda</strong> ke hari berikutnya."</p>

      <h2>Kosakata Kunci N3:</h2>
      <ul>
        <li><strong>毎年恒例 (maitoshi kourei):</strong> acara tahunan</li>
        <li><strong>行われます (okonawaremasu):</strong> akan diselenggarakan (bentuk pasif dari 行う)</li>
        <li><strong>地域 (chiiki):</strong> wilayah/daerah</li>
        <li><strong>交流 (kouryuu):</strong> interaksi/pertukaran</li>
        <li><strong>目的 (mokuteki):</strong> tujuan</li>
        <li><strong>担当者 (tantousha):</strong> penanggung jawab</li>
        <li><strong>延期されます (enki saremasu):</strong> akan ditunda (bentuk pasif)</li>
        <li><strong>～場合は (baai wa):</strong> dalam kasus...</li>
      </ul>
    `,
    audioScript: 'Ini adalah artikel tentang festival musim semi di Taman Sakura. Acara ini bertujuan untuk interaksi warga. Akan ada stan makanan, permainan, dan pertunjukan musik. Jika hujan, acara akan ditunda.',
    quiz: [
      { question: 'Apa tujuan utama dari festival ini?', options: ['Untuk menjual makanan', 'Untuk pertunjukan musik', 'Untuk interaksi warga daerah', 'Untuk merayakan ulang tahun kota'], correctAnswer: 'Untuk interaksi warga daerah' },
      { question: 'Apa yang akan terjadi jika pada hari festival turun hujan?', options: ['Festival akan dibatalkan', 'Festival tetap berjalan', 'Festival akan dipindahkan ke dalam ruangan', 'Festival akan ditunda ke hari berikutnya'], correctAnswer: 'Festival akan ditunda ke hari berikutnya' },
      { question: 'Siapa yang akan mengadakan pertunjukan musik di panggung?', options: ['Artis profesional', 'Penanggung jawab kota', 'Siswa-siswa lokal', 'Pemilik toko'], correctAnswer: 'Siswa-siswa lokal' }
    ],
    pronunciationPhrases: [
        { japanese: '毎年恒例 (まいとしこうれい)', romaji: 'maitoshi kourei' },
        { japanese: '目的 (もくてき)', romaji: 'mokuteki' },
        { japanese: '延期されます (えんきされます)', romaji: 'enki saremasu' }
    ],
    vocabulary: [
        { japanese: '毎年恒例', romaji: 'maitoshi kourei', indonesian: 'Acara Tahunan' },
        { japanese: '目的', romaji: 'mokuteki', indonesian: 'Tujuan' },
        { japanese: '担当者', romaji: 'tantousha', indonesian: 'Penanggung Jawab' },
        { japanese: '延期されます', romaji: 'enki saremasu', indonesian: 'Akan ditunda' },
    ]
  };
