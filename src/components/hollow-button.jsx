export default function HollowButton(props) {
  return (
    <button
      className="bg-transparent text-white-700 px-6 py-3 m-2 rounded-md border border-white-700 cursor-pointer hover:border-blue-300 hover:text-blue-300"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
