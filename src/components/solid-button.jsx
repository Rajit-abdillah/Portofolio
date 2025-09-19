export default function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`hover:scale-105 cursor-pointer px-6 py-3 m-2 rounded-md ${className}`}
    >
      {text}
    </button>
  );
}
