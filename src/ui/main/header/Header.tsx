import React from 'react';
import '../../sub/header/header.css';
import '../../../index.css';

function Header() {
  return (
    <div className='relative w-[100%] h-[100px] px-3 flex justify-center pt-5 items-center'>
      <div className='absolute top-5 royal-lines h-[5px] w-[97%] bg-gradient-to-b from-[#C2A378] via-[#D1BA97] to-[#000000] shadow-md'></div>
      <div className=''>
         
      </div>
      <div className='absolute top-10 w-[97%] royal-lines h-[5px] bg-gradient-to-b from-[#C2A378] via-[#D1BA97] to-[#000000] shadow-md'></div>
    </div>
  );
}

export default Header;
