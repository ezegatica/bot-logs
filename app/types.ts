export type LogsRequest = {
    data: {
      message: string;
      timestamp: Date;
    }[];
    page: number;
    totalPages: number;
    totalLogs: number;
  }