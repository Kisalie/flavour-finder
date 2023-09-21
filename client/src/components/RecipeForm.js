import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import PlusIcon from '../images/plus-icon.png'
import RemoveIcon from '../images/remove-icon.png'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const generateUniqueId = () => uuidv4()

export default function RecipeForm({ formId, userId }) {

  const navigate = useNavigate()
  // State:
  const [errorMessage, setErrorMessage] = useState(null)
  const [ingredients, setIngredients] = useState([{ id: generateUniqueId(), name: '', amount: '' }])
  const [methods, setMethods] = useState([{ id: generateUniqueId(), value: '' }])
  const [isFetching, setIsFetching] = useState(false)
  const [recipeInformation, setRecipeInformation] = useState({
    'title': '',
    'type': '',
    'image': '',
    'hours': '',
    'minutes': '',
    'serves': '',
    isVegan: false,
    isVegetarian: false,
    isPescatarian: false,
    isGlutenFree: false,
  })


  useEffect(() => {
    if (!formId) return

    // 1. Async function
    // 2. Get data --> { wrangle the data and set each bit of state. RecipeName, Hours, Minutes}
    // 3. setIngredients() -> setMethods() --> setRecipeInformation()
    // 4. setIsFetching(true)

  }, [])

  // Generic handlers:
  const handleInputChange = (attribute, value) => {
    let finalValue

    if (['serves', 'hours', 'minutes'].includes(attribute)) {
      finalValue = parseInt(value, 10)
    } else {
      finalValue = value
    }

    setRecipeInformation(prevState => ({
      ...prevState,
      [attribute]: finalValue,
    }))
  }

  const handleDietaryCheckboxChange = (value) => {
    setRecipeInformation(prevState => {
      switch (value) {
        case 'vegan':
          return { ...prevState, isVegan: !prevState.isVegan }
        case 'vegetarian':
          return { ...prevState, isVegetarian: !prevState.isVegetarian }
        case 'glutenFree':
          return { ...prevState, isGlutenFree: !prevState.isGlutenFree }
        case 'pescatarian':
          return { ...prevState, isPescatarian: !prevState.isPescatarian }
        default:
          return prevState
      }
    })
  }


  // if (formId && !setIsFetching) return <></>
  // Else render the form and we have the data in the form:

  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      cuisine: '',
      type: '',
    },
  })



  // Method
  const addMethod = () => {
    setMethods([...methods, { id: generateUniqueId(), value: '' }])
  }

  const removeMethod = (methodId) => {
    setMethods(methods.filter(method => method.id !== methodId))
  }

  const handleMethodNameChange = (e, methodId) => {
    const newMethods = methods.map((method) => {
      if (method.id === methodId) {
        return { ...method, value: e.target.value }
      }
      return method
    })
    setMethods(newMethods)
  }


  // Ingredients
  const addIngredient = () => {
    setIngredients([...ingredients, { id: generateUniqueId(), name: '', amount: '' }])
  }

  const removeIngredient = (ingredientId) => {
    const newIngredients = ingredients.filter(ingredient => {
      return ingredient.id !== ingredientId
    })
    setIngredients(newIngredients)
  }

  const handleIngredientNameChange = (e, index) => {
    const newIngredients = [...ingredients]
    newIngredients[index].name = e.target.value
    setIngredients(newIngredients)
  }

  const handleIngredientAmountChange = (e, index) => {
    const newIngredients = [...ingredients]
    newIngredients[index].amount = e.target.value
    setIngredients(newIngredients)
  }

  const onSubmit = async (data) => {
    // setErrors('')
    const newObject = {
      ...recipeInformation,
      ingredients: ingredients,
      method: methods.map((method) => method.value),
      cookingTime: { hours: recipeInformation.hours, minutes: recipeInformation.minutes },
    }
    // Delete hours and minutes 
    delete newObject.hours
    delete newObject.minutes

    const createRecipe = async () => {
      try {
        const response = await axios.post('/api/recipes', newObject)

        // Check if response has the created recipe object with an _id.
        if (response && response.data && response.data._id) {
          return response.data._id
        } else {
          throw new Error('Unexpected response format from the server.')
        }

      } catch (error) {
        // Check for specific error responses from your server and adjust the error message.
        if (error.response && error.response.data) {
          if (error.response.data.error && error.response.data.error.name === 'Duplicate recipe') {
            console.error('Duplicate recipe detected:', error.response.data.error.field)
            throw new Error('Recipe already exists with the provided details.')
          } else if (error.response.data.message) {
            console.error('Error creating recipe:', error.response.data.message)
            throw new Error(error.response.data.message)
          }
        } else {
          console.error('Error creating recipe:', error.message)
          throw error  // re-throw to handle it in the outer function or log it.
        }
      }
    }

    try {
      const dataId = await createRecipe()
      if (dataId) {
        navigate(`/recipes/user/${dataId}`)
      } else {
        setErrorMessage('Failed to get the ID from the response. Please try again.')
      }
    } catch (error) {
      setErrorMessage(`Error during recipe creation. Please check the details and try again. ${error.message}`)
      console.error('Error during recipe creation:', error.message)
    }

  }




  return (
    <main className='recipe-form-page'>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Recipe Name</label>
        <input
          value={recipeInformation.title}
          placeholder='New Recipe' {...register('title', { required: true })}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
        {/* {errors.username && <span>Username is required</span>} */}
        {/* <input type='file' accept='image/png, image/jpeg, image/jpg' {...register('image', { required: false })} /> */}
        <input type='text' placeholder='Image Path' {...register('image', { required: true })}
          onChange={(e) => handleInputChange('image', e.target.value)}
        />
        <select className='dropbtn' {...register('cuisine', { required: true })}
          onChange={(e) => handleInputChange('cuisine', e.target.value)}

        >
          <option value='' disabled>
            Choose a cuisine
          </option>
          <option value='Italian'>Italian</option>
          <option value='Japanese'>Japanese</option>
          <option value='Chinese'>Chinese</option>
          <option value='Indian'>Indian</option>
          <option value='Thai'>Thai</option>
          <option value='Mexican'>Mexican</option>
          <option value='American'>American</option>
          <option value='British'>British</option>
          <option value='Spanish'>Spanish</option>
          <option value='Korean'>Korean</option>
          <option value='Vietnamese'>Vietnamese</option>
          <option value='Asian'>Asian</option>
        </select>

        <select className='dropbtn' {...register('type', { required: true })}
          value={recipeInformation.type}
          placeholder='New Recipe'
          onChange={(e) => handleInputChange('type', e.target.value)}
        >
          <option value='' disabled>
            Choose the dish type
          </option>
          <option value='Starter'>Starter</option>
          <option value='Main'>Main</option>
          <option value='Side'>Side</option>
          <option value='Dessert'>Dessert</option>
        </select>

        <label>Hours</label>
        <input type='number' min='0' max='12' {...register('hours', { required: true })} onChange={(e) => handleInputChange('hours', e.target.value)} />
        <label>Minutes</label>
        <input type='number' min='0' max='59' {...register('minutes', { required: true })} onChange={(e) => handleInputChange('minutes', e.target.value)} />

        <label>Serves</label>
        <input type='number' min='0' max='12' {...register('serves', { required: true })} onChange={(e) => handleInputChange('serves', e.target.value)} />

        <section className="checkbox-container">
          <label>
            <input type="checkbox"
              checked={recipeInformation.isVegan}
              onChange={() => handleDietaryCheckboxChange('vegan')} />
            Vegan
          </label>

          <label>
            <input type="checkbox" checked={recipeInformation.isVegetarian}
              onChange={() => handleDietaryCheckboxChange('vegetarian')} />
            Vegetarian
          </label>

          <label>
            <input type="checkbox"
              checked={recipeInformation.isGlutenFree}
              onChange={() => handleDietaryCheckboxChange('glutenFree')} />
            Gluten Free
          </label>

          <label>
            <input type="checkbox"
              checked={recipeInformation.isPescatarian}
              onChange={() => handleDietaryCheckboxChange('pescatarian')} />
            Pescatarian
          </label>
        </section>

        {/* Ingredients */}
        <label>Ingredients</label>
        <div className='container-ingredients'>
          {ingredients.map((ingredient, index) => (
            <div className='ingredient-container' key={ingredient.id}>
              <Controller
                name={`ingredients[${index}].ingredient`}
                control={control}
                defaultValue={ingredient.name}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className='ingredient-input'
                    placeholder='New ingredient'
                    {...field}
                    onChange={e => {
                      field.onChange(e)
                      handleIngredientNameChange(e, index)
                    }}
                  />
                )}
              />

              <Controller
                name={`ingredients[${index}].amount`}
                control={control}
                defaultValue={ingredient.amount}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className='ingredient-input amount-input'
                    placeholder='Amount'
                    {...field}
                    onChange={e => {
                      field.onChange(e)
                      handleIngredientAmountChange(e, index)
                    }}
                  />
                )}
              />

              <button type='button' onClick={() => removeIngredient(ingredient.id)}>
                <img src={RemoveIcon} width='18px' />
              </button>
            </div>
          ))}
          <button className='remove-icon' type='button' onClick={addIngredient}>
            <img src={PlusIcon} width='28px' alt='Add Ingredient' />
          </button>
        </div>

        {/* Method */}
        <label>Method</label>
        <div className='container-methods'>
          {methods.map((method, index) => (
            <div className='methods' key={method.id}>
              <Controller
                name={`method[${index}].method`}
                control={control}
                defaultValue={method.value}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className='methods-input'
                    placeholder='Add Method'
                    {...field}
                    onChange={e => {
                      field.onChange(e)
                      handleMethodNameChange(e, method.id)
                    }}
                  />
                )}
              />
              <button type='button' onClick={() => removeMethod(method.id)}>
                <img src={RemoveIcon} width='18px' />
              </button>
            </div>
          ))}
          <button className='remove-icon' type='button' onClick={addMethod}>
            <img src={PlusIcon} width='28px' alt='Add Ingredient' />
          </button>
        </div>


        <input type='submit' value='Submit Recipe' />


      </form>
    </main >
  )
}
