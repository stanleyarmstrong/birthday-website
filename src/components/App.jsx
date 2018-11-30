import React from 'react';
import Birthday from './Birthday';

const App = () => {
  return (
    <div className="birthday">
      <Birthday
      text='Happy Birthday Liz!'
      background_icon1='https://media.giphy.com/media/28NO42IhLsjza85aA5/giphy.gif'
      background_icon2='https://i.gifer.com/54vI.gif'
      />
    </div>
  )
}

export default App;