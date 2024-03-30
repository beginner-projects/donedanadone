import clsx from 'clsx';
import Link from 'next/link';

export const TabNavItem = ({
  children,
  href,
  isActive,
}) => {
  return (
    <Link href={href}>
      <a
        className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
          'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white': !isActive,
          'bg-vercel-blue text-white': isActive,
        })}
      >
        {children}
      </a>
    </Link>
  );
};
