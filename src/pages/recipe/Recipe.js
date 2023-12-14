import './Recipe.css'
import useFetch from '../../hooks/useFetch'
import { useParams, useHistory } from "react-router-dom"
import { useEffect } from 'react'


export default function Recipe() {
    const { id } = useParams()
    const url = 'http://localhost:3000/recipes/' + id
    const { data: recipe, isPending, error } = useFetch(url)
    const history = useHistory()
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/')
            }, 2000)

        }
    }, [error, history])



    return (
        <div className='recipe'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {recipe && (
                <div>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Cooking Time: { recipe.cookingTime}</p>
                    <ul>
                        {recipe.ingredients.map(ing => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method }</p>
                </div>
            )}
        </div>
    )
}
