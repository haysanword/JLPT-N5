import { Lesson } from '../../types';

export const lesson: Lesson = {
    id: 'n3-gr-4',
    level: 'N3',
    title: 'Tata Bahasa N3: Kondisi & "Tampaknya"',
    description: 'Pelajari ～場合は untuk situasi kondisional dan ～そうだ / ～らしい untuk menyampaikan informasi tidak langsung.',
    xp: 280,
    content: `
        <h1>Pola Kalimat N3: Situasi Hipotesis dan Informasi "Katanya"</h1>
        <p>Pola-pola ini sangat berguna untuk berbicara tentang situasi tertentu, mengatur waktu, dan menyampaikan informasi yang Anda dengar dari orang lain.</p>
        
        <h2>Situasi Kondisional Formal</h2>
        <ul>
            <li><strong>～場合は (baai wa):</strong> "Dalam kasus..." atau "Jika situasinya...". Ini adalah cara yang lebih formal dan tertulis untuk mengatakan "jika", dibandingkan dengan と/たら/ば. Sering digunakan dalam instruksi, aturan, atau peringatan.
                <br/><em>Contoh: 火事の<strong>場合は</strong>、エレベーターを使わないでください。(Kaji no <strong>baai wa</strong>, erebeetaa o tsukawanai de kudasai.) - <strong>Dalam kasus</strong> kebakaran, tolong jangan gunakan lift.</em>
                <br/><em>Contoh: パスポートをなくした<strong>場合は</strong>、すぐに大使館に連絡してください。(Pasupooto o nakushita <strong>baai wa</strong>, sugu ni taishikan ni renraku shite kudasai.) - <strong>Jika Anda</strong> kehilangan paspor, segera hubungi kedutaan.</em></li>
        </ul>
        
        <h2>Menunjukkan Fase Aksi dengan Tepat: ～ところです</h2>
        <p>Pola ini seperti "zoom in" pada sebuah kata kerja untuk menunjukkan apakah aksi itu <strong>akan</strong>, <strong>sedang</strong>, atau <strong>baru saja</strong> terjadi.</p>
        <ul>
            <li><strong>Bentuk Kamus + ところです:</strong> <u>Baru akan</u> melakukan.
                <br/><em>Contoh: これからご飯を食べる<strong>ところです</strong>。(Korekara gohan o taberu <strong>tokoro desu</strong>.) - Saya baru akan makan sekarang.</em>
            </li>
            <li><strong>Bentuk Te iru + ところです:</strong> <u>Sedang</u> melakukan.
                <br/><em>Contoh: 今、レポートを書いている<strong>ところです</strong>。(Ima, repooto o kaiteiru <strong>tokoro desu</strong>.) - Saya sedang menulis laporan sekarang.</em>
            </li>
            <li><strong>Bentuk Ta + ところです:</strong> <u>Baru saja selesai</u> melakukan.
                <br/><em>Contoh: たった今、駅に着いた<strong>ところです</strong>。(Tattaima, eki ni tsuita <strong>tokoro desu</strong>.) - Saya baru saja tiba di stasiun.</em>
            </li>
        </ul>
        
        <h2>Menyampaikan Informasi Tidak Langsung ("Tampaknya")</h2>
        <p>Bagaimana cara mengatakan sesuatu yang Anda dengar atau lihat secara tidak langsung? Gunakan dua pola ini:</p>
        <ul>
            <li><strong>～そうです (sou desu):</strong> Berdasarkan apa yang <strong>didengar</strong> (hearsay). Artinya "Katanya...".
                <br/><em>Contoh: 天気予報によると、明日は雨が降る<strong>そうです</strong>。(Tenkiyohou ni yoru to, ashita wa ame ga furu <strong>sou desu</strong>.) - Menurut ramalan cuaca, <strong>katanya</strong> besok akan hujan.</em>
            </li>
            <li><strong>～らしいです (rashii desu):</strong> Berdasarkan <strong>bukti tidak langsung</strong> atau gosip yang Anda dengar. Artinya "Sepertinya...".
                <br/><em>Contoh: 田中さんは会社を辞める<strong>らしいです</strong>。うわさを聞きました。(Tanaka-san wa kaisha o yameru <strong>rashii desu</strong>. Uwasa o kikimashita.) - <strong>Sepertinya</strong> Tanaka-san akan berhenti kerja. Saya dengar gosipnya.</em>
            </li>
        </ul>
    `,
    audioScript: 'Untuk situasi formal, gunakan "baai wa" untuk "jika". Pola "tokoro desu" sangat berguna untuk menunjukkan kapan sebuah aksi terjadi: akan, sedang, atau baru saja. "Sou desu" untuk "katanya", dan "rashii desu" untuk "sepertinya" berdasarkan bukti.',
    quiz: [
        { question: 'Pola mana yang berarti "baru saja selesai melakukan sesuatu"?', options: ['Bentuk Kamus + ところです', 'Bentuk Te iru + ところです', 'Bentuk Ta + ところです', 'Bentuk Nai + ところです'], correctAnswer: 'Bentuk Ta + ところです' },
        { question: 'Lengkapi kalimat: "ニュースに___、来月から値段が上がるそうです。" (Menurut berita, katanya harga akan naik mulai bulan depan)', options: ['よると', 'ために', '比べて', 'ついて'], correctAnswer: 'よると' },
        { question: '"Dia sepertinya sibuk." Kalimat ini menunjukkan bahwa pembicara...', options: ['Melihat langsung dia sibuk', 'Membuat dia sibuk', 'Mendengar informasi atau melihat tanda-tanda bahwa dia sibuk', 'Berjanji akan sibuk'], correctAnswer: 'Mendengar informasi atau melihat tanda-tanda bahwa dia sibuk' }
    ],
    pronunciationPhrases: [
        { japanese: '火事の場合は', romaji: 'Kaji no baai wa' },
        { japanese: '今、食べているところです', romaji: 'Ima, tabeteiru tokoro desu' },
        { japanese: '雨が降るそうです', romaji: 'Ame ga furu sou desu' }
    ],
    vocabulary: [
        { japanese: '～場合は', romaji: 'baai wa', indonesian: 'Dalam kasus...' },
        { japanese: '～ところです', romaji: 'tokoro desu', indonesian: 'Baru akan/sedang/telah...' },
        { japanese: '～そうです', romaji: 'sou desu', indonesian: 'Katanya...' },
        { japanese: '～らしいです', romaji: 'rashii desu', indonesian: 'Sepertinya...' },
    ]
  };
