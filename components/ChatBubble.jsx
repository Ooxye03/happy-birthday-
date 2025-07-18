export default function ChatBubble({ text, from }) {
  const isBot = from === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      <div className={`px-4 py-2 rounded-lg max-w-xs text-sm 
        ${isBot ? 'bg-purple-200 dark:bg-purple-700 text-gray-800 dark:text-white' : 'bg-green-100 dark:bg-green-700 text-gray-800 dark:text-white'}`}>
        {text}
      </div>
    </div>
  );
}
