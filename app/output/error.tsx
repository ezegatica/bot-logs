'use client';

import Link from 'next/link';
import ErrorPage from "@components/Error";

function OutputErrorPage({ error }: { error: { message: string } }) {
  return <ErrorPage error={error} />;
}

export default OutputErrorPage;
