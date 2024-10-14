import React from 'react'
import { useParams } from 'react-router-dom';


function User() {
    const { userid } = useParams();
  return (
    <div className='bg-gray-500 text-white test-3xl p-4 '>

        <h1 className='text-2xl'>User ID:{userid}</h1>
      {/* User:{userid}  */}
      </div>
  )
}

export default User
