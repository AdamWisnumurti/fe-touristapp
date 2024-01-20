import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
// import { navMenu} from '@global/data';
import { HiUserCircle, HiChevronDown } from 'react-icons/hi';
import { DropdownMenu } from '@global/component/dropdown';
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
          <div className="ml-1 text-neutral-70">Lihat Profil</div>
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
          <div className="ml-1 text-neutral-70">Keluar</div>
        </div>
      ),
      action: () => {
        logout();
      },
    },
  ];

  function getInitialUserName(str: string) {
    const firstLetters = str
      .split(' ')
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join('');

    return firstLetters;
  }

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
            <h1 className="text-primary">Cakra Travel</h1>
          </div>
        </Link>
      </div>
      <div>
        <div className="flex rounded-lg border p-1 text-sm">
          <ProfileSection
            image={dataProfile?.avatar || ''}
            userName={dataProfile?.name || ''}
            logout={logout}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
