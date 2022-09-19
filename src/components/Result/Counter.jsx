export default function Counter({ data, fn }) {
  const { bodyFat, height, weight } = data;

  return (
    <div className="text-xl font-black text-blue-gray mt-2">
      {!!bodyFat && height && weight && fn ? fn(data) : "-"}
    </div>
  );
}
