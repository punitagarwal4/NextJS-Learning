import React from "react";
import Hello from "@/components/hello";
import Link from "next/link";

const Home: React.FC = () => {
  console.log("what type of component is this?");
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App!</h1>
        <p className="text-lg text-gray-600">This is the home page.</p>
        <Hello />
        <Link href="/about" className="mt-4 text-blue-500 hover:underline">
          Learn more about us
        </Link>
        <Link href="/books" className="mt-4 text-purple-500 hover:underline">
          View our books
        </Link>
        <Link href="/dashboard" className="mt-4 text-green-500 hover:underline">
          Go to Dashboard
        </Link>
        <Link href="/error" className="mt-4 text-red-500 hover:underline">
          Trigger an error
        </Link>
        <Link href="/forbidden" className="mt-4 text-yellow-500 hover:underline">
          View forbidden page
        </Link>
        <Link href="/unauthorized" className="mt-4 text-orange-500 hover:underline">
          View unauthorized page
        </Link>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Home Page",
  description: "Welcome to the home page of our Next.js app.",
};

export default Home;