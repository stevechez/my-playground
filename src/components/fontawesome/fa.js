import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faPhotoVideo, faStore, faUsers } from '@fortawesome/free-solid-svg-icons'

function fa() {
  return (
    <>
    <h1>Navbar</h1>
    <div className="flex space-x-8">
      <FontAwesomeIcon icon={faHome} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faUserFriends} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faPhotoVideo} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faStore} className="text-4xl text-blue-300" />
      <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-300" />
      {/* <FontAwesomeIcon icon={faFacebookMessenger} className="text-4xl text-blue-300" /> */}
    </div>
    <h1>Sidebar Left</h1>
    <FontAwesomeIcon icon={faUserFriends} className="text-4xl text-blue-300" />
    <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-300" />
    <FontAwesomeIcon icon={faStore} className="text-4xl text-blue-300" />
    <FontAwesomeIcon icon={faPhotoVideo} className="text-4xl text-blue-300" />
      


    <h1>Sidebar Right</h1>
    </>
  )
}

export default fa
