// /app/[lang]/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostsByLang } from '@/data/blog-posts'; // Use static blog data
import { BlogPost } from '@/data/blog-posts'; // Use static blog types
import { formatDate } from '@/lib/utils';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component
// Import pagination component if you build one

export const metadata: Metadata = {
  title: 'Blog | David Josue Photography',
  description: 'Explore wedding photography tips, destination guides, boudoir inspiration, and recent work from David Josue.',
};

// Revalidate blog index periodically (e.g., every hour)
export const revalidate = 3600; // Revalidate every hour

export default async function BlogIndexPage({ params, searchParams }: {
   params: { lang: string };
   searchParams?: { [key: string]: string | string[] | undefined };
 }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const page = typeof searchParams?.page === 'string' ? Number(searchParams.page) : 1;
   const limit = 9; // Number of posts per page

   // Get blog posts using static data
  const postsData = getBlogPostsByLang(lang, limit, page);
  const { docs: posts, totalPages, hasNextPage, hasPrevPage } = postsData;

  return (
    <ScrollReveal>
    <div className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
          {lang === 'es-MX' ? 'Desde el Blog' : 'From the Blog'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {lang === 'es-MX' ? 'Inspiración, consejos y las últimas historias de bodas, boudoir y destinos.' : 'Inspiration, tips, and the latest stories from weddings, boudoir, and destinations.'}
        </p>
      </div>

      {posts && posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: BlogPost) => { // Use BlogPost type
              const postSlug = post.slug;

              return (
                <Link key={post.id} href={`/${lang}/blog/${postSlug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url ? (
                      <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt || post.title || 'Blog post image'}
                        width={500}
                        height={281} // 16:9 aspect ratio
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                         {/* Placeholder Icon/Text */}
                         <span>Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    {/* TODO: Add Category/Tags */}
                    <h2 className="text-lg font-semibold mb-1 leading-tight group-hover:text-gray-700">{post.title}</h2>
                    <p className="text-xs text-gray-500 mb-2" suppressHydrationWarning>{formatDate(post.publishedDate, lang)}</p>
                    {post.excerpt && (
                       <p className="text-sm text-gray-600 line-clamp-2" suppressHydrationWarning>{post.excerpt}</p>
                    )}
                     <span className="mt-3 inline-block text-xs font-medium text-gray-700 group-hover:text-gray-900">
                       {lang === 'es-MX' ? 'Leer Más →' : 'Read More →'}
                     </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
             <div className="flex justify-center items-center space-x-4 mt-12">
                {hasPrevPage && (
                   <Link href={`/${lang}/blog?page=${page - 1}`} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      ← {lang === 'es-MX' ? 'Anterior' : 'Previous'}
                   </Link>
                )}
                <span className="text-sm text-gray-500">
                   {lang === 'es-MX' ? `Página ${page} de ${totalPages}` : `Page ${page} of ${totalPages}`}
                </span>
                {hasNextPage && (
                   <Link href={`/${lang}/blog?page=${page + 1}`} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      {lang === 'es-MX' ? 'Siguiente' : 'Next'} →
                   </Link>
                )}
             </div>
          )}

        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500">
            {lang === 'es-MX' ? 'No se encontraron publicaciones en el blog por el momento.' : 'No blog posts found at this time.'}
          </p>
        </div>
      )}
    </div>
    </ScrollReveal>
  );
}
