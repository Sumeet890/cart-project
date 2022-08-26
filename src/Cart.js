import React from 'react';
import CartItem from './CartItem';

const Cart=(props)=> {
    // constructor() {
    //     super();
    //     this.state = {
    //         products:[
    //         {
    //         price: 1199,
    //         title: 'Watch',
    //         qty: 1,
    //         img: '',
    //         id:1
    //         },
    //         {
    //             price: 23000,
    //         title: 'Mobile phone',
    //         qty: 10,
    //         img: '',
    //         id:2
    //         },
    //         {
    //             price: 75000,
    //         title: 'Laptop',
    //         qty: 4,
    //         img: '',
    //         id:3
    //         }
    //     ]
    //     }
    // }
    // handleIncreaseQuantity=(product)=>{
    //     console.log("hey please inc the quantity of",product)
    //     const {products}=this.state;
    //     const index =products.indexOf(product);
    //     products[index].qty+=1;
    //     this.setState({
    //         products
    //     })
    // }
    // handleDecreaseQuantity=(product)=>{
    //     console.log("hey please inc the quantity of",product)
    //     const {products}=this.state;
    //     const index =products.indexOf(product);
    //     if(products[index].qty===0){
    //         return;
    //     }
    //     products[index].qty-=1;
    //     this.setState({
    //         products
    //     })
    // }
    // handleDeleteProduct=(id)=>{
    //     const{ products }=this.state;
    //     const items=products.filter((item)=> item.id !==id);  //({})return another array whose id is not qual to item
    //     this.setState({
    //         products:items
    //     })  
    // }
        const { products }= props;
        // const name=[1,2,3,4,5];this show that how we can render the list of item in componenet iteration method to iterate over name arr using map
        return(
             <div className="Cart">
                {products.map((product)=>{
                    return <CartItem product={product}
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}/>
                })}
             </div>
            
        );
    
}
export default Cart;