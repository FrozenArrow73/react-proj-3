import React, {useState} from "react";
import { useFormik } from "formik";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const addIngredients = () => {
    setIngredients([...ingredients, {name, quantity}])
    setName("")
    setQuantity("")

  }

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

const onSubmit = (values) => {
  values.ingredients = ingredients
  console.log(values)
}

const formik = useFormik({initialValues: initialValues, onSubmit: onSubmit})

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="recipeName" placeholder="Recipe Name" value={formik.values.recipeName} onChange={formik.handleChange}/>
        <input type="text" name="imageURL" placeholder="Image URL" value={formik.values.imageURL} onChange={formik.handleChange}/>
        <label htmlFor="cook">Cook</label>
        <input type="radio" name="type" id="cook" value="Cook" onChange={formik.handleChange}/>
        <label htmlFor="bake">Bake</label>
        <input type="radio" name="type" id="bake" value="Bake" onChange={formik.handleChange}/>
        <label htmlFor="drink">Drink</label>
        <input type="radio" name="type" id="drink" value="Drink" onChange={formik.handleChange}/>
        <input type="text" name="prepTime" placeholder="Prep Time" value={formik.values.prepTime} onChange={formik.handleChange}/>
        <input type="text" name="cookTime" placeholder="Cook time" value={formik.values.cookTime} onChange={formik.handleChange}/>
        <input type="text" name="serves" placeholder="Serves" value={formik.values.serves} onChange={formik.handleChange}/>
        <input type="text" placeholder="Ingredient" value={name} onChange={(event) => {setName(event.target.value)}}/>
        <input type="text" placeholder="Quantity" value={quantity} onChange={(event) => {setQuantity(event.target.value)}}/>
        <button type="button" onClick={addIngredients}>Add Ingredient</button>
        <textarea cols="30" rows="10" name="instructions" placeholder="What are the instuctions?" value={formik.values.instructions} onChange={formik.handleChange}/>
        <button type="submit">Submit</button>

      </form>
    </section>
  );
};

export default NewRecipeScreen;
