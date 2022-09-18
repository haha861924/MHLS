export default function Counter({ data, fn }) {
  return (
    <div className="text-xl font-black text-blue-gray mt-2">
      {fn ? fn(data) : "沒有"}
    </div>
  );
}
