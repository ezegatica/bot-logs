'use client';

function OutputErrorPage({error}: {error: {message: string}}) {
  return <p>{error.message}</p>
}

export default OutputErrorPage;