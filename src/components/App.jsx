import React from 'react';
import Birthday from './Birthday';
import Profile from '../assets/profile.png';

const App = () => {
  return (
    <div className="birthday">
      <Birthday
      text='Merry Christmas Nikky!'
      background_icon1='https://thumbs.gfycat.com/DopeyWildArgusfish-size_restricted.gif'
      background_icon2='http://clipart-library.com/images/6ir6y8biK.gif'
      profile= {Profile}
      />
    </div>
  )
}

export default App;