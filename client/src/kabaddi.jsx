import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router-dom';

function Kabaddi() {

    
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

          <div className="icons nav1-icons"> <span className='icon' class="material-symbols-outlined" onClick={handleclickN}>
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

          <div className='icons' onClick={handleclickk} style={{borderBottom:bor}}>
            <span className='icon' class="material-symbols-outlined">
              sports_kabaddi
            </span>
            <h5 className='h-icon'>Kabaddi</h5></div>

          <div className='icons' onClick={handleclickF} >

            <span className='icon' class="material-symbols-outlined">
              sports_soccer
            </span><h5 className='h-icon'>Football</h5></div>

          <div className='icons' onClick={handleclickv} >
            <span className='icon' id='volleyball' class="material-symbols-outlined">
              sports_volleyball
            </span><h5 className='h-icon '>VOLLEYBALL</h5></div>
        </div> </section>

        <h3>Upcoming Kabaddi Matches</h3>

<div className="box">
  <div className="line-first"> <div className="l-name">Velammal Yuva kabaddi-tamil.. </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img9"></div>
    <div className="team-name-sort sort1">SRM</div>

    <div className="time1">24 May</div>
  
    <div className="team-name-sort sort2">SGW</div>
    <div className="log-img img10"></div>
  </div>
<div className="team-name-full">
  <div className="full1">SRM University</div>
  <div className="full2">Sivagangi Warri..</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">Coming soon
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>






<div className="box">
  <div className="line-first"> <div className="l-name">Velammal Yuva kabaddi-tamil.. </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img11"></div>
    <div className="team-name-sort sort1">CHE</div>

    <div className="time1">25 May</div>
  
    <div className="team-name-sort sort2">AMK</div>
    <div className="log-img img12"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Chennai Sports</div>
  <div className="full2">AMKC Gobi</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">Coming soon
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>

<div className="footer  debit-footer">
<img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
<h3 id='footer-heading'>
  100% Safe and Secure
</h3>
  
</div>
    </>
  )
}

export default Kabaddi
