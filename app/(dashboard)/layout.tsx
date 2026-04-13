import Link from "next/link";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold"><Link href="/dashboard">Dashboard</Link></h1>
                    <Link href="/" className="text-white-500">Back to Home</Link>
                </div>
            </div>
            {children}
        </>
    );
}

export default RootLayout;