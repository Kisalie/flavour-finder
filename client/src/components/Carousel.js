import axios from 'axios'
<<<<<<< HEAD
<<<<<<< HEAD


export default function Carousel() {

  return <h1>Carousel</h1>
=======
=======
>>>>>>> 29026ec (merge changes)
import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'


export default function CarouselWrapper() {

  // State
  const [topRecipes, setTopRecipes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllRecipeData() {
      try {
        const { data } = await axios.get('/api/recipes')

        const randomisedData = data.sort(() => 0.5 - Math.random())

        const selectedRecipes = randomisedData.slice(0, 5)
        setTopRecipes(selectedRecipes)
      } catch (error) {
        console.log(error)
      }
    }
    getAllRecipeData()
  }, [])

  function handleImageClick(recipeId) {
    navigate(`/recipes/${recipeId}`)
  }

  return (
    topRecipes.length > 0 
      ? (
        <Carousel fade={true} data-bs-theme="dark">
          {
            topRecipes.map((val, index) => (
              <Carousel.Item key={`${val._id}`}>
                <img
                  className="d-block w-100"
                  src={val.image}
                  alt={`Image of ${val.title}`}
                  onClick={() => handleImageClick(val._id)}
                />
                <Carousel.Caption>
                  <h5>{val.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          }
        </Carousel>
      ) 
      : 
      <Spinner />
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 359a961 (added a Carousel)
=======
>>>>>>> 29026ec (merge changes)
}
=======
}
>>>>>>> 36814e0 (spinner complete other than single recipe)
