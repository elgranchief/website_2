// /app/[lang]/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { notFound } from 'next/navigation';
import { getPublishedWordPressPostBySlug, getPublishedWordPressPosts } from '@/lib/wordpress'; // WordPress API
import { AdaptedPost } from '@/lib/wordpress'; // WordPress types
import { formatDate } from '@/lib/utils';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

// Fetch data for the specific post
async function getPost(slug: string, lang: string): Promise<AdaptedPost | null> {
  try {
    return await getPublishedWordPressPostBySlug(slug, lang);
  } catch (error) {
    console.error(`Error fetching WordPress post "${slug}" in lang "${lang}":`, error);
    return null;
  }
}

// Generate Metadata for the blog post
export async function generateMetadata({ params }: { params: { lang: string, slug: string } }): Promise<Metadata> {
    const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
    const post = await getPost(params.slug, lang);

    if (!post) {
        return { title: 'Post Not Found' }; // Fallback title
    }

    const title = post.title || 'Blog Post'; // Use post.title directly
    const description = post.excerpt || 'Read this blog post from David Josue Photography.'; // Use post.excerpt directly
    const imageUrl = (typeof post.featuredImage === 'object' && post.featuredImage?.url)
                     ? post.featuredImage.url
                     : null; // Add a default fallback image URL if desired

    return {
        title: `${title} | David Josue Blog`,
        description: description.substring(0, 160),
        openGraph: {
            title: `${title} | David Josue Blog`,
            description: description.substring(0, 160),
            type: 'article',
            publishedTime: post.publishedDate, // Use only publishedDate
            modifiedTime: post.publishedDate, // Use publishedDate as fallback for modifiedTime
            // authors: [post.author?.name || 'David Josue'], // Add author if available
            images: imageUrl ? [{ url: imageUrl }] : [],
        },
        twitter: {
             card: 'summary_large_image',
             title: `${title} | David Josue Blog`,
             description: description.substring(0, 160),
             images: imageUrl ? [imageUrl] : [],
        }
        // Add keywords from tags if applicable
    };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
    const params: { lang: string; slug: string }[] = [];
    const languages = ['en-US', 'es-MX'];

    try {
        for (const lang of languages) {
            // Fetch slugs for all published posts in each language
            // Use WordPress API to fetch published posts
            const postsResponse = await getPublishedWordPressPosts(lang, 1000); // Fetch up to 1000 posts
            postsResponse.docs.forEach(post => {
                if (post.slug) {
                     params.push({ lang: lang, slug: post.slug });
                }
            });
        }
    } catch (error) {
        console.error("Failed to generate static params for blog posts:", error);
        // Handle error appropriately, maybe return empty array or throw
    }
    return params;
}


export default async function BlogPostPage({ params }: { params: { lang: string, slug: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const post = await getPost(params.slug, lang);

  if (!post) {
    notFound(); // Trigger 404 page if post not found
  }

  const featuredImageUrl = (typeof post.featuredImage === 'object' && post.featuredImage?.url)
                           ? post.featuredImage.url : null;
  const featuredImageAlt = (typeof post.featuredImage === 'object' && post.featuredImage?.alt)
                           ? post.featuredImage.alt : (post.title || 'Blog post image');


  return (
    <ScrollReveal>
    <article className="container mx-auto max-w-screen-md px-4 py-12 md:py-20">
        {/* Optional: Breadcrumbs */}
        {/* <div className="mb-4 text-sm text-gray-500">
            <Link href={`/${lang}/blog`} className="hover:underline">Blog</Link> / <span>{post.title}</span>
        </div> */}

        {/* Featured Image */}
        {featuredImageUrl && (
            <div className="mb-8 aspect-video relative overflow-hidden rounded-lg shadow-md">
                <Image
                    src={featuredImageUrl}
                    alt={featuredImageAlt || ''}
                    fill // Use fill with relative parent for aspect ratio
                    style={{ objectFit: 'cover' }} // Equivalent to object-cover
                    priority // Prioritize loading image for blog post
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px" // Example sizes
                />
            </div>
        )}

         {/* Post Header */}
         <header className="mb-8 text-center">
            {/* TODO: Add Categories/Tags */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-3 leading-tight">
                {post.title}
            </h1>
            <p className="text-sm text-gray-500">
                {lang === 'es-MX' ? 'Publicado el' : 'Published on'} {formatDate(post.publishedDate, lang)} // Use only publishedDate
                {/* TODO: Add Author Name */}
            </p>
         </header>

        {/* Post Content */}
         <div className="border-t pt-8 prose prose-sm sm:prose lg:prose-lg mx-auto">
            {/* WordPress content is already HTML, so we can render it directly with dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
         </div>

        {/* Optional: Author Bio, Social Sharing, Related Posts */}
         <footer className="mt-12 border-t pt-8 text-center">
             <Link href={`/${lang}/blog`} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                ← {lang === 'es-MX' ? 'Volver al Blog' : 'Back to Blog'}
             </Link>
         </footer>
    </article>
    </ScrollReveal>
  );
}
