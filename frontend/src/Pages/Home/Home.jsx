import { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

  const[category,setCategory] = useState("All"); 
  // Declare the state which is inheritated or changed into the ExploreMenu.jsx
  return (
    <div className='Home'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>

            {/*---- Passing the categeory in ExploreMenu as a props ----*/}
      <FoodDisplay category={category} />

      |<AppDownload />
    </div>
  )
}

export default Home
