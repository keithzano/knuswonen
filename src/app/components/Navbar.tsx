'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: 'Ik huur', href: '#', current: true },
  { name: 'Ik zoek', href: '#', current: false },
  { name: 'Over ons', href: '#', current: false },
  { name: 'Projecten', href: '#', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className=" bg-white  ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky top-0 ">
        <div className="relative flex h-16 items-center justify-between">
          {/*  icons on the left for mobile/tablet */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <img
              alt="Profile"
              src="images/profile.png"

            />
            <img
              alt="Search"
              src="images/search.png"

            />

          </div>

          {/* Logo in the middle for mobile/tablet */}
          <div className="flex flex-1 justify-center sm:justify-start">
            <img
              alt="Your Company"
              src="images/logo.png"
              className="h-8 w-auto"
            />
          </div>

          {/* Hamburger menu on the right for mobile/tablet */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-indigo-900 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </Disclosure.Button>
          </div>

          {/* Navigation Links centered for desktop */}
          <div className="hidden sm:flex sm:space-x-4 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                   'text-indigo-900 hover:bg-indigo-700 hover:text-white',
                  'rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Profile and search icon on the right for desktop */}
          <div className="hidden sm:flex sm:items-center sm:ml-6 sm:pr-0 gap-3">
            <img
              alt="Search"
              src="images/search.png"
            />
            <img
              alt="Search"
              src="images/profile.png"
            />
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                  item.current ? 'bg-indigo-900 text-white' : 'text-indigo-900 hover:bg-indigo-700 hover:text-white',
                  'rounded-md px-3 py-2 text-base font-semibold block',
              )} 
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};