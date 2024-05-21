import { useState } from 'react'


import './App.css'
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';

function App() {

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

          <div className="icons nav1-icons"> <span className='icon' class="material-symbols-outlined"  onClick={handleclickN}>
            notifications_active
          </span>

            <span className='icon' class="material-symbols-outlined"   onClick={handleclickW}>
              account_balance_wallet
            </span>

          </div>

        </div>

        <div className="nav2"> <div className='icons' onClick={handleclick} style={{borderBottom:bor}}>

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

          <div className='icons' onClick={handleclickv} >
            <span className='icon' id='volleyball' class="material-symbols-outlined">
              sports_volleyball
            </span><h5 className='h-icon '>VOLLEYBALL</h5></div>
        </div> </section>

        <h3>Upcoming Matches</h3>






<div className="box">
  <div className="line-first"> <div className="l-name">Indian T20 League </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img1"></div>
    <div className="team-name-sort sort1">KKR</div>

    <div className="time1">07:30PM</div>
  
    <div className="team-name-sort sort2">SRH</div>
    <div className="log-img img2"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Kolkata knight Ri..</div>
  <div className="full2">Sunrisers Hydera..</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹60 Crores
</div>
</div>
<div className="bell"><span id='box-bell' class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>






<div className="box">
  <div className="line-first"> <div className="l-name">USA vs Bangladesh T20L </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img3"></div>
    <div className="team-name-sort sort1">USA</div>

    <div className="time1">08:30PM</div>
  
    <div className="team-name-sort sort2">BAN</div>
    <div className="log-img img4"></div>
  </div>
<div className="team-name-full">
  <div className="full1">USA</div>
  <div className="full2">Bangladesh</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹1 Crores
</div>
</div>
<div className="bell"><span id='box-bell' class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>






<div className="box">
  <div className="line-first"> <div className="l-name">Eng Wom.. vs Pak Wom.. T20l  </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img5"></div>
    <div className="team-name-sort sort1">EN-W</div>

    <div className="time1">03:30PM</div>
  
    <div className="team-name-sort sort2">PK-W</div>
    <div className="log-img img6"></div>
  </div>
<div className="team-name-full">
  <div className="full1">England Women</div>
  <div className="full2">Pakistak Women</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹1.5 Lakhs
</div>
</div>
<div className="bell"><span id='box-bell' class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>



<div className="box">
  <div className="line-first"> <div className="l-name">UAE Emirrates D10 Tournament </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img7"></div>
    <div className="team-name-sort sort1">ABD</div>

    <div className="time1">11:15PM</div>
  
    <div className="team-name-sort sort2">AJM</div>
    <div className="log-img img8"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Abu Dhabi</div>
  <div className="full2">Ajman</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹11.5 Lakhs
</div>
</div>
<div className="bell"><span id='box-bell' class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>



<a  href="/Payment-options" id='prime-membership'>JOIN NOW</a>


<div className="footer">
<img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
<h3 id='footer-heading'>
  100% Safe and Secure
</h3>
  
</div>

    </>
  )
}
export default App
