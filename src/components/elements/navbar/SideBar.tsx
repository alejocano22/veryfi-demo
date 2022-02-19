export interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <div className='h-100% flex-row bg-white '>
      <div className='h-full flex flex-col w-56 bg-purple-darker overflow-hidden'>
        <ul className='flex flex-col py-4 mt-20'>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-home'></i>
              </span>
              <span className='text-sm font-medium text-white'>Billing</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-music'></i>
              </span>
              <span className='text-sm font-medium text-white'>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-drink'></i>
              </span>
              <span className='text-sm font-medium text-white'>Inbox</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-shopping-bag'></i>
              </span>
              <span className='text-sm font-medium text-white'>Bank feeds</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-chat'></i>
              </span>
              <span className='text-sm font-medium text-white'>My team</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-user'></i>
              </span>
              <span className='text-sm font-medium text-white'>Reports</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-user'></i>
              </span>
              <span className='text-sm font-medium text-white'>
                File Storage
              </span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-user'></i>
              </span>
              <span className='text-sm font-medium text-white'>Projects</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-user'></i>
              </span>
              <span className='text-sm font-medium text-white'>
                Time sheets
              </span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-user'></i>
              </span>
              <span className='text-sm font-medium text-white'>Logbook</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-user'></i>
              </span>
              <span className='text-sm font-medium text-white'>Settings</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'
            >
              <span className='inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400'>
                <i className='bx bx-bell'></i>
              </span>
              <span className='text-sm font-medium text-white'>
                Notifications
              </span>
              <span className='ml-auto mr-6 text-sm bg-gray-lighter rounded-full px-3 py-px text-gray-dark'>
                5
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
