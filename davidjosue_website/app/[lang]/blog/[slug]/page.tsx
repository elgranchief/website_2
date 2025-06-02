// /app/[lang]/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/data/blog-posts';
import { blogPosts } from '@/data/blog-posts'; // Import blog post data for static params
import { formatDate } from '@/lib/utils';
import { ScrollReveal } from '@/components/ScrollReveal';

// Function to generate static paths for blog posts
export async function generateStaticParams() {
  const paths = blogPosts.flatMap(post => [
    { lang: 'en-US', slug: post.slug },
    { lang: 'es-MX', slug: post.slugEs },
  ]);
  // Filter out any potential undefined slugs if slugEs is missing
  return paths.filter(p => p.slug); 
}
// Dynamic metadata generation
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string; slug: string }
}): Promise<Metadata> {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const post = getBlogPostBySlug(params.slug, lang);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | David Josue Photography`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.featuredImage ? [
        {
          url: post.featuredImage.url,
          alt: post.featuredImage.alt,
        }
      ] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { lang: string; slug: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const post = getBlogPostBySlug(params.slug, lang);

  if (!post) {
    notFound();
  }

  return (
    <ScrollReveal>
      <article className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
        {/* Back to Blog Link */}
        <Link 
          href={`/${lang}/blog`}
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-6"
        >
          ← {lang === 'es-MX' ? 'Volver al Blog' : 'Back to Blog'}
        </Link>
        
        {/* Post Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <time dateTime={post.date}>
              {formatDate(post.date, lang)}
            </time>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video w-full overflow-hidden bg-gray-100 mb-8 rounded-lg">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}
        </header>
        
        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              ← {lang === 'es-MX' ? 'Volver al Blog' : 'Back to Blog'}
            </Link>
            
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-brand-text-primary text-white hover:bg-brand-text-primary/90 transition-colors"
            >
              {lang === 'es-MX' ? 'Contáctame' : 'Contact Me'}
            </Link>
          </div>
        </footer>
      </article>
    </ScrollReveal>
  );
}
