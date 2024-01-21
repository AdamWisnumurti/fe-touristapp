import Link from 'next/link';
import router, { useRouter } from 'next/router';
import React from 'react';
import { HiUserCircle, HiChevronDown } from 'react-icons/hi';
import { Button, DropdownMenu } from '@global/component';
import { useAuth } from '@global/hook';
import Image from 'next/image';
import { MdOutlineLogout } from 'react-icons/md';

const ProfileSection = ({
  image,
  userName,
  logout,
}: {
  image: string;
  userName: string;
  logout: () => void;
}) => {
  const router = useRouter();
  const listMenu = [
    {
      label: (
        <div className="flex items-center py-4">
          <div className="text-primary">
            <HiUserCircle size={20} />
          </div>
          <div className="ml-1 text-neutral-70">Profile</div>
        </div>
      ),
      action: () => {
        router.push(`/`);
      },
    },
    {
      label: (
        <div className="flex items-center py-4">
          <div className="text-primary">
            <MdOutlineLogout size={20} className="text-red-600" />
          </div>
          <div className="ml-1 text-neutral-70">Logout</div>
        </div>
      ),
      action: () => {
        logout();
      },
    },
  ];

  const getInitialUserName = (str: string) => {
    const firstLetters = str
      .split(' ')
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join('');

    return firstLetters;
  };

  return (
    <DropdownMenu
      menuButton={
        <div className="flex cursor-pointer items-center justify-center space-x-2">
          <div className="rounded-fulltext-sm mr-1 inline-flex h-7 w-7 items-center justify-center text-white">
            {image ? (
              <Image
                src={image || ''}
                className="h-full w-full cursor-pointer rounded-full"
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
              />
            ) : (
              <p className="bg-primary">{getInitialUserName(userName)}</p>
            )}
          </div>
          <p>{userName || ''}</p>
          <div className="text-neutral-80">
            <HiChevronDown size={18} />
          </div>
        </div>
      }
      listMenu={listMenu}
    />
  );
};

export const NavBar = () => {
  const { logout, dataProfile } = useAuth();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-2 py-4 shadow-md md:px-16">
      <div className="flex items-center md:space-x-8">
        <Link href="/" className="flex">
          <div className="cursor-pointer">
            <h1 className="text-primary">
              <span className="text-2xl font-black">Cakra</span>{' '}
              <span className="text-xl font-semibold text-secondary">
                Travel
              </span>
            </h1>
          </div>
        </Link>
      </div>
      <div>
        {dataProfile?.name ? (
          <div className="flex rounded-lg border p-1 text-sm">
            <ProfileSection
              image={dataProfile?.avatar || ''}
              userName={dataProfile?.name || ''}
              logout={logout}
            />
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              variant="primary-outline"
              className="border-[#D9D9D9]"
              onClick={() => router.push('/register')}
            >
              Register
            </Button>
            <Button
              size="sm"
              variant="primary"
              className="border-[#D9D9D9]"
              onClick={() => router.push('/login')}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
