// /app/robots.txt/route.ts
import { NextRequest, NextResponse } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function GET(request: NextRequest) {
    const robotsTxt = `User-agent: *
Allow: /

Disallow: /en-US/thankyou_guide
Disallow: /es-MX/thankyou_guide
Disallow: /en-US/thanks_contact
Disallow: /es-MX/thanks_contact

Sitemap: ${siteUrl}/sitemap.xml
`;

    return new NextResponse(robotsTxt, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            // Cache control headers if needed
            // 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}

// Ensure this route is not dynamically rendered if possible, it's static content
export const dynamic = 'force-static';
