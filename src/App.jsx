import React from 'react'
import MainHomepage from './component/HomePage/MainHomepage'
import Mainsidebar from './component/sidebar/Mainsidebar'
const App = () => {
  return (
    <>
     <div className=' font flex m-0 p-0 box-border'>
      <Mainsidebar/>
      <MainHomepage/>
     </div>

    </>
  )
}

export default App