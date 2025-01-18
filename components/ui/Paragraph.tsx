export default function P2({ Lib }: { Lib: string }) {
  return (
    <p className="text-sm text-gray-700 dark:text-gray-300">
      Component by
      <span className="font-semibold"> {Lib}</span>
    </p>
  );
}
