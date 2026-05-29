import { useState } from 'react'
import './App.css'
import { TiShoppingCart } from "react-icons/ti"

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className="website-title">Kendall Hart Spinella</h1>

  <div className ='author-img'>
    <img src="/IMG_1701.jpg" alt="Picture of author Kendall Hart Spinella" className="main-img"/>
  </div>

  <div className ="text-box">
    <p className="textbox-txt">
      "To make art is to know the maker"
    </p>
    <p className = "initials">Kendall Hart Spinella</p>
  </div>

  {/* <div className = "nav-menu">
  <h2 className = "nav-item">About</h2>
  <h2 className = "nav-item">Poetry</h2>
  <h2 className = "nav-item">Prints</h2>
  <h2 className = "nav-item">Contact</h2>
  </div> */}

<div className="blurb-box">
  <p className="blurb">
 Kendall is a Portland-based poet and artist who believes that everyone is creative, 
 that the creative journey is always worth taking (no matter the outcome), and that art 
 is meant to be shared in community. So glad you’re here!
  </p>
  </div>

<div className="buy-book-container">  
  <h1 className="new-release-txt">New Release!</h1>

<a href = "https://www.amazon.com/dp/B0H13SMFNJ?dplnkId=eb24d6fa-bb25-4d9c-961b-10975a069077&nodl=1" target="_blank" rel="noreferrer">
  <button className="buy-button liquid">
    <TiShoppingCart className="cart-icon" /> Buy Now
  </button>
  </a>

   <div className ='book-img'>
    <img src="/Untitled_Artwork.png" alt="Picture of cover art of poetry book" className="book-cover-img"/>
  </div>

  <div className="book-blurb-box">
  <p className="book-blurb">
  <span className="book-title">A Million Wildflowers</span> is a collection of Kendall's reflections from her life
  as an attorney, an artist, and a friend. Written living her late twenties through
  truly unprecedented times, she hopes you can find yourself in these pages in the
  same way that writing poetry has always helped her find herself.
  </p>
  </div>
  </div>
  </>
  )
}

export default App