import { useEffect, useState, useRef } from 'react';
import ChatWindow from '../components/ChatWindow';
import RestartButton from '../components/RestartButton';
import Confetti from 'react-confetti';
import Typewriter from '../components/Typewriter';
import Lottie from 'react-lottie-player';
import animationData from '../public/cute.json';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [showCuteIntro, setShowCuteIntro] = useState(true);
  const audioRef = useRef(null);

  const script = [
    "🎉 Hey {name}, udah tahu belum? Hari ini tuh spesial banget...",
    "Bukan cuma karena kamu ulang tahun... tapi karena dunia masih beruntung punya kamu di dalamnya 🌍",
    "Kita mulai dari sini ya: terima kasih udah bertahan sejauh ini.",
    "Nggak gampang kan? Banyak hari-hari berat yang kamu lewatin sendirian...",
    "Tapi kamu tetap di sini. Nafas masih ada. Mata masih terbuka. Dan itu... udah luar biasa banget.",
    "{name}, kamu pernah kecewa, pernah gagal, mungkin ngerasa nggak cukup. Aku tau itu.",
    "Pernah nggak sih, kamu ngerasa capek banget... tapi tetep harus pura-pura kuat?",
    "Atau pernah ngerasa senyum kamu tuh cuma masker, biar orang nggak tanya-tanya terlalu banyak?",
    "Nggak apa-apa. Serius. Nggak semua hal harus selalu baik-baik aja. Manusiawi banget kalau kamu lelah.",
    "Tapi hari ini... aku pengen kamu inget satu hal: kamu pantas untuk bahagia. Tanpa syarat.",
    "Pernah kan kamu ngebantu orang lain, walaupun kamu sendiri lagi remuk? Kamu punya hati yang indah, {name}.",
    "Dan semoga suatu hari nanti... ada yang ngelakuin hal yang sama buat kamu.",
    "Sekarang tarik napas, lepasin pelan-pelan... karena kamu aman sekarang.",
    "Boleh ya, aku peluk kamu dari jauh 🤗",
    "Sekarang aku mau bilang: selamat ulang tahun, {name} 🎂🎈",
    "Semoga kamu nemuin versi terbaik dari dirimu sendiri, bukan versi yang orang lain paksa kamu jadi.",
    "Semoga kamu nggak lagi merasa harus sempurna untuk dicintai.",
    "Semoga kamu berani mimpi lagi... dan ngasih kesempatan kedua buat diri kamu sendiri.",
    "Kadang yang kamu butuhin bukan motivasi, tapi pelukan, atau satu kalimat: 'Aku bangga sama kamu.'",
    "Jadi hari ini, izinkan aku bilang: aku bangga sama kamu, {name}.",
    "Bangga sama semua luka yang kamu sembuhkan sendiri. Sama semua ketakutan yang kamu taklukin diam-diam.",
    "Kamu itu kuat. Tapi kamu juga lembut. Dan itu bukan kelemahan, itu keindahan.",
    "Kalau kamu pernah kehilangan, semoga kamu bisa pulih. Kalau kamu pernah kecewa, semoga kamu bisa percaya lagi.",
    "Kalau kamu pernah merasa sendiri... semoga kamu tahu sekarang: ada yang ngerti kamu.",
    "Hari ini, ulang tahun kamu. Tapi ini juga hari buat refleksi, bukan cuma perayaan.",
    "Apapun itu — besar, kecil, absurd — kamu berhak ngejar itu.",
    "Dan meskipun jalanmu pelan, asal kamu masih jalan, kamu nggak tertinggal.",
    "Semoga tahun ini kamu ketemu orang-orang yang beneran nerima kamu.",
    "Semoga kamu mulai jujur lagi sama diri sendiri.",
    "Semoga kamu bisa mencintai... tanpa takut kehilangan lagi.",
    "Ini bukan akhir dari surat ini... tapi mungkin awal dari sesuatu yang kamu butuhin: harapan baru.",
    "Hari ini, jangan cuma rayain umur... rayain juga keberanianmu untuk tetap hidup.",
    "Terima kasih ya, {name}. Udah jadi kamu. Udah nggak nyerah. Udah bangun lagi setiap pagi.",
    "You’re doing better than you think.",
    "Senyum hari ini bukan karena hidupmu sempurna, tapi karena kamu bertumbuh 🪴",
    "🎊 Sekali lagi... selamat ulang tahun ya, {name} 💖"
  ];

  useEffect(() => {
    if (started && step < script.length) {
      const timer = setTimeout(() => {
        const current = script[step].replaceAll('{name}', name);
        setMessages(prev => [...prev, { text: current, from: 'bot' }]);
        setStep(prev => prev + 1);

        if (step === script.length - 1) {
          setShowConfetti(true);
        }
      }, 3800);
      return () => clearTimeout(timer);
    }
  }, [step, started, name]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  const handleStart = () => {
    if (name.trim().length < 3) return alert("Nama minimal 3 huruf ya :)");
    setStarted(true);
    setShowCuteIntro(false);
    setMessages([]);
    setStep(0);
    setShowConfetti(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const restart = () => {
    setStarted(false);
    setMessages([]);
    setName('');
    setStep(0);
    setShowCuteIntro(true);
    setShowConfetti(false);
  };

  return (
    <div
      className={`min-h-screen px-4 py-6 flex flex-col items-center relative transition-all duration-500
        ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}
      style={{
        backgroundImage: darkMode ? '' : 'url("/bg.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute top-4 right-4 flex gap-2">
        <button onClick={toggleDarkMode} className="text-sm px-3 py-1 bg-yellow-400 rounded shadow">
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
        <button onClick={toggleMusic} className="text-sm px-3 py-1 bg-blue-400 rounded shadow">
          {musicPlaying ? '🔈 Mute' : '🔊 Unmute'}
        </button>
      </div>

      <h1 className="text-2xl font-bold my-4 animate-pop">🎂 Happy Birthday {name && `, ${name}`} 🎂</h1>

      {showCuteIntro && (
        <div className="w-full max-w-md flex flex-col items-center justify-center mb-8">
          <Lottie
            loop
            play
            animationData={animationData}
            style={{ width: 180, height: 180 }}
          />
        </div>
      )}

      {!started && (
        <div className="bg-white/80 dark:bg-zinc-800 p-6 rounded-lg shadow-md w-full max-w-sm text-center">
          <p className="mb-4 text-zinc-800 dark:text-white">Masukkan nama kamu dulu ya:</p>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
            className="border rounded px-3 py-2 w-full text-center dark:bg-zinc-700 dark:text-white"
            placeholder="Nama kamu..."
          />
          <button
            onClick={handleStart}
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
          >
            Mulai 🎉
          </button>
        </div>
      )}

      {started && (
        <>
          {showConfetti && <Confetti />}
          <div className="w-full max-w-md mt-4 space-y-3">
            {messages.map((msg, idx) => (
              <Typewriter key={idx} text={msg.text} />
            ))}
          </div>

          <RestartButton onClick={restart} />

          <div className="flex justify-center gap-5 mt-6">
            <a href="https://wa.me/qr/VKPXEOZVLGRSE1" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="WhatsApp" className="logo-icon" />
            </a>
            <a href="https://www.instagram.com/rcoerfn_?igsh=b3BoNzR0ZDNsMnpm" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className="logo-icon" />
            </a>
          </div>

          <p className="text-xs italic text-center mt-6 opacity-70">
            dari sosok manusia yang sederhana 😌<br />– ricoerfan
          </p>
        </>
      )}

      <audio ref={audioRef} loop src="/music.mp3" />
    </div>
  );
            }
                                          
