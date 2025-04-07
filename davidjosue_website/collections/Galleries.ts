import { CollectionConfig } from 'payload/types';
import { slateEditor } from '@payloadcms/richtext-slate';

// Define the Galleries collection
const Galleries: CollectionConfig = {
  slug: 'galleries',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'updatedAt'],
  },
  access: {
    read: () => true, // Anyone can read published galleries
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', // This assumes you'll create a Media collection
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      editor: slateEditor({}),
      localized: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Gallery Images',
      minRows: 0,
      maxRows: 50,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // This assumes you'll create a Media collection
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
        }
      ]
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'metaTitle',
      label: 'Meta Title',
      type: 'text',
      localized: true,
      admin: {
        description: 'Custom title for SEO purposes. If not provided, the regular title will be used.',
      },
    },
    {
      name: 'metaDescription',
      label: 'Meta Description',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Brief description for SEO purposes.',
      },
    },
  ],
  timestamps: true,
};

export default Galleries;
