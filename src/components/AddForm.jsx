import { useState } from "react"

function AddForm(props) {

  const [ nameValue, setNameValue] = useState("");
  const [ priceValue, setPriceValue] = useState(0);

  const handleChange = (event) => {
    // if(event.target.name === "name") setNameValue(event.target.value.toUpperCase());
    if(event.target.name === "name") setNameValue(event.target.value);
    else if(event.target.name === "price") setPriceValue(event.target.value);
  }

  const handleAddProduct = (event) => {
    event.preventDefault();
    
    //recopilar datos del formulario
    const newProduct = {
      name : nameValue,
      price: Number(priceValue),
      isPurchased: false
    }
    console.log(newProduct);

    //1 agregar el producto
    // const cloneProducts = [...props.allProducts];
    // cloneProducts.unshift(newProduct);
    // props.setAllProducts(cloneProducts);
    // props.setAllProducts([newProduct,...props.allProducts]);

    //2 agregar el producto con callback function
    props.setAllProducts((currentValue)=> [newProduct,...currentValue]);

  }
  
  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleChange} value={nameValue} type="text" name="name" />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input onChange={handleChange} value={priceValue} type="number" name="price" />
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm