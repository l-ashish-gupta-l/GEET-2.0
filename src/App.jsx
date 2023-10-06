import React from 'react'
// import Header from './component/HomePage/'
import Mainsidebar from './component/sidebar/Mainsidebar'
import Mainhome from './component/HomePage/Mainhome'
const App = () => {
  return (
    <>
     <div className=' font flex m-0 p-0 box-border'>
        <Mainsidebar />
        <Mainhome />
     </div>
     

    </>
  )
}

export default App