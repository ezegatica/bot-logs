'use client';

function ErrorsErrorPage({error}: {error: {message: string}}) {
  return <p>{error.message}</p>
}

export default ErrorsErrorPage;