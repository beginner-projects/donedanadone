import BuggyButton from '../../ui/buggy-button';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Error Handling</h1>

      <p>Ooooops !</p>

      <div className="flex gap-2">
        <BuggyButton />
      </div>
    </div>
  );
}
