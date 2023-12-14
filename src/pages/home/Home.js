import './Home.css'
import  useFetch from '../../hooks/useFetch'
import RecipeList from '../../component/RecipeList'

export default function Home() {
    const { data, isPanding, error } = useFetch('http://localhost:3000/recipes')
    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPanding && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes = {data} />}
        </div>
    )
}
 