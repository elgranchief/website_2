import { NextRequest, NextResponse } from 'next/server';

// Mock WordPress posts data
const mockPosts = [
  {
    id: 1,
    slug: 'destination-wedding-tips',
    title: {
      rendered: 'Top 10 Destination Wedding Tips'
    },
    excerpt: {
      rendered: '<p>Planning a destination wedding can be challenging. Here are my top 10 tips to make your destination wedding planning smoother and more enjoyable for everyone involved.</p>',
      protected: false
    },
    content: {
      rendered: `<p>Planning a destination wedding can be challenging. Here are my top 10 tips to make your destination wedding planning smoother and more enjoyable for everyone involved.</p>
      <h2>1. Choose Your Location Carefully</h2>
      <p>Consider the accessibility, local laws, and weather patterns when choosing your destination. Ensure it's a place that feels special to both of you.</p>
      <h2>2. Visit Before You Book</h2>
      <p>If possible, visit your venue before making any final decisions. Photos can be deceiving, and you'll want to ensure the location matches your vision.</p>
      <h2>3. Hire a Local Planner</h2>
      <p>A local wedding planner with experience in your destination can be invaluable, especially when dealing with language barriers and local vendors.</p>
      <h2>4. Send Save-the-Dates Early</h2>
      <p>Give your guests plenty of time to save, plan, and book travel. Send save-the-dates at least 8-12 months in advance.</p>
      <h2>5. Create a Wedding Website</h2>
      <p>Include information about travel, accommodations, local attractions, and what to expect during their stay.</p>
      <h2>6. Be Mindful of Your Budget</h2>
      <p>Destination weddings can sometimes be more budget-friendly, but currency exchange rates and travel costs can add up quickly.</p>
      <h2>7. Consider Group Accommodations</h2>
      <p>Look into booking a block of rooms or a villa that can accommodate your guests, often at a discounted rate.</p>
      <h2>8. Plan Multiple Events</h2>
      <p>Since guests are traveling so far, plan a welcome dinner, post-wedding brunch, or other activities to make their trip worthwhile.</p>
      <h2>9. Respect Local Traditions</h2>
      <p>Incorporating local traditions can honor your destination and create a unique wedding experience.</p>
      <h2>10. Hire a Photographer Familiar with the Location</h2>
      <p>A photographer who knows the best spots and lighting conditions at your destination will capture the most stunning photos of your special day.</p>
      <p>Remember, the key to a successful destination wedding is thorough planning and clear communication with your guests. Happy planning!</p>`,
      protected: false
    },
    date: '2025-03-15T10:00:00',
    modified: '2025-03-20T14:30:00',
    featured_media: 101,
    _embedded: {
      'wp:featuredmedia': [
        {
          id: 101,
          source_url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
          alt_text: 'Beach destination wedding setup with chairs and floral arrangements',
          media_details: {
            width: 1200,
            height: 800
          }
        }
      ],
      'wp:term': [
        [
          { id: 5, name: 'Weddings', slug: 'weddings' },
          { id: 6, name: 'Destinations', slug: 'destinations' }
        ],
        [
          { id: 10, name: 'Planning', slug: 'planning' },
          { id: 11, name: 'Travel', slug: 'travel' }
        ]
      ],
      author: [
        {
          id: 1,
          name: 'David Josue',
          avatar_urls: {
            '96': 'https://secure.gravatar.com/avatar/default?s=96&d=mm&r=g'
          }
        }
      ]
    },
    categories: [5, 6],
    tags: [10, 11],
    status: 'publish',
    link: '/blog/destination-wedding-tips'
  },
  {
    id: 2,
    slug: 'boudoir-photography-guide',
    title: {
      rendered: 'A Complete Guide to Boudoir Photography'
    },
    excerpt: {
      rendered: '<p>Boudoir photography is a beautiful way to celebrate yourself. This comprehensive guide covers everything you need to know about preparing for and enjoying your boudoir session.</p>',
      protected: false
    },
    content: {
      rendered: `<p>Boudoir photography is a beautiful way to celebrate yourself. This comprehensive guide covers everything you need to know about preparing for and enjoying your boudoir session.</p>
      <h2>What is Boudoir Photography?</h2>
      <p>Boudoir photography is an intimate, romantic, and sometimes sensual style of portraiture that celebrates the beauty and strength of the human form. It's about empowerment, self-love, and creating artistic images that make you feel amazing.</p>
      <h2>Preparing for Your Session</h2>
      <h3>Choose the Right Photographer</h3>
      <p>The most important factor is finding a photographer whose style you love and with whom you feel completely comfortable. Look through portfolios, read testimonials, and schedule consultations before booking.</p>
      <h3>Wardrobe Selection</h3>
      <p>Select outfits that make you feel confident. This might include lingerie, a partner's shirt, a beautiful robe, or even an elegant dress. Bring options and discuss with your photographer what will work best for the style you want.</p>
      <h3>Beauty Preparations</h3>
      <p>Consider professional hair and makeup services for your session. Many boudoir photographers offer this as part of their packages. If you're planning a manicure or any other beauty treatments, schedule them a day or two before your session.</p>
      <h2>During the Session</h2>
      <p>Trust your photographer to guide you through poses that will flatter your unique body type. Remember that professional photographers know how to use lighting, angles, and posing to create the most flattering images.</p>
      <h2>After Your Session</h2>
      <p>Most photographers will schedule a reveal session where you'll see your images for the first time and select your favorites for retouching and printing. Consider creating a beautiful album or art piece for your home.</p>
      <h2>Final Thoughts</h2>
      <p>Boudoir photography is about celebrating yourself exactly as you are. It's normal to feel nervous, but the experience should ultimately be empowering and confidence-boosting.</p>
      <p>Remember, the perfect time for boudoir photography is now - not when you lose weight, not when you feel more confident - but right now, as you are today.</p>`,
      protected: false
    },
    date: '2025-02-28T15:30:00',
    modified: '2025-03-10T09:45:00',
    featured_media: 102,
    _embedded: {
      'wp:featuredmedia': [
        {
          id: 102,
          source_url: 'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7',
          alt_text: 'Elegant boudoir photography setup with soft lighting',
          media_details: {
            width: 1200,
            height: 800
          }
        }
      ],
      'wp:term': [
        [
          { id: 7, name: 'Boudoir', slug: 'boudoir' },
          { id: 8, name: 'Photography Tips', slug: 'photography-tips' }
        ],
        [
          { id: 12, name: 'Self Care', slug: 'self-care' },
          { id: 13, name: 'Empowerment', slug: 'empowerment' }
        ]
      ],
      author: [
        {
          id: 1,
          name: 'David Josue',
          avatar_urls: {
            '96': 'https://secure.gravatar.com/avatar/default?s=96&d=mm&r=g'
          }
        }
      ]
    },
    categories: [7, 8],
    tags: [12, 13],
    status: 'publish',
    link: '/blog/boudoir-photography-guide'
  },
  {
    id: 3,
    slug: 'wedding-photography-trends-2025',
    title: {
      rendered: 'Wedding Photography Trends for 2025'
    },
    excerpt: {
      rendered: '<p>As we move into 2025, wedding photography is evolving with new creative approaches and technologies. Discover the latest trends that will define wedding photography this year.</p>',
      protected: false
    },
    content: {
      rendered: `<p>As we move into 2025, wedding photography is evolving with new creative approaches and technologies. Discover the latest trends that will define wedding photography this year.</p>
      <h2>1. Cinematic Storytelling</h2>
      <p>We're seeing a move away from static posed shots toward more cinematic, story-driven photography that captures the emotions and small moments throughout the day. This style focuses on creating a narrative through images, highlighting genuine interactions and emotions.</p>
      <h2>2. Authentic Documentary Approach</h2>
      <p>Couples are increasingly requesting a more journalistic approach to their wedding photography, preferring candid, unposed moments over traditional formal portraits. While family formals still have their place, the focus is shifting to capturing the day as it naturally unfolds.</p>
      <h2>3. Dramatic Aerial Photography</h2>
      <p>Drone photography continues to evolve, with photographers using drones to capture stunning aerial views of wedding venues and to create dramatic portraits of couples in breathtaking landscapes. New regulations and improved technology have made this more accessible.</p>
      <h2>4. Nostalgic Film Photography</h2>
      <p>There's a significant resurgence in film photography, with many couples drawn to the timeless, grainy quality and rich colors that digital can't quite replicate. Many photographers are now offering hybrid packages that include both digital and film.</p>
      <h2>5. Destination Pre-Wedding Shoots</h2>
      <p>Couples are increasingly traveling to stunning locations for their engagement or pre-wedding shoots, using these sessions to create artistic portraits that might not be possible on the wedding day itself.</p>
      <h2>6. Minimalist, Fine Art Approach</h2>
      <p>Clean, simple compositions with an emphasis on light, texture, and emotion are gaining popularity. This fine art approach creates timeless images with an editorial feel that will never go out of style.</p>
      <h2>7. Advanced Night Photography</h2>
      <p>Improvements in camera sensor technology have made creative night photography more accessible. Starry skies, light painting, and dramatic nighttime portraits are becoming a must-have for many couples.</p>
      <h2>8. Inclusive Representation</h2>
      <p>There's an increased focus on ensuring wedding photography authentically represents diverse couples, family structures, and cultural traditions. Photographers are educating themselves on various cultural practices to better serve their clients.</p>
      <h2>9. AI-Enhanced Editing</h2>
      <p>While maintaining authenticity, photographers are selectively using AI tools to enhance their workflow, allowing them to spend more time shooting and less time editing while still delivering personalized results.</p>
      <h2>10. Immersive Wedding Day Films</h2>
      <p>Beyond still photography, there's a trend toward creating immersive short films that document the wedding day, complete with voiceovers, music, and cinematic techniques.</p>
      <p>As you plan your wedding photography, consider which of these trends resonate with your vision for your special day. The best approach is always one that authentically reflects you as a couple!</p>`,
      protected: false
    },
    date: '2025-01-10T12:00:00',
    modified: '2025-01-15T16:20:00',
    featured_media: 103,
    _embedded: {
      'wp:featuredmedia': [
        {
          id: 103,
          source_url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
          alt_text: 'Wedding couple in a creative silhouette against sunset',
          media_details: {
            width: 1200,
            height: 800
          }
        }
      ],
      'wp:term': [
        [
          { id: 5, name: 'Weddings', slug: 'weddings' },
          { id: 9, name: 'Trends', slug: 'trends' }
        ],
        [
          { id: 14, name: 'Photography', slug: 'photography' },
          { id: 15, name: '2025', slug: '2025' }
        ]
      ],
      author: [
        {
          id: 1,
          name: 'David Josue',
          avatar_urls: {
            '96': 'https://secure.gravatar.com/avatar/default?s=96&d=mm&r=g'
          }
        }
      ]
    },
    categories: [5, 9],
    tags: [14, 15],
    status: 'publish',
    link: '/blog/wedding-photography-trends-2025'
  }
];

// Mock Spanish (es-MX) posts
const mockSpanishPosts = [
  {
    id: 1,
    slug: 'consejos-bodas-destino',
    title: {
      rendered: 'Los 10 Mejores Consejos para Bodas de Destino'
    },
    excerpt: {
      rendered: '<p>Planificar una boda en un destino puede ser un desafío. Aquí están mis 10 mejores consejos para hacer que la planificación de tu boda en un destino sea más sencilla y agradable para todos los involucrados.</p>',
      protected: false
    },
    content: {
      rendered: `<p>Planificar una boda en un destino puede ser un desafío. Aquí están mis 10 mejores consejos para hacer que la planificación de tu boda en un destino sea más sencilla y agradable para todos los involucrados.</p>
      <h2>1. Elige tu Ubicación Cuidadosamente</h2>
      <p>Considera la accesibilidad, las leyes locales y los patrones climáticos al elegir tu destino. Asegúrate de que sea un lugar que se sienta especial para ambos.</p>
      <h2>2. Visita Antes de Reservar</h2>
      <p>Si es posible, visita tu lugar antes de tomar cualquier decisión final. Las fotos pueden ser engañosas, y querrás asegurarte de que la ubicación coincida con tu visión.</p>
      <h2>3. Contrata un Planificador Local</h2>
      <p>Un planificador de bodas local con experiencia en tu destino puede ser invaluable, especialmente cuando se trata de barreras lingüísticas y proveedores locales.</p>
      <h2>4. Envía Save-the-Dates Temprano</h2>
      <p>Da a tus invitados tiempo suficiente para ahorrar, planificar y reservar viajes. Envía save-the-dates al menos 8-12 meses por adelantado.</p>
      <h2>5. Crea un Sitio Web de Boda</h2>
      <p>Incluye información sobre viajes, alojamiento, atracciones locales y qué esperar durante su estadía.</p>
      <h2>6. Ten en Cuenta tu Presupuesto</h2>
      <p>Las bodas de destino a veces pueden ser más económicas, pero las tasas de cambio de divisas y los costos de viaje pueden acumularse rápidamente.</p>
      <h2>7. Considera Alojamiento en Grupo</h2>
      <p>Considera reservar un bloque de habitaciones o una villa que pueda acomodar a tus invitados, a menudo a una tarifa con descuento.</p>
      <h2>8. Planifica Múltiples Eventos</h2>
      <p>Ya que los invitados están viajando tan lejos, planifica una cena de bienvenida, un brunch post-boda u otras actividades para que su viaje valga la pena.</p>
      <h2>9. Respeta las Tradiciones Locales</h2>
      <p>Incorporar tradiciones locales puede honrar tu destino y crear una experiencia de boda única.</p>
      <h2>10. Contrata un Fotógrafo Familiarizado con la Ubicación</h2>
      <p>Un fotógrafo que conoce los mejores lugares y condiciones de iluminación en tu destino capturará las fotos más impresionantes de tu día especial.</p>
      <p>Recuerda, la clave para una boda de destino exitosa es una planificación minuciosa y una comunicación clara con tus invitados. ¡Feliz planificación!</p>`,
      protected: false
    },
    date: '2025-03-15T10:00:00',
    modified: '2025-03-20T14:30:00',
    featured_media: 101,
    _embedded: {
      'wp:featuredmedia': [
        {
          id: 101,
          source_url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
          alt_text: 'Preparación de boda en la playa con sillas y arreglos florales',
          media_details: {
            width: 1200,
            height: 800
          }
        }
      ],
      'wp:term': [
        [
          { id: 5, name: 'Bodas', slug: 'bodas' },
          { id: 6, name: 'Destinos', slug: 'destinos' }
        ],
        [
          { id: 10, name: 'Planificación', slug: 'planificacion' },
          { id: 11, name: 'Viajes', slug: 'viajes' }
        ]
      ],
      author: [
        {
          id: 1,
          name: 'David Josue',
          avatar_urls: {
            '96': 'https://secure.gravatar.com/avatar/default?s=96&d=mm&r=g'
          }
        }
      ]
    },
    categories: [5, 6],
    tags: [10, 11],
    status: 'publish',
    link: '/blog/consejos-bodas-destino'
  }
];

export async function GET(request: NextRequest) {
  // Parse the request URL
  const { searchParams } = new URL(request.url);
  
  // Get query parameters
  const page = parseInt(searchParams.get('page') || '1', 10);
  const perPage = parseInt(searchParams.get('per_page') || '10', 10);
  const lang = searchParams.get('lang') || '';
  const slug = searchParams.get('slug') || '';
  const embed = searchParams.get('_embed') || '';
  
  // Determine which posts to use based on language
  const posts = lang === 'es' ? mockSpanishPosts : mockPosts;
  
  // Filter by slug if provided
  const filteredPosts = slug ? posts.filter(post => post.slug === slug) : posts;
  
  // Calculate pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  // Create headers for WordPress-style pagination
  const headers = new Headers();
  headers.set('X-WP-Total', filteredPosts.length.toString());
  headers.set('X-WP-TotalPages', Math.ceil(filteredPosts.length / perPage).toString());
  
  // Return mock response
  return NextResponse.json(paginatedPosts, { 
    headers,
    status: 200 
  });
}
