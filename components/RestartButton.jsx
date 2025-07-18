export default function RestartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
    >
      🔁 Ulangi dari awal
    </button>
  );
}
