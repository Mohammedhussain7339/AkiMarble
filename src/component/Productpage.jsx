import React from 'react'
import { Link } from 'react-router-dom'

function Productpage() {
  const products = [
    { id: 1, name: 'Product1', price: 'Rs. 4000', imageUrl: 'https://images.unsplash.com/photo-1667400104789-f50a4cb393cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcmJsZSUyMHV0aWxpdGllc3xlbnwwfHwwfHx8MA%3D%3D' },
    // Add more products here
  ];

  return (
    <><div>
    <div className="productpage">
        <div className="productbox">
          <img className='img1' src="https://images.unsplash.com/photo-1667400104789-f50a4cb393cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcmJsZSUyMHV0aWxpdGllc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <img className='img2' src="https://media.istockphoto.com/id/1165210770/photo/bahai-gardens-haifa-israel.jpg?s=2048x2048&w=is&k=20&c=ZfikDgVXEWWf9ilA1k_pfULs07kQCWe_n-ZiLvwUGvw=" alt="" />
          <div style={{position:'absolute',bottom:'25px',left:"90px"}}>
          <b>Product1</b>
          <p>Rs. 4000</p>
          </div>
        </div>
        <div className="productbox"></div>
        <div className="productbox"></div>
        <div className="productbox"></div>
        <div className="productbox"></div>
        <div className="productbox"></div>
    </div>
    <div className='viewbox'>
        <Link style={{padding:'15px 40px',borderRadius:'5px',background:'black',color:'white',fontSize:'18px'}}>View All</Link>
    </div>
        </div>
    </>
  )
}

export default Productpage
