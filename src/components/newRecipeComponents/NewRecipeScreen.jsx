import React, {useState} from "react";
import { useFormik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const addIngredients = () => {
    setIngredients([...ingredients, {name, quantity}])
    setName("")
    setQuantity("")

  }

  const ingredientDisplay = ingredients.map((ingredientQuantity) => {
    return <li>{ingredientQuantity.quantity} {ingredientQuantity.name}</li>
  })
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
}

const onSubmit = (values, {resetForm}) => {
  values.ingredients = ingredients
  console.log(values)
  axios.post(`https://recipes.devmountain.com/recipes`, values)
  resetForm()
}

const formik = useFormik({initialValues: initialValues, onSubmit: onSubmit})

  return (
    <section className="form-section">
      <h1 className="form-label">Tell us about your Recipe!</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <input className="row-1-input" type="text" name="recipeName" placeholder="Recipe Name" value={formik.values.recipeName} onChange={formik.handleChange}/>
          <input className="row-1-input" type="text" name="imageURL" placeholder="Image URL" value={formik.values.imageURL} onChange={formik.handleChange}/>
        </div>
        <div className="row">
          <label className="row-2-label" htmlFor="cook">Cook</label>
          <input className="row-2-input" type="radio" name="type" id="cook" value="Cook" onChange={formik.handleChange}/>
          <label className="row-2-label" htmlFor="bake">Bake</label>
          <input className="row-2-input" type="radio" name="type" id="bake" value="Bake" onChange={formik.handleChange}/>
          <label className="row-2-label" htmlFor="drink">Drink</label>
          <input className="row-2-input" type="radio" name="type" id="drink" value="Drink" onChange={formik.handleChange}/>
        </div>
        <div className="row">
          <input className="row-3-input" type="text" name="prepTime" placeholder="Prep Time" value={formik.values.prepTime} onChange={formik.handleChange}/>
          <input className="row-3-input" type="text" name="cookTime" placeholder="Cook time" value={formik.values.cookTime} onChange={formik.handleChange}/>
          <input className="row-3-input" type="text" name="serves" placeholder="Serves" value={formik.values.serves} onChange={formik.handleChange}/>
        </div>
        <div className="row">
          <div className="column">
            <input className="row-4-input" type="text" placeholder="Ingredient" value={name} onChange={(event) => {setName(event.target.value)}}/>
            <input className="row-4-input" type="text" placeholder="Quantity" value={quantity} onChange={(event) => {setQuantity(event.target.value)}}/>
          </div>
          <ul className="column ingredient-list">
            {ingredientDisplay}
          </ul>
        </div>
        <button className="orange-btn" type="button" onClick={addIngredients}>Add Ingredient</button>
        <textarea className="text-area" cols="30" rows="10" name="instructions" placeholder="What are the instuctions?" value={formik.values.instructions} onChange={formik.handleChange}/>
        <button type="submit">Submit</button>

      </form>
    </section>
  );
};

export default NewRecipeScreen;
