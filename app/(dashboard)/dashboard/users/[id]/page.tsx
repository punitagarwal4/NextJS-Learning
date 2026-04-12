const UserDetails: React.FC<{params: Promise<{id: string}>}> = async ({params}:{params: Promise<{id: string}>}) => {
    const { id } = await params;
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">User Details</h1>
                <p className="text-lg text-gray-600">This is the user details page.</p>
                <p className="text-lg text-gray-600 mt-4">User ID: {id}</p>
            </div>
        </main>
    );
}

export default UserDetails;