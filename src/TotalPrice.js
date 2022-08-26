import React from 'react';
const TotalPrice=(props)=> {        
    const{ Total } = props ;          //functional componenet this is at the time of runtime react will pass this 
        return (                                //props in components side the bracket
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <div style={styles.cartIcon}>Total:{Total}</div>
                </div>
            </div>
        );
    


}




const styles = {
    cartIcon: {
        fontSize:25,
        marginRight: 20
    },
    nav:{
        background:'#4267b2',
        height:90,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    cartIconContainer:{
        position:'relative'
    }
    
    
}
export default TotalPrice;