import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'                                                                                                                                                                                                                                                                                                                  

const Home = () => {

    const {allCoin, currency} = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');

    const inputHandler = (event) =>{
        setInput(event.target.value);
        if(event.target.value === ''){
            setDisplayCoin(allCoin)
        }
    }

    const searchHandler = async (event)=>{
        event.preventDefault();
        const coins = await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

    useEffect(() => {
        setDisplayCoin(allCoin)
    }, [allCoin])

  return (

    <section>

<div class="container my-5 herotxt">
  <div class="position-relative p-5 text-center text-muted border border-dashed rounded-5" style={{background:"linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))"}}>
    
   
    <h1 class="text-emphasis lg-6 mx-auto mb-4"  style={{color:"white", fontFamily:"Outfit"}}>Track Cryptocurrency Prices</h1>
    <p class="col-lg-6 mx-auto mb-4" style={{fontSize:"28px"}}>
    Explore live updates, historical data, and news across hundreds of cryptocurrencies. Build and manage your portfolio effortlessly!
    </p>
    <a href="#searchBar"><button class="btn btn-primary px-5 mb-5" type="button">
      Start tracking now! 
    </button></a>
  </div>
</div>




<div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Features of CryptEye:</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" style={{borderRadius:"20%"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16" style={{padding:"5px", borderRadius:"20%"}}>
  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
</svg>
        </div>
        <h3 class="fs-2 text-emphasis" style={{color:"white"}}>Real-Time Price Updates</h3>
        <p>Stay updated with live prices of hundreds of cryptocurrencies, ensuring you have the latest market data at your fingertips.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" style={{borderRadius:"20%"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16" style={{padding:"5px", borderRadius:"20%"}}>
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
</svg>
        </div>
        <h3 class="fs-2 text-emphasis" style={{color:"white"}}>Interactive Charts</h3>
        <p>Visualize price trends and historical data through interactive charts, making it easy to analyze and track cryptocurrency performance over time.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" style={{borderRadius:"20%"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" style={{padding:"5px", borderRadius:"20%"}}>
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
        </div>
        <h3 class="fs-2 text-emphasis" style={{color:"white"}}>User-Friendly Interface</h3>
        <p>Enjoy a clean and intuitive interface designed for ease of use. Whether you're a beginner or an experienced trader, CryptEye provides a seamless experience.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
  </div>




<div className='home'>
        <div className='hero'>
            <form onSubmit={searchHandler}>
                <input onChange={inputHandler} list='coinlist' value={input} style={{color:"black"}} type="text" placeholder='Search Crypto...' required/>

                 <datalist id='coinlist'>{allCoin.map((item, index) => (<option key={index} value={item.name} />))}
                    </datalist>   


                <button id='searchBar' type='submit'>Search</button>


            </form>
        </div>

      



        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24h Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>

            {
                displayCoin.slice(0,10).map((item, index) => (
                    <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                        <p>{item.market_cap_rank}</p>
                        <div>
                            <img src={item.image} alt="" />
                            <p>{item.name + ' - '  +item.symbol}</p>
                            </div>    
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                                {Math.floor(item.price_change_percentage_24h * 100)/100}</p>
                            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        
                    </Link>
                ))
            }


        </div>

    </div>

    </section>


    

  )
}

export default Home