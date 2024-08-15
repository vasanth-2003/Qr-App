import Header from '../Header'
import {Component} from 'react'
import './index.css'

const Cart = props => {
  const {productsIds, total} = props
  console.log(productsIds)
  const filtered = JSON.stringify(productsIds)
  const newString = filtered.slice(1, filtered.length - 1)
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${newString}`

  return (
    <div className="bill_bg">
      <div className="bill_cont">
        <img src={url} alt="cart" className="cart-img" />
        <h1 className="cafename">REC CAFE</h1>
        <hr className="line" />
        <ul>
          <li className="bill_data">
            <p className="order">Food</p>
            <p className="order">Price</p>
          </li>

          {productsIds.map(each => (
            <li className="bill_data">
              <p className="style">{each.foodName} :</p>
              <p className="style">$ {each.price}</p>
            </li>
          ))}
        </ul>
        <hr className="dot_line" />
        <div className="total_cont">
          <p className="style">TOTAL :</p>
          <p className="style">$ {total}/-</p>
        </div>
      </div>
    </div>
  )

  /*return (
    <>
      <div className="cart-container">
        <img src={url} alt="cart" className="cart-img" />
        <h1 className="cafename">REC CAFE</h1>

        <ul className="bill_cont">
          <li className="bill_data">
            <p className="order">Food</p>
            <p className="order">Price</p>
          </li>
          <hr className="line" />
          {productsIds.map(each => (
            <li className="bill_data">
              <p className="style">{each.foodName}</p>
              <p className="style">$ {each.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )*/
}

export default Cart
