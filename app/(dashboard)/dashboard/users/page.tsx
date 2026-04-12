import Link from "next/link";

const Users: React.FC = () => {
    console.log("what type of component is this?");
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">Users</h1>
                <p className="text-lg text-gray-600">This is the users page.</p>
                <ul className="mt-4">
                    <li className="mb-2"><Link href="/dashboard/users/1">User 1: John Doe</Link></li>
                    <li className="mb-2"><Link href="/dashboard/users/2">User 2: Jane Smith</Link></li>
                    <li className="mb-2"><Link href="/dashboard/users/3">User 3: Bob Johnson</Link></li>
                </ul>
            </div>
        </main>
    );
}

export default Users;