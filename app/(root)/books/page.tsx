const Books = async () => {
    const response = await fetch('http://localhost:3000/api/books');
    if (!response.ok) { throw new Error('Failed to fetch books'); }

    const books = await response.json();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Books</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {books.map((book: any) => (
                    <div key={book.id} className="border rounded p-2">
                        <img src={`https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&fontSize=16&text=${book.title}`} alt={book.title} className="w-full h-auto mb-2" />
                        <p className="text-sm">{book.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;