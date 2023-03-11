import classes from '@styles/root.module.css';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href={'/errors'}>
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Errors</h2>
          <p className="text-gray-500 mb-4">See the bot errors lines</p>
        </div>
      </Link>
      <Link href={'/output'}>
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md ml-4">
          <h2 className="text-lg font-medium mb-4">Output</h2>
          <p className="text-gray-500 mb-4">See the bot output lines</p>
        </div>
      </Link>
    </div>
  );
}
