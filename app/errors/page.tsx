import TableWrapper from '../../components/TableWrapper';
import { LogsRequest } from '../types';

export default async function page() {
  const logs: LogsRequest = await fetch(
    `${process.env.API_URL}/errors?page=1`,
    {
      cache: 'no-store'
    }
  ).then(res => res.json());

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Gati-Bot {'"errors"'} logs
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the errors the bot outputted in the console.
          </p>
        </div>
      </div>
      <TableWrapper logs={logs} />
    </div>
  );
}
