import { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import RestartButton from '../components/RestartButton';
import Confetti from 'react-confetti';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState('');
  const [musicStarted, setMusicStarted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

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
    "Apa yang kamu pengen dari tahun ini, {name}? Coba bayangin sebentar...",
    "Apapun itu — besar, kecil, absurd — kamu berhak ngejar itu.",
    "Dan meskipun jalanmu pelan, asal kamu masih jalan, kamu nggak tertinggal.",
    "Semoga tahun ini kamu ketemu orang-orang yang beneran nerima kamu.",
    "Semoga kamu mulai jujur lagi sama diri sendiri.",
    "Semoga kamu berani bilang 'nggak' ke hal yang nyakitin, dan 'iya' ke hal yang ngebahagiain.",
    "Semoga kamu bisa mencintai... tanpa takut kehilangan lagi.",
    "Dan kalaupun kamu jatuh, semoga jatuh ke tempat yang empuk, kayak kasur hotel ✨",
    "Ini bukan akhir dari surat ini... tapi mungkin awal dari sesuatu yang kamu butuhin: harapan baru.",
    "Hari ini, jangan cuma rayain umur... rayain juga keberanianmu untuk tetap hidup.",
    "Terima kasih ya, {name}. Udah jadi kamu. Udah nggak nyerah. Udah bangun lagi setiap pagi.",
    "You’re doing better than you think. Dan kamu nggak perlu buru-buru jadi 'hebat'.",
    "Senyum hari ini bukan karena hidupmu sempurna, tapi karena kamu bertumbuh 🪴",
    "Selamat ulang tahun, sekali lagi. Dari aku, yang bangga sama kamu, selalu."
  ];

  useEffect(() => {
    if (username && step < script.length) {
      const timer = setTimeout(() => {
        const message = script[step].replaceAll('{name}', username);
        setMessages(prev => [...prev, { text: message, from: 'bot' }]);
        setStep(step + 1);

        if (step === script.length - 1) {
          setShowConfetti(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, username]);

  const handleStart = () => {
    if (!username.trim()) return;
    setMessages([]);
    setStep(0);
    setMusicStarted(true);
    setShowConfetti(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen p-6 flex flex-col items-center justify-start relative transition duration-300 ${darkMode ? 'bg-zinc-900' : 'bg-pink-100'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="text-sm px-3 py-1 bg-zinc-800 text-white rounded dark:bg-white dark:text-zinc-800"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <h1 className="text-2xl font-semibold mt-4 mb-6 dark:text-white">🎂 Chatbot Ulang Tahun 🎂</h1>

      {!username && (
        <div className="bg-white dark:bg-zinc-800 p-6 rounded shadow-md w-full max-w-sm text-center">
          <p className="mb-4 font-medium text-gray-700 dark:text-gray-100">Masukkan nama kamu dulu ya:</p>
          <input
            type="text"
            onChange={e => setUsername(e.target.value)}
            className="border rounded px-3 py-2 w-full text-center dark:bg-zinc-700 dark:text-white"
            placeholder="Nama kamu..."
          />
          <button
            onClick={handleStart}
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Mulai 🎉
          </button>
        </div>
      )}

      {username && (
        <>
          {showConfetti && <Confetti />}
          <ChatWindow messages={messages} />

          {musicStarted && (
            <audio autoPlay loop>
              <source src="/music.mp3" type="audio/mpeg" />
            </audio>
          )}

          <RestartButton onClick={() => {
            setUsername('');
            setMessages([]);
            setStep(0);
            setMusicStarted(false);
            setShowConfetti(false);
          }} />

          <div className="flex items-center justify-center space-x-6 mt-6">
            <a href="https://wa.me/qr/VKPXEOZVLGRSE1" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com/rcoerfn_?igsh=b3BoNzR0ZDNsMnpm" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
            </a>
          </div>

          <p className="text-xs italic text-gray-500 mt-4 text-center dark:text-gray-400">
            dari sosok manusia yang sederhana 😌<br />– ricoerfan
          </p>
        </>
      )}
    </div>
  );
              }
        
