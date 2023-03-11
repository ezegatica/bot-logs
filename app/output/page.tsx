import LogTable from '../../components/LogTable';
import { LogsRequest } from '../types';

export default async function page() {
  const logs: LogsRequest = await fetch(
    `${process.env.API_URL}/output?page=1`
  ).then(res => res.json());

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Gati-Bot {'"output"'} logs
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the commands users executed, and some extra info, like
            the user, timestamp, server and interaction.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <LogTable logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
}
