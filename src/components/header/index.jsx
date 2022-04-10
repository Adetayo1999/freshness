import {
  ArrowDown,
  BagIcon,
  FreshcomLogo,
  SearchIcon,
  UserIcon,
} from '../../assets/svg';
import { navItems } from '../../data';

function Header() {
  return (
    <header className="">
      <div className="md:w-[95%] mx-auto">
        {/* Section Above The Main Header */}
        <div className="flex justify-between items-center py-4 border-b border-[#151515] border-opacity-5 ">
          <div className="flex">
            <p className="text-primary mr-6 text-xs">Chat with us</p>
            <p className="mr-6 text-xs">+420 336 775 664</p>
            <p className=" text-xs">info@freshnesecom.com</p>
          </div>
          <ul className="flex items-center">
            {['Blog', 'About Us', 'Careers'].map((link) => (
              <li
                key={Math.random() * Date.now()}
                className="text-primary mr-8 last-of-type:mr-0 text-xs">
                {' '}
                {link}{' '}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Header Section */}
        <div className="py-8 flex justify-between items-center">
          <div className="">
            <FreshcomLogo />
          </div>

          <div className="flex items-center md:w-[31rem] md:h-[2.5rem] bg-[#F9F9F9] border border-[#D1D1D1] rounded-[0.5rem] p-4">
            <button
              type="button"
              className="flex items-center pr-3 border-r border-[#D1D1D1]">
              <span className="font-bold text-sm px-2">All categories</span>
              <span>
                <ArrowDown scale={0.45} />
              </span>
            </button>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Products, categories ..."
              className="bg-transparent outline-none flex-1 mx-3 text-sm"
            />
            <button type="button">
              <SearchIcon />
            </button>
          </div>

          <div className="flex items-center">
            <div className="mr-6">
              <UserIcon scale={0.6} />
            </div>
            <div className="mr-6 relative">
              <BagIcon scale={0.6} />
              <span className="-left-1 top-3 h-4 w-4 bg-[#E6704B] rounded-full text-gray-50 text-xs text-center absolute ">
                4
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar Section */}
      <div className="bg-[#F9F9F9] p-4 pl-8">
        <nav className="">
          <ul className="flex  items-center ">
            {navItems.map((item) => (
              <li key={Math.random() * Date.now()} className="mr-10">
                <span className="flex items-center text-sm font-medium">
                  {item.name} {item.hasDropDown && <ArrowDown scale={0.4} />}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
