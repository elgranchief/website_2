// ES Modules version of symlinks.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create directory if it doesn't exist
function ensureDirectoryExistence(dirPath) {
  if (fs.existsSync(dirPath)) {
    return true;
  }
  // Create parent directories if needed
  ensureDirectoryExistence(path.dirname(dirPath));
  fs.mkdirSync(dirPath);
}

// Function to create symbolic links or file copies
function createLink(sourcePath, targetPath) {
  console.log(`Creating link from ${sourcePath} to ${targetPath}`);
  
  // Ensure target directory exists
  ensureDirectoryExistence(path.dirname(targetPath));
  
  try {
    // Remove existing file if it exists
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }
    
    // Instead of symlink, copy the file content (more reliable cross-platform)
    const content = fs.readFileSync(sourcePath, 'utf8');
    
    // Create a JavaScript module export that points to the original file
    const fileContent = `// Auto-generated module resolver file
// Points to: ${sourcePath}
export * from '${path.relative(path.dirname(targetPath), sourcePath).replace(/\\/g, '/')}';
`;
    
    fs.writeFileSync(targetPath, fileContent, 'utf8');
    
    console.log(`Successfully created module resolver: ${targetPath}`);
  } catch (error) {
    console.error(`Error creating link: ${error.message}`);
  }
}

// Path to the project root
const rootPath = __dirname;

// Ensure node_modules directories exist
ensureDirectoryExistence(path.join(rootPath, 'node_modules', 'lib'));
ensureDirectoryExistence(path.join(rootPath, 'node_modules', 'components'));

// Create module resolvers for problematic paths
console.log('Creating module resolvers for problematic import paths...');

// Handle 'lib/payload'
createLink(
  path.join(rootPath, 'lib', 'payload.ts'),
  path.join(rootPath, 'node_modules', 'lib', 'payload.js')
);

// Handle 'components/PayloadRichText'
createLink(
  path.join(rootPath, 'components', 'PayloadRichText.tsx'),
  path.join(rootPath, 'node_modules', 'components', 'PayloadRichText.js')
);

// Also create standalone modules for quoted paths
ensureDirectoryExistence(path.join(rootPath, 'node_modules', "'lib"));
ensureDirectoryExistence(path.join(rootPath, 'node_modules', "'components"));

createLink(
  path.join(rootPath, 'lib', 'payload.ts'),
  path.join(rootPath, 'node_modules', "'lib", "payload'.js")
);

createLink(
  path.join(rootPath, 'components', 'PayloadRichText.tsx'),
  path.join(rootPath, 'node_modules', "'components", "PayloadRichText'.js")
);

console.log('Module resolvers created successfully');
