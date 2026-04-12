import Link from "next/link";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        <body className="min-h-full flex flex-col">
            <div className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold"><Link href="/">My App</Link></h1>
            </div>
            {children}
        </body>
    );
}

export default RootLayout;