import ChatBubble from './ChatBubble';

export default function ChatWindow({ messages }) {
  return (
    <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-lg shadow-lg p-4 h-[460px] overflow-y-auto border border-gray-300 dark:border-zinc-700 mt-4 scroll-smooth">
      {messages.map((msg, i) => (
        <ChatBubble key={i} text={msg.text} from={msg.from} />
      ))}
    </div>
  );
}

