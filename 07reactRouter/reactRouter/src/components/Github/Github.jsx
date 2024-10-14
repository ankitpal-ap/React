import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hateshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     });
    // },[]);

    // if (!data) {
    //     return <div className="text-center m-4">Loading...</div>; // Display loading state
    //   }


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-2 text-2xl'>Github followers:{data?.followers ?? 12} 
    <img src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg" alt="Git picture"width={300} />
    
    </div>
  )
}

export default Github


export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/hateshchoudhary')
    const data = await res.json()
    return data
}
