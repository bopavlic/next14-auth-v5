'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import UserButton from '@/components/auth/UserButton';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='bg-secondary flex justify-between items-center p-4 rounded-xl max-w-xl w-full shadow-sm flex-wrap gap-2'>
      <div className='flex gap-x-2 flex-wrap gap-2'>
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}
          className='w-20'
        >
          <Link href='/server'>Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}
          className='w-20'
        >
          <Link href='/client'>Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/admin' ? 'default' : 'outline'}
          className='w-20'
        >
          <Link href='/admin'>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}
          className='w-20'
        >
          <Link href='/settings'>Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
