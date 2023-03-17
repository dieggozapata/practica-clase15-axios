import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Product = () => {
    const [product, setProduct] = useState([])
    const url = 'http://localhost:5173/api/products'    
    useEffect( () => {        
        axios(url).then(res => setProduct(res.data.products))
    }, [])        
  return (    
    <div style={{display:'flex', flexDirection:'row'}}>        
        {
            product.map( prod => {
                return(
                    <div id={prod.id} className='card'>
                        <h2>{prod.title}</h2>
                        <h3>{prod.description}</h3>
                        <h3>{prod.price}</h3>
                        <h3>{prod.stock}</h3>
                        <h3>{prod.brand}</h3>
                        <h3>{prod.category}</h3>
                        <img src={prod.image} alt="" width={200}/>
                    </div>
                )
            })        
        }        
    </div>
  )
}

export default Product