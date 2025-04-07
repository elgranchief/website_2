import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import payload from 'payload';

// Get directory path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

// Define collections directly
const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
  ],
};

const Posts = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
};

const Galleries = {
  slug: 'galleries',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
};

const Media = {
  slug: 'media',
  upload: {
    staticDir: '../public/media',
    staticURL: '/media',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

// Import adapters and plugins
import mongooseAdapterPkg from '@payloadcms/db-mongodb';
import slateEditorPkg from '@payloadcms/richtext-slate';

const { mongooseAdapter } = mongooseAdapterPkg;
const { slateEditor } = slateEditorPkg;

// Create Express app
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    admin: {
      user: 'users',
    },
    collections: [
      Users,
      Posts,
      Galleries,
      Media,
    ],
    editor: slateEditor({}),
    db: mongooseAdapter({
      url: process.env.MONGODB_URI,
    }),
    onInit: () => {
      console.log(`Payload Admin URL: http://localhost:3001/admin`);
    },
  });

  // Start the server
  app.listen(3001, () => {
    console.log(`Server started on http://localhost:3001`);
    console.log(`Admin URL: http://localhost:3001/admin`);
  });
};

start();
