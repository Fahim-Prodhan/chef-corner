import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import RecipeCards from './components/recipe-cards/RecipeCards'
import RecipeTables from './components/recipe-tables/RecipeTables'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [recipes, setRecipes] = useState([])
const[currentRecipes, setCurrentRecipes] = useState([])


const [totalTime, setTotalTime] = useState(0)
const [totalCalories, setTotalCalories] = useState(0)

  const handleWantToCook =(recipe)=>{
    if(recipes.includes(recipe)){
      toast("Recipe is Already Added")
    }else{
      setRecipes([...recipes,recipe])
    }
  }

  const handleCurrentCooking = recipeId =>{
    const newRecipeList = recipes.filter(recipe=> recipe.id !== recipeId.id)
    setRecipes(newRecipeList)

    setCurrentRecipes([...currentRecipes,recipeId])

    const newTime = totalTime + recipeId.preparing_time
    setTotalTime(newTime)

    const newTotalCalory = totalCalories + recipeId.calories
    setTotalCalories(newTotalCalory)
    
}


  return (
    <div>
      
      <Header></Header>
      <div>
        <h1 className='pt-24 text-center text-[#150B2B] text-[40px] font-semibold'>Our Recipes</h1>
        <p className='pb-12 px-6 lg:px-[185px] text-center text-[#150b2b99]'>Explore our curated collection of diverse dishes, from appetizers to desserts, and unlock the secrets to creating delicious meals that will impress every palate.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
        <div className='col-span-3'>
          <RecipeCards handleWantToCook={handleWantToCook}></RecipeCards>
          <ToastContainer/>
        </div>
        <div className='col-span-2'>
          <RecipeTables recipes={recipes} handleCurrentCooking={handleCurrentCooking} currentRecipes={currentRecipes} totalTime={totalTime} totalCalories={totalCalories}></RecipeTables>
        </div>
      </div>
    </div>
  )
}

export default App
