import {Component} from 'react'
import data from '../Jsonfolder/new.json'
import ProductCard from '../ProductCard'
import Cart from '../Cart'
import './index.css'

const menu = [
  {
    id: 1,
    foodName: 'Ice Cream',
    price: 20,
    rating: 4.7,
    isAdded: false,
    imgUrl:
      'https://img.freepik.com/free-photo/cornet-ice-cream-with-strawberry-scoop-colorful-surface_463209-35.jpg?t=st=1722786330~exp=1722789930~hmac=d4695f96a502de5397337e45df38b3c6c3d0cdc0f51133c4ba0b9346eb9a561d&w=360',
  },
  {
    id: 2,
    foodName: 'Cofee',
    price: 15,
    rating: 3.5,
    isAdded: false,
    imgUrl:
      'https://img.freepik.com/premium-photo/cup-cappuccino-with-latte-art-white-background-generative-ai_379823-8818.jpg?w=360',
  },
  {
    id: 3,
    foodName: 'Samosa',
    price: 10,
    rating: 4.3,
    isAdded: false,
    imgUrl:
      'https://img.freepik.com/premium-photo/veg-samosa-is-crispy-spicy-indian-triangle-shape-snack-which-has-crisp-outer-layer-maida-filling-mashed-potato-peas-spices_466689-72873.jpg?ga=GA1.1.987153157.1716293737&semt=sph',
  },
  {
    id: 4,
    foodName: 'Puff',
    price: 15,
    rating: 4.5,
    isAdded: false,
    imgUrl:
      'https://img.freepik.com/free-photo/pie-healthy-crust-food-dinner_1203-5545.jpg?ga=GA1.1.987153157.1716293737&semt=sph',
  },
  {
    id: 5,
    foodName: 'Chips',
    price: 10,
    rating: 3.2,
    isAdded: false,
    imgUrl:
      'https://img.freepik.com/free-photo/rippled-potato-thin-salt-pile_1339-46.jpg?ga=GA1.1.987153157.1716293737&semt=ais_hybrid',
  },
  {
    id: 6,
    foodName: 'Sweet Corn',
    price: 20,
    rating: 4.6,
    isAdded: false,
    imgUrl:
      'https://img.freepik.com/premium-photo/spicy-masala-sweet-corn-is-tasty-roadside-indian-snack-which-is-very-easy-make-selective-focus_466689-51347.jpg?ga=GA1.1.987153157.1716293737&semt=ais_hybrid',
  },
]

class AllProductsSection extends Component {
  state = {
    productsIds: [],
    initialproducts: menu,
    total: 0,
    qrimg: '',
  }
  onAdding = (foodName, price, id) => {
    const {productsIds, initialproducts,total} = this.state

    const addata = {
      foodName: foodName,
      price: price,
    }

    this.setState(prevState => ({
      productsIds: [...prevState.productsIds, addata],
      total: prevState.total + price,
      initialproducts: prevState.initialproducts.map(each => {
        if (id === each.id) {
          return {
            ...each,
            isAdded: !each.isAdded, 
          }
        }
        return each
      }),
    }))

    /*this.setState(prevState => {
      return {
        productsIds: [...prevState.productsIds, addata],
        total: prevState.total + price,
        isAdded: !prevState.isAdded,
      }
    })*/
  }

  renderProductsList = () => {
    const {initialproducts} = this.state
    return (
      <div className="product_cont">
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {initialproducts.map(product => (
            <ProductCard
              productData={product}
              key={product.id}
              onAdding={this.onAdding}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {productsIds, total} = this.state
    const {isChecked} = this.props

    return (
      <>
        {isChecked ? (
          <Cart productsIds={productsIds} total={total} />
        ) : (
          this.renderProductsList()
        )}
      </>
    )
  }
}

export default AllProductsSection
