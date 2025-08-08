import Link from 'next/link';

export function NavigationBar() {
  const navItems = {
    '/': {
      name: 'home',
    },
    '/projects': {
      name: 'projects',
    },
    '/work-experience': {
      name: 'work experience',
    },
    '/contact': {
      name: 'contact',
    },
  };

  return (
    <div className='flex flex-row justify-around'>
      {Object.entries(navItems).map(([path, { name }]) => (
        <Link href={path} key={path}>
          {name}
        </Link>
      ))}
    </div>
  );
}
