// davidjosue_website/app/api/[...payload]/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple API handler for collections
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const { pathname, searchParams } = url;
  
  // Extract collection from path
  const paths = pathname.split('/');
  const collection = paths[paths.length - 1];
  
  // Extract pagination params if present
  const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string, 10) : 1;
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string, 10) : 10;
  
  // Log the request for debugging
  console.log(`API Request: ${pathname} with params:`, Object.fromEntries(searchParams.entries()));
  
  try {
    // Return mock data based on collection type
    switch (collection) {
      case 'users':
        return NextResponse.json({
          docs: [
            { id: '1', email: 'admin@example.com', name: 'Admin User' }
          ],
          totalDocs: 1,
          limit: 10,
          page: 1,
          totalPages: 1
        });
        
      case 'posts':
        // Create richer post data
        return NextResponse.json({
          docs: [
            { 
              id: '1', 
              title: 'Welcome to David Josué\'s Blog', 
              slug: 'welcome', 
              status: 'published',
              publishedDate: new Date().toISOString(),
              content: { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'This is a sample blog post.' }] }] },
              featuredImage: {
                id: 'img1',
                alt: 'Blog post featured image',
                url: '/placeholder-hero.jpg'
              },
              excerpt: 'This is a sample blog post with some exciting photography content.'
            },
            {
              id: '2',
              title: 'Photography Tips for Wedding Day',
              slug: 'photography-tips-wedding-day',
              status: 'published',
              publishedDate: new Date(Date.now() - 86400000).toISOString(), // Yesterday
              content: { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Learn about the best photography tips for your wedding day.' }] }] },
              featuredImage: {
                id: 'img2',
                alt: 'Wedding photography tips',
                url: '/placeholder-service1.jpg'
              },
              excerpt: 'Essential photography tips to make your wedding day photos perfect.'
            }
          ],
          totalDocs: 2,
          limit: limit,
          page: page,
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false,
          nextPage: null,
          prevPage: null
        });
        
      case 'galleries':
        return NextResponse.json({
          docs: [
            { 
              id: '1', 
              title: 'Wedding Photography', 
              slug: 'wedding-photography', 
              status: 'published',
              description: { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Stunning wedding photography from beautiful locations.' }] }] },
              featuredImage: {
                id: 'gallery-img1',
                alt: 'Wedding photography',
                url: '/placeholder-hero.jpg'
              },
              images: [
                {
                  image: {
                    id: 'gallery-img1-1',
                    alt: 'Wedding photo 1',
                    url: '/placeholder-hero.jpg'
                  },
                  caption: 'Beautiful wedding ceremony'
                },
                {
                  image: {
                    id: 'gallery-img1-2',
                    alt: 'Wedding photo 2',
                    url: '/placeholder-service1.jpg'
                  },
                  caption: 'Bride and groom portraits'
                }
              ]
            },
            {
              id: '2',
              title: 'Destination Photography',
              slug: 'destination-photography',
              status: 'published',
              description: { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Photography from beautiful destinations around the world.' }] }] },
              featuredImage: {
                id: 'gallery-img2',
                alt: 'Destination photography',
                url: '/placeholder-service2.jpg'
              },
              images: [
                {
                  image: {
                    id: 'gallery-img2-1',
                    alt: 'Destination photo 1',
                    url: '/placeholder-service2.jpg'
                  },
                  caption: 'Beautiful beach location'
                }
              ]
            }
          ],
          totalDocs: 2,
          limit: limit,
          page: page,
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false,
          nextPage: null,
          prevPage: null
        });
        
      case 'media':
        return NextResponse.json({
          docs: [],
          totalDocs: 0,
          limit: 10,
          page: 1,
          totalPages: 0
        });
        
      default:
        return NextResponse.json({ error: 'Collection not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
