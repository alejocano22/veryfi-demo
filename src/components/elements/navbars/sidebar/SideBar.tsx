import { useRouter } from 'next/router';
import { getNavbarNavigation } from '@components/utils';

export interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const { locale } = useRouter();
  const navigation = getNavbarNavigation(locale);

  return (
    <div className='h-100% flex-row bg-white hidden lg:flex'>
      <div className='h-full flex flex-col w-56 bg-purple-darker overflow-hidden'>
        <ul className='flex flex-col py-4 mt-20'>
          {navigation.map((item) => (
            <li key={`sidebar-${item.name}`}>
              <a
                href={item.href}
                className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200'
              >
                <span className='ml-12 text-sm font-medium text-white'>
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
