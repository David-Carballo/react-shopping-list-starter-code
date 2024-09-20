
function ProductCard(props) {

  const handleBuy = ()=>{
    console.log("COmprado", props.index);

    props.setAllProducts((current) => {
      //hacer deep clon
      const clone = structuredClone(current)

      clone{props.index}.isPurchased = true;

      return clone;
    })
  }

  return (
    <div className="product-card" >
      <h3>{props.eachProduct.name}</h3>
      <p>{props.eachProduct.price}€</p>
      <p>{props.eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  )
}

export default ProductCard