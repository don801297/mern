import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router-dom';

function Wallet() {

    
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

            <span className='icon' class="material-symbols-outlined"  onClick={handleclickW} style={{borderBottom:bor}} >
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

          <div className='icons' onClick={handleclickv} >
            <span className='icon' id='volleyball' class="material-symbols-outlined">
              sports_volleyball
            </span><h5 className='h-icon '>VOLLEYBALL</h5></div>
        </div> </section>







        <h1>easy steps for join our Prmie membership</h1>

        

        <div className="prime-box">

<div className="step-number">1</div>

<div className="titel-img-box">
  <div className="step-titel-box">
    Right on Top
  </div>
  <div className="button-img">
    <img id='join-button' src="./img/wallet.png" alt="button img" />
  </div>
</div>
<div className="titel-box">Click on Wallet button</div>
</div>


<div className="prime-box">

  <div className="step-number">2</div>

  <div className="titel-img-box">
    <div className="step-titel-box">
      Scroll Down
    </div>
    <div className="button-img">
      <img id='join-button' src="./img/join.png" alt="button img" />
    </div>
  </div>
  <div className="titel-box">Click on join button</div>
</div>


<div className="prime-box">

  <div className="step-number">3</div>

  <div className="titel-img-box">
    <div className="step-titel-box">
      Complite your Form
    </div>
    <div className="button-img">
      <img src="./img/card.png" alt="card img" />
    </div>
  </div>
  <div className="titel-box">Click on Submit button </div>
</div>



<div className="prime-box">

  <div className="step-number">4</div>

  <div className="titel-img-box">
    <div className="step-titel-box">
      Send To Admin
    </div>
    <div className="button-img">
      <img src="./img/whatsapp.png" alt="userid and password" />
    </div>
  </div>
  <div className="titel-box">Send Payment done Screenshot on whatsapp</div>
</div>



<div className="prime-box">

  <div className="step-number">5</div>

  <div className="titel-img-box">
    <div className="step-titel-box">
      Get your
    </div>
    <div className="button-img">
      <img src="./img/userid.png" alt="userid and password" />
    </div>
  </div>
  <div className="titel-box">Get your user id and password</div>
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

export default Wallet