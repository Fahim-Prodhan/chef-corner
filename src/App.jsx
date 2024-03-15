import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import RecipeCards from './components/recipe-cards/RecipeCards'
import RecipeTables from './components/recipe-tables/RecipeTables'

function App() {

const [recipes, setRecipes] = useState([])
  const handleWantToCook =(recipe)=>{
    if(recipes.includes(recipe)){
      alert("Ache")
    }else{
      setRecipes([...recipes,recipe])
    }
  }


  return (
    <div>
      <Header></Header>
      <div>
        <h1 className='pt-24 text-center text-[#150B2B] text-[40px] font-semibold'>Our Recipes</h1>
        <p className='pb-12 px-[185px] text-center text-[#150b2b99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      <div className='grid grid-cols-5 gap-6'>
        <div className='col-span-3'>
          <RecipeCards handleWantToCook={handleWantToCook}></RecipeCards>
        </div>
        <div className='col-span-2'>
          <RecipeTables recipes={recipes}></RecipeTables>
        </div>
      </div>
    </div>
  )
}

export default App
