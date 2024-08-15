import {Component} from 'react'
import AllProductsSection from '../AllProductsSection'

import Header from '../Header'

import './index.css'

class Products extends Component {
  state = {isChecked: false}
  onCheckout = () => {
    this.setState({isChecked: true})
  }
  render() {
    const {isChecked} = this.state
    return (
      <>
        <Header onCheckout={this.onCheckout} />
        <div className="product-sections">
          <AllProductsSection isChecked={isChecked} />
        </div>
      </>
    )
  }
}

export default Products
