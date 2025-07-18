export default function RestartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-all shadow-sm"
    >
      🔁 Ulangi dari awal
    </button>
  );
}
