import { config as dotenv } from 'dotenv'; // Import dotenv
import path from 'path';
import { buildConfig } from 'payload/config';

// Import collections with .js extension as required by NodeNext
import Users from './collections/Users.js';
import Posts from './collections/Posts.js';
import Galleries from './collections/Galleries.js';
import Media from './collections/Media.js';

// Import adapters and plugins
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { nextBuild } from '@payloadcms/next/config';

+// Load .env file explicitly
+dotenv({ path: path.resolve(__dirname, '.env') });

 export default buildConfig({
   admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    Galleries,
    Media,
    // Add more collections here as needed (e.g., Categories, Tags)
  ],
  editor: slateEditor({}), // Rich text editor configuration
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  // Configure the Next.js build plugin
  plugins: [
    // Add more plugins here if needed
    nextBuild(), // Required for Payload + Next.js integration
  ],
  // Database adapter
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '', // Ensure you have MONGODB_URI in your .env
  }),
  // Secret for Payload operations (ensure you have PAYLOAD_SECRET in your .env)
  secret: process.env.PAYLOAD_SECRET || '',
});
