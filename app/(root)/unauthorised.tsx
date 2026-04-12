const Unauthorised: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
        <p className="text-lg text-gray-600">You are not authorised to view this page.</p>
      </div>
    </main>
  );
}

export default Unauthorised;