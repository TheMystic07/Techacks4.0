import React from 'react';
import { MdModeStandby } from 'react-icons/md';

const Navbar = () => {
  const menu = [
    { name: 'Video Call', url: '#video' },
    { name: 'Home', url: '#home' },
    { name: 'Board', url: '#board' },
    { name: 'Ide', url: '#ide' },
    // { name: 'Contact', url: '#contact' },
  ];

  return (
    <nav className="ml-0 fixed z-10 bg-black">
      <ul className="list-disc flex flex-col  gap-5 fixed right-0 top-0 bottom-0 justify-center sm:m-10 m-3 ">
        {menu.map((x, index) => (
          <a
            href={x.url}
            key={index}
            className="flex items-center flex-row-reverse group "

          >


            <div className="h-8 w-8 bg-black rounded-full flex justify-center items-center"><div className="bg-white h-6 w-6 rounded-full"></div></div>
            <p
              className={`opacity-0 group-hover:opacity-100 transition duration-700 text-black  text-2xl mr-3 font-bold uppercase`}
            >
              {x.name}
            </p>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;