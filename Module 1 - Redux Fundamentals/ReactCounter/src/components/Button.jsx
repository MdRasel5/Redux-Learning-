/* eslint-disable react/prop-types */
export default function Button({ children, handeler }) {
  return (
    <button
      className="bg-purple-500 text-white py-2 px-5 rounded mt-2"
      onClick={handeler}
    >
      {children}
    </button>
  );
}
