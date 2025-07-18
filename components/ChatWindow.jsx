import ChatBubble from './ChatBubble';

export default function ChatWindow({ messages }) {
  return (
    <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-lg shadow-md p-4 h-[480px] overflow-y-auto border border-gray-200 dark:border-zinc-700 mt-4">
      {messages.map((msg, i) => (
        <ChatBubble key={i} text={msg.text} from={msg.from} />
      ))}
    </div>
  );
}
