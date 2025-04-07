import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // Enable Payload authentication
  admin: {
    useAsTitle: 'email', // Use email as the title in the admin UI
  },
  access: {
    // Define access control if needed, e.g., only admins can create users
    create: () => true, // Allow anyone to create first user, adjust later if needed
    read: () => true,
    update: () => true,
    delete: () => true, // Restrict deletion as needed
  },
  fields: [
    // Email added by default
    // Add more fields as needed, like name
    {
      name: 'name',
      type: 'text',
    },
    // Payload automatically adds 'email', 'password', 'salt', 'hash' fields when auth is true
  ],
};

export default Users;
