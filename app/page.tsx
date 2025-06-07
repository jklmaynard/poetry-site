import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">James Maynard Poetry</h1>
        <div className="mb-6">
          <Image
            src="/author_photo.jpg"
            alt="James Maynard Poetry"
            width={300}
            height={300}
            className="rounded-lg"
          />

        </div>
        <div className="text-center mb-6">
          <h2 className="">
            <Link href="/books/the-fourteen-thieves" className="text-blue-600 hover:underline">
              The Fourteen Thieves & Body Cams available June 16th
            </Link>
          </h2>
          <p className="text-lg mt-4">A crown of sonnets and other poems.</p>
        </div>
      </div>
    </div>
  );
}
