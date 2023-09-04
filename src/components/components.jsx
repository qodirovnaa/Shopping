import React from 'react'
import './components.css'


const components = () => {
  return (
    <div>
        <div className='div'>
            <h1>Trading Collaction </h1>
            <h5>Check out most promising product bought buy our buyers</h5>

            <div className='div2'>
            <div className="card">
               <div className="box">
               <h5>Kids</h5>
                <h1>Kurti Full Sleev</h1>
                <h1 className='yashil'>$200</h1>
                <h3>$300</h3>
               </div>
            </div>
            <div className="card">
               <div className="box">
               <h5>Women</h5>
                <h1>Silk Saree - Printied</h1>
                <h1 className='yashil'>$320</h1>
                <h3>$410</h3>
               </div>
            </div>
            <div className="card">
               <div className="box">
               <h5>Men</h5>
                <h1>Multi Purpose Jacket</h1>
                <h1 className='yashil'>$510</h1>
                <h3>$705</h3>
               </div>
            </div>
            <div className="card">
                <div className="box">
                <h5>Men</h5>
                <h1>Jacket</h1>
                <h1 className='yashil'>$400</h1>
                <h3>$480</h3>
                </div>
            </div>
        </div>
        </div>

        
    </div>
  )
}

export default components