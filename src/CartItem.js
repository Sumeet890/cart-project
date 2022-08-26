import React from 'react';


const CartItem =(props)=> {                 //want toconvert this class cartitem into functionAL CARTitem
    
        //  this.testing();
        // this is messy but using of bind inside the constructor so we can also use another method which is arrow in line 16
        // this.increaseQuantity=this.increaseQuantity.bind(this); if we have multiple event handler we can bind those components here inside the constructor
    
    //    testing(){
    //     var promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //              resolve('done');
    //          },5000);
    //      })
    //      promise.then(()=>{
    //          this.setState({
    //              qty:100
    //          });
    //         console.log('state',this.state);
    //      });
    //  }
    // increaseQuantity=()=> {
        // this.setState({
        //     qty:this.state.qty+1
        // })
        // this.state.qty+=1;
        // console.log("this.state", this.state);
           //  setState form 1  if i dont require the previous information then i can use object form which is form 1
        // this.setState({
        //     qty:this.state.qty+1
        // },()=>{}); we can pass the callback function function
        // setState form2 if i  require previous information then i sjhould use this function form ok
        // instead of passing object we will pass function instead setState so
        // this.setState((prevState)=>{
        //     return{
        //     qty:prevState.qty+1
        //     }
        // },()=>{
        //     console.log('this',this.state);
        // });
    //      this.setState((prevState)=>{
    //          return{
    //          qty:prevState.qty+1
    //          }
    //      });

    // }
    // decreaseQuantity=()=>{
    //     const{ qty }=this.state;
    //     if (qty==0)
    //     return;
    //     // this.state.qty-=1;
    //     // console.log('this',this.state);
    //     this.setState((prevState)=>{
    //         return{
    //         qty:prevState.qty-1
    //         }
    //     });
    // }
    
    // above arrow methodwill bind the function of this class automatically of instance class
    
        // console.log("this.props",this.props);
        const { price, title, qty } = props.product;
        const { product ,onIncreaseQuantity,onDecreaseQuantity ,onDeleteProduct} = props;
        return (

            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>           
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*buttons*/}
                        <img alt="increase" className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1660743462~hmac=213161c2285a8a45f5cbb938bbc0999b"
                            onClick={()=>onIncreaseQuantity(product)}/>
                        <img alt="decrease" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                        onClick={()=>onDecreaseQuantity(product)} />
                        <img alt="delete" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={()=>onDeleteProduct(product.id)} />
                    </div>
                </div>
            </div>
        );
    
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}
export default CartItem;