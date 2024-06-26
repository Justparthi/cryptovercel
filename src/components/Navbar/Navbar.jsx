import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/Crypteye5.png'
import arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event)=> {
    switch (event.target.value){
      case "usd" : {
        setCurrency({name:"usd", symbol:"$"});
        break;
      }
      case "eur" : {
        setCurrency({name:"eur", symbol:"€"});
        break;
      }
      case "inr" : {
        setCurrency({name:"inr", symbol:"₹"});
        break;
      }
      default : {
        setCurrency({name:"usd", symbol:"$"});
        break;
      }
    }
  }

  return (
    // <div className='navbar'>
    //   <Link to={'/'}>
    //   <img src={logo} alt="" className='logo'/>
    //   </Link>
   
    // <ul>
    //   <Link to={'/'}>
    //   <li>Home</li>
    //   </Link>
    //     <li>Feature</li>
    //     <li>Pricing</li>
    //     <li>Blog</li>
    // </ul>

    // <div className='nav-right'>
    //     <select name="" id="" onChange={currencyHandler}>
    //         <option value="usd">USD</option>
    //         <option value="eur">EUR</option>
    //         <option value="inr">INR</option>
    //     </select>

    //     <button>Sign Up <img src={arrow} alt="" /></button>

    // </div>
    
    


    <div class="container" >
       
    <header class="d-flex flex-wrap  sticky-top align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <Link to={'/'}>
      <img src={logo} alt="" className='logo'/>
      </Link>
        </a>
      </div>

      <ul class="nav  col-12 col-md-auto mb-2 justify-content-center mb-md-0" style={{color:"purple"}}>
        <li><a href="/" class="nav-link px-2">Home</a></li>
        <li><a href="#featured-3" class="nav-link px-2">Features</a></li>
        <li><a href="#searchBar" class="nav-link px-2">Info</a></li>
        <li><a href="#footerArea" class="nav-link px-2">Contact</a></li>
      </ul>

      <div class="col-md-3 text-end">
      <select class="form-select" aria-label="Default select example" onChange={currencyHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="inr">INR</option>
      </select>

    
    
        
      </div>
    </header>
  </div>

  )
}

export default Navbar