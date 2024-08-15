import Header from '../Header'
import './index.css'

const Home = props => {
  const onshoping = () => {
    const {history} = props
    history.replace('/products')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Food That You Need</h1>
          <img
            src="https://img.freepik.com/premium-vector/italian-food-restaurant-cafeteria-illustration-with-traditional-italy-dishes-pizza-pasta_2175-23488.jpg?ga=GA1.1.987153157.1716293737&semt=sph"
            alt="clothes to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Order food effortlessly with our new online platform! Enjoy a wide
            variety of cuisines from your favorite local restaurants, all at
            your fingertips. With a user-friendly interface, personalized
            recommendations, and fast, reliable delivery, satisfying your
            cravings has never been easier. Experience convenience, quality, and
            taste like never before, order now and delight in the ultimate food
            experience!
          </p>
          <button type="button" className="shop-now-button" onClick={onshoping}>
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
