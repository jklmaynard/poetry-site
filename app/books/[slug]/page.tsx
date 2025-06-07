
import { books } from '../../../lib/books';
import BookDetail from '@/components/BookDetail';

export default async function Page({ params }:{ params: { slug: string } }) {
    const { slug } = await params;
    const book = books.find((book) => book.slug === slug);

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <BookDetail book={book} />
        </div>
    );
}