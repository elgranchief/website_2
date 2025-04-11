// Static blog posts data to replace WordPress dependency
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  tags: string[];
  lang: 'en-US' | 'es-MX';
}

// Sample blog posts (you can replace with your actual blog content)
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Destination Wedding Locations in Mexico',
    slug: 'top-destination-wedding-locations-mexico',
    excerpt: 'Explore the most stunning locations for your destination wedding in Mexico, from the beaches of Tulum to the vineyards of Valle de Guadalupe.',
    content: `
      <h2>The Most Beautiful Destinations for Your Wedding in Mexico</h2>
      <p>Mexico offers an incredible variety of settings for destination weddings. From pristine beaches to colonial towns and lush jungles, here are my top recommendations:</p>
      <h3>1. Valle de Guadalupe</h3>
      <p>Mexico's wine country offers a rustic yet elegant backdrop for weddings. With vineyard views, farm-to-table cuisine, and boutique accommodations, it's perfect for couples seeking a sophisticated yet relaxed atmosphere.</p>
      <h3>2. Tulum</h3>
      <p>For boho-chic beach weddings, Tulum offers white sand beaches, turquoise waters, and a laid-back atmosphere. Its combination of natural beauty and trendy venues makes it incredibly popular.</p>
      <h3>3. San Miguel de Allende</h3>
      <p>This colonial jewel offers cobblestone streets, colorful architecture, and a romantic atmosphere. Perfect for couples who want old-world charm and culture.</p>
      <h3>4. Cabo San Lucas</h3>
      <p>Dramatic landscapes where desert meets sea create unforgettable wedding backdrops. Luxury resorts and perfect weather year-round make this a favorite choice.</p>
      <h3>5. Puerto Vallarta</h3>
      <p>With its combination of beaches, mountains, and charming town, Puerto Vallarta offers versatility for wedding styles from intimate ceremonies to grand celebrations.</p>
      <p>Each of these destinations has its own unique character and best seasons. Contact me to discuss which would be the perfect match for your wedding vision.</p>
    `,
    publishedDate: '2025-03-15T08:00:00Z',
    featuredImage: {
      url: '/images/david-josue-valle-de-guadalupe-wedding-destination.jpg',
      alt: 'Valle de Guadalupe vineyard wedding setting'
    },
    tags: ['Destination Wedding', 'Mexico', 'Travel'],
    lang: 'en-US'
  },
  {
    id: '2',
    title: 'How to Prepare for Your Boudoir Photoshoot',
    slug: 'prepare-for-boudoir-photoshoot',
    excerpt: 'Tips and advice to help you feel confident and look your best for your upcoming boudoir session.',
    content: `
      <h2>Preparing for Your Boudoir Session</h2>
      <p>A boudoir photoshoot is a celebration of your unique beauty and power. Here are some tips to help you prepare:</p>
      <h3>Mental Preparation</h3>
      <p>The most important aspect of boudoir photography is your mindset. Approach the session as a gift to yourself, a celebration of your body and spirit. Practice positive self-talk and remember that vulnerability is beautiful.</p>
      <h3>Physical Preparation</h3>
      <ul>
        <li>Stay hydrated in the days leading up to your session</li>
        <li>Avoid excess salt and alcohol which can cause bloating</li>
        <li>Moisturize your skin daily</li>
        <li>Consider a manicure and pedicure</li>
        <li>Get plenty of rest the night before</li>
      </ul>
      <h3>What to Bring</h3>
      <p>Consider bringing 3-5 different outfits that make you feel beautiful. This might include lingerie, a partner's button-up shirt, a simple sheet, or even an elegant dress. Bring accessories that reflect your personality and style.</p>
      <h3>During the Session</h3>
      <p>Trust the process. I'll guide you through poses that flatter your body type and capture your essence. Feel free to bring music that makes you feel confident and powerful.</p>
      <p>Remember, boudoir photography is about celebrating yourself as you are in this moment. The most beautiful images come from confidence and authenticity.</p>
    `,
    publishedDate: '2025-02-20T09:30:00Z',
    featuredImage: {
      url: '/images/david-josue-boudoir-photography-service.jpg',
      alt: 'Artistic boudoir photography example'
    },
    tags: ['Boudoir', 'Photography Tips', 'Self Care'],
    lang: 'en-US'
  },
  {
    id: '3',
    title: 'Wedding Day Timeline: How to Plan for Perfect Photos',
    slug: 'wedding-day-timeline-photo-planning',
    excerpt: 'Create the ideal wedding day schedule that allows time for stunning photos without missing any important moments.',
    content: `
      <h2>Planning Your Wedding Day Timeline for Beautiful Photography</h2>
      <p>One of the most common questions I receive from couples is "How do we create a timeline that allows for beautiful photos without feeling rushed?" Here's my advice after photographing hundreds of weddings:</p>
      <h3>The Golden Hour Rule</h3>
      <p>Whenever possible, schedule your couple's portraits during the "golden hour" - the hour before sunset when the light is soft, warm, and flattering. This might mean taking a break from your reception or planning a "first look" earlier in the day.</p>
      <h3>Sample Timeline</h3>
      <p>For a 5:00 PM ceremony:</p>
      <ul>
        <li><strong>12:00 PM:</strong> Photography coverage begins (getting ready)</li>
        <li><strong>2:00 PM:</strong> First look and couple's portraits (if doing pre-ceremony)</li>
        <li><strong>3:00 PM:</strong> Wedding party photos</li>
        <li><strong>4:00 PM:</strong> Hidden away as guests arrive</li>
        <li><strong>5:00 PM:</strong> Ceremony</li>
        <li><strong>5:30 PM:</strong> Family formal photos</li>
        <li><strong>6:00 PM:</strong> Cocktail hour (photographers capture details and candids)</li>
        <li><strong>6:45 PM:</strong> Quick sunset portraits (15-20 minutes)</li>
        <li><strong>7:00 PM:</strong> Reception begins</li>
      </ul>
      <h3>Buffer Time is Essential</h3>
      <p>Add 25% more time than you think you need for each activity. Hair and makeup often run late, family members disappear for formal photos, and transportation between venues can take longer than expected.</p>
      <h3>Communication is Key</h3>
      <p>Share your final timeline with all vendors and key family members. The more everyone knows what to expect, the smoother your day will flow.</p>
      <p>Remember, your wedding day is about celebrating your love. A well-planned timeline allows you to be present in each moment while still capturing the beautiful images you'll treasure forever.</p>
    `,
    publishedDate: '2025-01-30T10:15:00Z',
    featuredImage: {
      url: '/images/david-josue-wedding-photography-hero-image.jpg',
      alt: 'Couple during golden hour wedding portraits'
    },
    tags: ['Wedding Planning', 'Photography Tips', 'Timeline'],
    lang: 'en-US'
  },
  // Spanish versions
  {
    id: '4',
    title: 'Las 5 Mejores Ubicaciones para Bodas de Destino en México',
    slug: 'mejores-ubicaciones-bodas-destino-mexico',
    excerpt: 'Explora los lugares más impresionantes para tu boda de destino en México, desde las playas de Tulum hasta los viñedos del Valle de Guadalupe.',
    content: `
      <h2>Los Destinos Más Hermosos para Tu Boda en México</h2>
      <p>México ofrece una increíble variedad de escenarios para bodas de destino. Desde playas vírgenes hasta pueblos coloniales y selvas exuberantes, aquí están mis principales recomendaciones:</p>
      <h3>1. Valle de Guadalupe</h3>
      <p>La región vitivinícola de México ofrece un telón de fondo rústico pero elegante para bodas. Con vistas a viñedos, cocina de la granja a la mesa y alojamientos boutique, es perfecto para parejas que buscan un ambiente sofisticado pero relajado.</p>
      <h3>2. Tulum</h3>
      <p>Para bodas bohemias en la playa, Tulum ofrece playas de arena blanca, aguas turquesas y un ambiente relajado. Su combinación de belleza natural y locales de moda lo hace increíblemente popular.</p>
      <h3>3. San Miguel de Allende</h3>
      <p>Esta joya colonial ofrece calles empedradas, arquitectura colorida y un ambiente romántico. Perfecto para parejas que desean el encanto y la cultura del viejo mundo.</p>
      <h3>4. Cabo San Lucas</h3>
      <p>Los dramáticos paisajes donde el desierto se encuentra con el mar crean telones de fondo inolvidables para bodas. Los resorts de lujo y el clima perfecto durante todo el año hacen de este un lugar favorito.</p>
      <h3>5. Puerto Vallarta</h3>
      <p>Con su combinación de playas, montañas y encantador pueblo, Puerto Vallarta ofrece versatilidad para estilos de bodas desde ceremonias íntimas hasta grandes celebraciones.</p>
      <p>Cada uno de estos destinos tiene su propio carácter único y mejores temporadas. Contáctame para discutir cuál sería la combinación perfecta para la visión de tu boda.</p>
    `,
    publishedDate: '2025-03-15T08:00:00Z',
    featuredImage: {
      url: '/images/david-josue-valle-de-guadalupe-wedding-destination.jpg',
      alt: 'Escenario de boda en viñedo del Valle de Guadalupe'
    },
    tags: ['Boda de Destino', 'México', 'Viajes'],
    lang: 'es-MX'
  },
  {
    id: '5',
    title: 'Cómo Prepararte para tu Sesión de Fotos Boudoir',
    slug: 'preparacion-sesion-fotos-boudoir',
    excerpt: 'Consejos y recomendaciones para ayudarte a sentirte segura y lucir lo mejor posible para tu próxima sesión boudoir.',
    content: `
      <h2>Preparándote para tu Sesión Boudoir</h2>
      <p>Una sesión fotográfica boudoir es una celebración de tu belleza y poder únicos. Aquí hay algunos consejos para ayudarte a prepararte:</p>
      <h3>Preparación Mental</h3>
      <p>El aspecto más importante de la fotografía boudoir es tu mentalidad. Aborda la sesión como un regalo para ti misma, una celebración de tu cuerpo y espíritu. Practica el diálogo interno positivo y recuerda que la vulnerabilidad es hermosa.</p>
      <h3>Preparación Física</h3>
      <ul>
        <li>Mantente hidratada en los días previos a tu sesión</li>
        <li>Evita el exceso de sal y alcohol que pueden causar hinchazón</li>
        <li>Hidrata tu piel diariamente</li>
        <li>Considera una manicura y pedicura</li>
        <li>Descansa lo suficiente la noche anterior</li>
      </ul>
      <h3>Qué Traer</h3>
      <p>Considera traer 3-5 atuendos diferentes que te hagan sentir hermosa. Esto puede incluir lencería, una camisa de botones de tu pareja, una sábana simple o incluso un vestido elegante. Trae accesorios que reflejen tu personalidad y estilo.</p>
      <h3>Durante la Sesión</h3>
      <p>Confía en el proceso. Te guiaré a través de poses que favorezcan tu tipo de cuerpo y capturen tu esencia. Siéntete libre de traer música que te haga sentir segura y poderosa.</p>
      <p>Recuerda, la fotografía boudoir se trata de celebrarte a ti misma como eres en este momento. Las imágenes más hermosas provienen de la confianza y la autenticidad.</p>
    `,
    publishedDate: '2025-02-20T09:30:00Z',
    featuredImage: {
      url: '/images/david-josue-boudoir-photography-service.jpg',
      alt: 'Ejemplo de fotografía boudoir artística'
    },
    tags: ['Boudoir', 'Consejos de Fotografía', 'Autocuidado'],
    lang: 'es-MX'
  },
  {
    id: '6',
    title: 'Cronograma del Día de la Boda: Cómo Planificar para Fotos Perfectas',
    slug: 'cronograma-dia-boda-planificacion-fotos',
    excerpt: 'Crea el cronograma ideal para el día de tu boda que permita tiempo para fotos impresionantes sin perderte ningún momento importante.',
    content: `
      <h2>Planificando el Cronograma de tu Día de Boda para una Hermosa Fotografía</h2>
      <p>Una de las preguntas más comunes que recibo de las parejas es "¿Cómo creamos un cronograma que permita fotos hermosas sin sentirnos apurados?" Aquí está mi consejo después de fotografiar cientos de bodas:</p>
      <h3>La Regla de la Hora Dorada</h3>
      <p>Siempre que sea posible, programa tus retratos de pareja durante la "hora dorada" - la hora antes del atardecer cuando la luz es suave, cálida y favorecedora. Esto podría significar tomar un descanso de tu recepción o planificar un "primer vistazo" más temprano en el día.</p>
      <h3>Ejemplo de Cronograma</h3>
      <p>Para una ceremonia a las 5:00 PM:</p>
      <ul>
        <li><strong>12:00 PM:</strong> Comienza la cobertura fotográfica (preparativos)</li>
        <li><strong>2:00 PM:</strong> Primer vistazo y retratos de pareja (si se hacen antes de la ceremonia)</li>
        <li><strong>3:00 PM:</strong> Fotos de la fiesta nupcial</li>
        <li><strong>4:00 PM:</strong> Ocultos mientras llegan los invitados</li>
        <li><strong>5:00 PM:</strong> Ceremonia</li>
        <li><strong>5:30 PM:</strong> Fotos formales con la familia</li>
        <li><strong>6:00 PM:</strong> Hora del cóctel (los fotógrafos capturan detalles y momentos espontáneos)</li>
        <li><strong>6:45 PM:</strong> Rápidos retratos al atardecer (15-20 minutos)</li>
        <li><strong>7:00 PM:</strong> Comienza la recepción</li>
      </ul>
      <h3>El Tiempo de Amortiguación es Esencial</h3>
      <p>Añade un 25% más de tiempo del que crees que necesitarás para cada actividad. El peinado y maquillaje a menudo se retrasan, los miembros de la familia desaparecen para las fotos formales, y el transporte entre sedes puede tomar más tiempo del esperado.</p>
      <h3>La Comunicación es Clave</h3>
      <p>Comparte tu cronograma final con todos los proveedores y miembros clave de la familia. Cuanto más sepa todo el mundo lo que se espera, más fluido será tu día.</p>
      <p>Recuerda, el día de tu boda se trata de celebrar tu amor. Un cronograma bien planificado te permite estar presente en cada momento mientras aún capturas las hermosas imágenes que atesorarás para siempre.</p>
    `,
    publishedDate: '2025-01-30T10:15:00Z',
    featuredImage: {
      url: '/images/david-josue-wedding-photography-hero-image.jpg',
      alt: 'Pareja durante retratos de boda en hora dorada'
    },
    tags: ['Planificación de Bodas', 'Consejos de Fotografía', 'Cronograma'],
    lang: 'es-MX'
  }
];

// Helper function to get blog posts by language
export function getBlogPostsByLang(lang: string, limit: number = 10, page: number = 1) {
  const filteredPosts = blogPosts.filter(post => post.lang === lang);
  
  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  return {
    docs: paginatedPosts,
    totalDocs: filteredPosts.length,
    totalPages: Math.ceil(filteredPosts.length / limit),
    page,
    hasNextPage: endIndex < filteredPosts.length,
    hasPrevPage: page > 1,
  };
}

// Helper function to get a single blog post by slug and language
export function getBlogPostBySlug(slug: string, lang: string) {
  return blogPosts.find(post => post.slug === slug && post.lang === lang) || null;
}
