import React from 'react'
import {FaShoppingCart} from "react-icons/fa"


class CartWidget extends React.Component {
  render() {
    return <a id='CartWidget'> <FaShoppingCart/> </a>
  }
}

export default CartWidget