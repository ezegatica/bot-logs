import React from 'react';
import { LogsRequest } from '../app/types';
import LogTable from './LogTable';

export default function TableWrapper({ logs }: { logs: LogsRequest }) {
  return (
    <div className="mt-8 flow-root">
      <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle">
          <LogTable logs={logs} />
        </div>
      </div>
    </div>
  );
}
