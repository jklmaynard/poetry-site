export interface Book {
    id: string;
    slug: string;
    title: string;
    price: number;
    description: string;
    coverImage?: string; // Optional property for cover image URL
    author?: string; // Optional property for author name
    publicationDate?: string; // Optional property for publication date
    stripeProductId: string;
}