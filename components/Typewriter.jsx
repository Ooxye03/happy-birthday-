import { useEffect, useState } from 'react';

export default function Typewriter({ text, onDone }) {
  const [displayed, setDisplayed] = useState('');
  const speed = 25; // ms per karakter

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(prev => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="my-2 text-[17px] leading-7 fade-in dark:text-white text-zinc-800 whitespace-pre-line">
      {displayed}
    </p>
  );
}
