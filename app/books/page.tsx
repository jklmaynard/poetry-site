import { books } from '../../lib/books';

export default function BooksPage() {
    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book: { id: string; title: string; slug: string }) => (
                    <li key={book.id}>
                        <a href={`/books/${book.slug}`}>{book.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}