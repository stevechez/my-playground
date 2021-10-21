import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faPhotoVideo, faStore, faUsers } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
    <h1>my facebook nav</h1>
    <div className="flex mb-4">
  <div className="w-1/4 bg-gray-500 h-12">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="facebook logo" style={{'height': '50px', 'display': 'inline' }}/>

        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          
        </button>

  </div>
  <div className="space-x-20 w-1/2 bg-gray-300 h-12">

  <FontAwesomeIcon icon={faHome} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faUserFriends} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faPhotoVideo} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faStore} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-300" />

  </div>
  <div className="w-1/4 bg-gray-500 h-12"></div>
</div>
    <nav className="nav flex flex-wrap items-center justify-between px-4">
  <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 716 895">
      <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
      <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
      <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
    </svg>
    <span className="font-semibold text-xl tracking-tight">Luke Bennett</span>
  </div>

  <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
  <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span className="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li className="border-t md:border-none">
      <a href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
    </li>
    
    <li className="border-t md:border-none">
      <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
    </li>
    
    <li className="border-t md:border-none">
      <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Blog</a>
    </li>
    
  </ul>
</nav>
</>
  )
}

export default Navbar
