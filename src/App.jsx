import './App.css'
import Header from './components/header/Header'
import RecipeCards from './components/recipe-cards/RecipeCards'
import RecipeTables from './components/recipe-tables/RecipeTables'

function App() {
  const setTheme = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
  }
  setTheme()

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className='pt-24 text-center text-[#150B2B] text-[40px] font-semibold'>Our Recipes</h1>
        <p className='pb-12 px-[185px] text-center'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      <div className='grid grid-cols-6'>
        <div className='col-span-4'>
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
