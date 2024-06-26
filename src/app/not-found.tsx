// src/app/not-found.tsx
import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-gray-700">Page Not Found</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-accent-1 text-white hover:hover-accent-1 transition duration-300">
          
        Go back home
      </Link>
    </div>
  );
};

export default Custom404;
