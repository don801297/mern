import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router-dom';

function Football() {

    
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

          <div className="icons  nav1-icons"> <span className='icon' class="material-symbols-outlined"   onClick={handleclickN}>
            notifications_active
          </span>

            <span className='icon' class="material-symbols-outlined"  onClick={handleclickW}>
              account_balance_wallet
            </span>

          </div>

        </div>

        <div className="nav2"> <div className='icons' onClick={handleclick}>

          <span className='icon' class="material-symbols-outlined">
            sports_baseball
          </span> <h5 className='h-icon'>CRICKET</h5></div>

          <div className='icons' onClick={handleclickk}>
            <span className='icon' class="material-symbols-outlined">
              sports_kabaddi
            </span>
            <h5 className='h-icon'>Kabaddi</h5></div>

          <div className='icons' onClick={handleclickF}  style={{borderBottom:bor}}>

            <span className='icon' class="material-symbols-outlined">
              sports_soccer
            </span><h5 className='h-icon'>Football</h5></div>

          <div className='icons' onClick={handleclickv}>
            <span className='icon' id='volleyball' class="material-symbols-outlined">
              sports_volleyball
            </span><h5 className='h-icon '>VOLLEYBALL</h5></div>
        </div> </section>

        <h3>Upcoming Football Match</h3>

<div className="box">
  <div className="line-first"> <div className="l-name">Egypt Premier League </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img13"></div>
    <div className="team-name-sort sort1">NB</div>

    <div className="time1">06:30 PM</div>
  
    <div className="team-name-sort sort2">ISC</div>
    <div className="log-img img14"></div>
  </div>
<div className="team-name-full">
  <div className="full1">National Bank Of...</div>
  <div className="full2">Ismail SC</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹1 Lakhs
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>




<div className="box">
  <div className="line-first"> <div className="l-name">U-17 Euros</div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img15"></div>
    <div className="team-name-sort sort1">UR-U17</div>

    <div className="time1">11:00 PM</div>
  
    <div className="team-name-sort sort2">CY-U17</div>
    <div className="log-img img16"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Ukraine U17</div>
  <div className="full2">Cyprus U17</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹1 Lakhs
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>




<div className="box">
  <div className="line-first"> <div className="l-name">U-17 Euros </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img17"></div>
    <div className="team-name-sort sort1">PT-U17</div>

    <div className="time1">Tomorrow</div>
  
    <div className="team-name-sort sort2">FR-U17</div>
    <div className="log-img img18"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Portugal U17</div>
  <div className="full2">France U17</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">Coming Soon
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>




<div className="footer">
<img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
<h3 id='footer-heading'>
  100% Safe and Secure
</h3>
  
</div>
    </>
  )
}

export default Football
