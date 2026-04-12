import Link from "next/link";

const About: React.FC = () => {
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-600">This is the about page.</p>
                <Link href="/" className="text-blue-500 mt-4">Go back to Home</Link>
            </div>
        </main>
    );
}

export default About;