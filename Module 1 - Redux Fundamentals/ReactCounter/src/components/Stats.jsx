// eslint-disable-next-line react/prop-types
export default function Stats({ count }) {
  return (
    <div className="bg-white shadow-lg border h-[150px] w-[400px] mb-10 flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold">Total Count: {count}</p>
    </div>
  );
}
