import './App.css'
import Header from './components/header/Header'
import RecipeCards from './components/recipe-cards/RecipeCards'
import RecipeTables from './components/recipe-tables/RecipeTables'

function App() {

  


  return (
    <div>
      <Header></Header>
      <div>
        <h1 className='pt-24 text-center text-[#150B2B] text-[40px] font-semibold'>Our Recipes</h1>
        <p className='pb-12 px-[185px] text-center text-[#150b2b99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      <div className='grid grid-cols-5'>
        <div className='col-span-3'>
          <RecipeCards></RecipeCards>
        </div>
        <div className='col-span-2'>
          <RecipeTables></RecipeTables>
        </div>
      </div>
    </div>
  )
}

export default App
