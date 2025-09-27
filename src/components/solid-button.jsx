export default function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-6 py-3 m-2 rounded-md transition-transform transform hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
}
