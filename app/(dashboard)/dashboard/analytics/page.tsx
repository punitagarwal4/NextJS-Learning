const Analytics: React.FC = () => {
    console.log("what type of component is this?");
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">Analytics</h1>
                <p className="text-lg text-gray-600">This is the analytics page.</p>
            </div>
        </main>
    );
}

export default Analytics;