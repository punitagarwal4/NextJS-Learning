import { NextRequest } from "next/server";
import books from "@/app/api/db";

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    const {id} = await context.params;
    const updatedBook = await request.json();
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex === -1) {
        return new Response(JSON.stringify({ message: "Book not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    books[bookIndex] = { id: parseInt(id), ...updatedBook };
    return Response.json(books);
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    const {id} = await context.params;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex === -1) {
        return new Response(JSON.stringify({ message: "Book not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    books.splice(bookIndex, 1);
    return Response.json(books);
}