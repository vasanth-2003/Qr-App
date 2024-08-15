import './index.css'

const ProductCard = props => {
  const {productData, onAdding} = props
  const {id, foodName, imgUrl, price, rating, isAdded} = productData
  const onAdded = () => {
    onAdding(foodName, price, id)
  }

  return (
    <li className="product-item">
      <img src={imgUrl} alt="product" className="thumbnail" />
      <h1 className="title">{foodName}</h1>
      <p className="brand">From Rec Cafe</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
      {isAdded ? (
        <button className="added_btn" onClick={onAdded}>
          Added
        </button>
      ) : (
        <button className="add_btn" onClick={onAdded}>
          Add
        </button>
      )}
    </li>
  )
}
export default ProductCard
