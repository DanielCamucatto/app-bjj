'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">500</h1>
        <p>Algo deu errado!</p>
        <button
          className="mt-4 btn btn-primary"
          onClick={() => reset()}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}