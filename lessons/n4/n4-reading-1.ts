import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n4-reading-1',
    level: 'N4',
    title: 'Latihan Membaca: Email Undangan',
    description: 'Baca dan pahami isi sebuah email ajakan dari teman.',
    xp: 200,
    content: `
      <h1>Membaca Email dari Teman</h1>
      <p>Di level ini, Anda akan mulai melihat teks yang lebih praktis, seperti email atau pengumuman singkat. Mari kita bedah email dari Tanaka-san untuk Yamamoto-san.</p>

      <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; font-family: 'Meiryo', sans-serif;">
        <p><strong>件名：</strong>今度の週末</p>
        <p>山本さん、</p>
        <p>お元気ですか。
        <br/>今度の土曜日に、新しいレストランへ行きませんか。イタリア料理の店で、とてもおいしいと思います。
        <br/>もし時間があったら、一緒に行きたいです。
        <br/>午後６時に渋谷駅で会いましょう。
        <br/>返事を待っています。</p>
        <p>田中</p>
      </div>
      
      <h2>Penjelasan per Baris:</h2>
      <p><strong>件名：今度の週末 (Kenmei: Kondo no shuumatsu)</strong></p>
      <p>Subjek: Akhir pekan ini.</p>
      
      <p><strong>山本さん、お元気ですか。(Yamamoto-san, o-genki desu ka.)</strong></p>
      <p>Yamamoto-san, apa kabar?</p>
      
      <p><strong>今度の土曜日に、新しいレストランへ行きませんか。(Kondo no doyoubi ni, atarashii resutoran e ikimasen ka.)</strong></p>
      <p>Pada hari Sabtu minggu ini, maukah kita pergi ke restoran baru? (Pola <code>～masen ka</code> adalah ajakan sopan).</p>
      
      <p><strong>イタリア料理の店で、とてもおいしいと思います。(Itaria ryouri no mise de, totemo oishii to omoimasu.)</strong></p>
      <p>Itu adalah toko (restoran) masakan Italia, saya pikir sangat enak. (Lihat? Pola <code>～to omoimasu</code> digunakan di sini!)</p>
      
      <p><strong>もし時間があったら、一緒に行きたいです。(Moshi jikan ga attara, issho ni ikitai desu.)</strong></p>
      <p>Jika kamu ada waktu, saya ingin pergi bersama. (<code>～tara</code> adalah bentuk pengandaian "jika").</p>
      
      <p><strong>午後６時に渋谷駅で会いましょう。(Gogo roku-ji ni Shibuya-eki de aimashou.)</strong></p>
      <p>Ayo bertemu di Stasiun Shibuya jam 6 sore. (Pola <code>～mashou</code> adalah ajakan "ayo...").</p>
      
      <p><strong>返事を待っています。(Henji o matte imasu.)</strong></p>
      <p>Saya tunggu balasannya. (<code>matte imasu</code> adalah bentuk "sedang menunggu").</p>
    `,
    audioScript: 'Ini adalah contoh email. Tanaka-san mengundang Yamamoto-san untuk pergi ke restoran Italia baru pada hari Sabtu. Mereka berencana bertemu di stasiun Shibuya jam 6 sore.',
    quiz: [
      { question: 'Siapa yang mengirim email?', options: ['Yamamoto', 'Orang tidak dikenal', 'Tanaka', 'Restoran Italia'], correctAnswer: 'Tanaka' },
      { question: 'Kapan mereka berencana untuk pergi?', options: ['Hari Minggu', 'Hari Sabtu', 'Hari Jumat', 'Setiap hari'], correctAnswer: 'Hari Sabtu' },
      { question: 'Di mana mereka akan bertemu?', options: ['Restoran Italia', 'Rumah Tanaka', 'Stasiun Shibuya', 'Kantor'], correctAnswer: 'Stasiun Shibuya' },
      { question: 'Jenis masakan apa yang disajikan di restoran tersebut?', options: ['Jepang', 'Prancis', 'Cina', 'Italia'], correctAnswer: 'Italia' },
      { question: 'Pukul berapa mereka akan bertemu?', options: ['Pukul 6 pagi', 'Pukul 12 siang', 'Pukul 6 sore', 'Pukul 8 malam'], correctAnswer: 'Pukul 6 sore' },
      { question: 'Apa tujuan utama Tanaka mengirim email ini?', options: ['Menanyakan kabar', 'Mengajak pergi ke restoran', 'Memberi tahu tentang restoran baru', 'Meminta balasan'], correctAnswer: 'Mengajak pergi ke restoran' },
      { question: 'Kata 「件名」 (kenmei) berarti...', options: ['Kepada', 'Dari', 'Subjek', 'Tanggal'], correctAnswer: 'Subjek' },
      { question: 'Bagaimana Tanaka mendeskripsikan restoran tersebut?', options: ['Murah', 'Ramai', 'Sangat enak', 'Tenang'], correctAnswer: 'Sangat enak' },
      { question: 'Pola kalimat 「～ませんか」 yang digunakan dalam email menunjukkan...', options: ['Perintah', 'Keharusan', 'Ajakan sopan', 'Larangan'], correctAnswer: 'Ajakan sopan' },
      { question: 'Apa yang Tanaka harapkan dari Yamamoto?', options: ['Uang', 'Hadiah', 'Balasan', 'Makanan'], correctAnswer: 'Balasan' },
      { question: 'Kata 「今度」 (kondo) dalam konteks ini berarti...', options: ['Lain kali', 'Kali ini / yang akan datang', 'Dahulu kala', 'Setiap saat'], correctAnswer: 'Kali ini / yang akan datang' },
      { question: 'Pola 「～たいです」 yang digunakan Tanaka menunjukkan...', options: ['Kemampuan', 'Keinginan', 'Pengalaman', 'Kewajiban'], correctAnswer: 'Keinginan' },
      { question: 'Frasa 「待っています」 (matte imasu) berarti...', options: ['Saya sudah menunggu', 'Saya akan menunggu', 'Saya sedang menunggu', 'Saya tidak menunggu'], correctAnswer: 'Saya sedang menunggu' },
      { question: 'Kondisi yang Tanaka sebutkan agar bisa pergi bersama adalah...', options: ['Jika cuacanya bagus', 'Jika Yamamoto punya uang', 'Jika restorannya buka', 'Jika Yamamoto punya waktu'], correctAnswer: 'Jika Yamamoto punya waktu' },
      { question: 'Pola 「～ましょう」 yang digunakan Tanaka menunjukkan...', options: ['Ajakan "ayo kita..."', 'Pertanyaan sopan', 'Keraguan', 'Perintah'], correctAnswer: 'Ajakan "ayo kita..."' }
    ],
    pronunciationPhrases: [
        { japanese: 'お元気ですか', romaji: 'O-genki desu ka' },
        { japanese: '一緒に行きたいです', romaji: 'Issho ni ikitai desu' },
        { japanese: '返事を待っています', romaji: 'Henji o matte imasu' }
    ],
    vocabulary: [
        { japanese: '週末', romaji: 'shuumatsu', indonesian: 'Akhir Pekan' },
        { japanese: '新しい', romaji: 'atarashii', indonesian: 'Baru' },
        { japanese: '一緒', romaji: 'issho', indonesian: 'Bersama' },
        { japanese: '返事', romaji: 'henji', indonesian: 'Balasan' },
    ]
  };