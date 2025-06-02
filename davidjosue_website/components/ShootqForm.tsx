// /components/ShootqForm.tsx

interface ShootqFormProps {
  src?: string; // Make src optional to use default
  minHeight?: string; // e.g., '500px'
}

const DEFAULT_SHOOTQ_SRC = "https://david-josue.shootq.com/contactform/fd4ef613dca0?embed=true";

export function ShootqForm({ src = DEFAULT_SHOOTQ_SRC, minHeight = '600px' }: ShootqFormProps) {
  return (
    <iframe
      height="600" // Initial height, potentially adjusted by CSS/style
      allowTransparency={true}
   seamless={true} // Note: seamless attribute is deprecated in HTML5
   frameBorder="0"
   scrolling="no" // Attempt to disable iframe scrolling
   loading="lazy" // Add lazy loading attribute
    style={{
      width: '100%',
      border: 'none',
      minHeight: '900px', // Reduced minimum height to a more reasonable value
      height: 'auto', // Allow height to adjust if possible, but minHeight dominates
      overflow: 'hidden', // Hide potential overflow on the iframe element itself
    }}
      src={src}
      title="Contact Form" // Add title for accessibility
    >
      {/* Fallback link for browsers that don't support iframes */}
      <a href={src.replace('?embed=true', '')}>Please fill in this contact form</a>
    </iframe>
  );
}
