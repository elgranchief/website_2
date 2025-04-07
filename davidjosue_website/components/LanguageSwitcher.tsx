// /components/LanguageSwitcher.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation'; // Use this to get current lang

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLang = params.lang as string; // e.g., 'en-US' or 'es-MX'

  if (!currentLang) return null; // Don't render if lang isn't in path yet

  const getTargetLang = () => (currentLang === 'en-US' ? 'es-MX' : 'en-US');
  const targetLang = getTargetLang();

  // Replace the current lang segment in the pathname
  const targetPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);

  return (
    <div className="flex space-x-2 text-sm">
      {currentLang === 'en-US' ? (
        <span className="font-semibold text-gray-800">EN</span>
      ) : (
        <Link href={targetPath} locale="en-US" className="text-gray-500 hover:text-gray-800">
          EN
        </Link>
      )}
      <span className="text-gray-300">|</span>
      {currentLang === 'es-MX' ? (
        <span className="font-semibold text-gray-800">ES</span>
      ) : (
        <Link href={targetPath} locale="es-MX" className="text-gray-500 hover:text-gray-800">
          ES
        </Link>
      )}
    </div>
  );
}
