import React from 'react';
const Navbar=(props)=> {                    //functional componenet this is at the time of runtime react will pass this 
        return (                                //props in components side the bracket
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} alt="cart-icon" src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1660991395~hmac=879d8838385804ce5d2ba480e6209a37" />
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
    


}




const styles = {
    cartIcon: {
        height: 51,
        marginRight: 20
    },
    nav:{
        background:'#4267b2',
        height:100,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right: 0,
        top: -9
    }
    
}
export default Navbar;