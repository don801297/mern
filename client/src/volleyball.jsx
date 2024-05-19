import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router-dom';

function Volleyball() {

    const [ bor, setBor] = useState("2px solid white")

    const navigate = useNavigate();
  
  const handleclick = () =>{
    
    navigate("/")
    
    
    
  }
  
  const handleclickN = () =>{
    
    navigate("/Notify")
    
    
  }
  const handleclickW = () =>{
    
    navigate("/Wallet")
    
    
  }
  
  const handleclickk = () =>{
    
    navigate("/kabaddi")
    
    
  }
  
  const handleclickF = () =>{
    
    navigate("/football")
    
    
  }
  
  const handleclickv = () =>{
    
    navigate("/Volleyball")
    
    
  }
  return (
    <>


<section id='navbar'>
        <div className="nav1">

          <img src="./img/img1.png.webp" alt="fail to load img 1" />

          <div className="icons  nav1-icons"> <span className='icon' class="material-symbols-outlined"  onClick={handleclickN}>
            notifications_active
          </span>

            <span className='icon' class="material-symbols-outlined"  onClick={handleclickW} >
              account_balance_wallet
            </span>

          </div>

        </div>

        <div className="nav2"> <div className='icons' onClick={handleclick} >

          <span className='icon' class="material-symbols-outlined">
            sports_baseball
          </span> <h5 className='h-icon'>CRICKET</h5></div>

          <div className='icons' onClick={handleclickk} >
            <span className='icon' class="material-symbols-outlined">
              sports_kabaddi
            </span>
            <h5 className='h-icon'>Kabaddi</h5></div>

          <div className='icons' onClick={handleclickF} >

            <span className='icon' class="material-symbols-outlined">
              sports_soccer
            </span><h5 className='h-icon'>Football</h5></div>

          <div className='icons' onClick={handleclickv} style={{borderBottom:bor}}>
            <span className='icon' id='volleyball' class="material-symbols-outlined">
              sports_volleyball
            </span><h5 className='h-icon '>VOLLEYBALL</h5></div>
        </div> </section>



        <div className="notifaction">Sorry Today We don't
have any expensive matches.</div>
   


<div className="footer debit-footer">
<img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
<h3 id='footer-heading'>
  100% Safe and Secure
</h3>
  
</div>
    </>
  )
}

export default Volleyball
