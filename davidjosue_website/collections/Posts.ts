import { CollectionConfig } from 'payload/types';
import { slateEditor } from '@payloadcms/richtext-slate'; // Import slateEditor for rich text

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishedDate'], // Columns shown in list view
  },
  access: {
    read: () => true, // Everyone can read published posts
    // Add create, update, delete access control as needed (e.g., only logged-in users)
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true, // Allow different titles per language
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true, // Ensure slugs are unique
      admin: {
        position: 'sidebar',
      },
      // TODO: Add hook to generate slug from title if desired
    },
    {
      name: 'content',
      type: 'richText',
      editor: slateEditor({ // Configure the Slate editor
        admin: {
          // Add editor features if needed
        }
      }),
      required: true,
      localized: true, // Allow different content per language
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users', // Link to the Users collection
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime', // Show time picker as well
        },
      },
      // TODO: Add hook to set publish date automatically when status changes to 'published'
    },
    // Add more fields like featuredImage, categories, tags etc.
    // {
    //   name: 'featuredImage',
    //   type: 'upload',
    //   relationTo: 'media', // Assuming a 'media' collection exists
    // },
    // {
    //   name: 'categories',
    //   type: 'relationship',
    //   relationTo: 'categories', // Assuming a 'categories' collection exists
    //   hasMany: true,
    // },
  ],
};

export default Posts;
