import React from 'react'
import HandleName from './HandleName';

function Profile({Data}) {
  return (
    <div className='profil'>
<HandleName Data={Data}/>
<h1 className='title'>PROFIL</h1>
<img className='img' src="https://i.pinimg.com/236x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg" alt="profile pic"></img>
<div className='disc'>
<h2 className='name'>FullName : {Data.fullname}</h2>
<h2 className='bio'>Bio: {Data.bio} </h2>
<h2 className='prof' >Profession: {Data.profession}</h2>
</div>
    </div>

  )
}

export default Profile;