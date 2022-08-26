import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import TotalPrice from './TotalPrice';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 1199,
          title: 'Watch',
          qty: 1,
          img: 'https://media.istockphoto.com/photos/military-style-watch-picture-id650233226?k=20&m=650233226&s=170667a&w=0&h=osLkJwCIhIrEVXIBLtSDuEdLJONkPVAx0ojjzY80YZw=',
          id: 1
        },
        {
          price: 23000,
          title: 'Mobile phone',
          qty: 10,
          img: 'https://i.gadgets360cdn.com/products/large/micromax-in-2b-1-414x800-1627626668.jpg?downsize=240:*',
          id: 2
        },
        {
          price: 75000,
          title: 'Laptop',
          qty: 4,
          img: 'https://rukminim1.flixcart.com/image/416/416/k5fn3ww0/computer/p/8/h/marq-by-flipkart-na-thin-and-light-laptop-original-imafz43yb85z3hah.jpeg?q=70',
          id: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    console.log("hey please inc the quantity of", product)
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log("hey please inc the quantity of", product)
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);  //({})return another array whose id is not qual to item
    this.setState({
      products: items
    })
  }
  getCartCount = (product) => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty
    })
    return count;
  }
  getCartTotal=()=>{
    const{ products }=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price
    })
    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct} />
        <TotalPrice Total={this.getCartTotal()}/>
         {/*// <div style={{fontSize:20,padding: 10}}>TOTAL: {this.getCartTotal()}</div> */}      
      </div> 
    );
  }       // we can also follow steps of line 92 directly without creating another js file
}

export default App;
