import React, { useEffect, useState } from 'react'
import './App.css';
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'

function App() {
  var list = [{ "img": img1, "name": "Biriyani", "rupees": "120" },
  { "img": img2, "name": "Grill", "rupees": "130" },
  { "img": img3, "name": "Fish", "rupees": "150" },
  { "img": img4, "name": "Burger", "rupees": "170" },
  { "img": img5, "name": "Pran", "rupees": "190" },
  { "img": img6, "name": "Vegitable salad", "rupees": "200" },
  { "img": img7, "name": "French fries", "rupees": "210" },
  { "img": img8, "name": "Oats", "rupees": "250" }]
  const [cartItem, setCardItem] = useState();
  useEffect(() => {
    let localVal = sessionStorage.getItem("cartItem") ? JSON.parse(sessionStorage.getItem("cartItem")) : [];
    setCardItem(localVal)
    //eslint-disable-next-line
  }, [sessionStorage.getItem("cartItem")])
  const handleCart = (data) => {
    if (sessionStorage.getItem("cartItem")) {
      let x = [...JSON.parse(sessionStorage.getItem("cartItem"))]
      x?.push(data)
      setCardItem(x)
      sessionStorage.setItem("cartItem", JSON.stringify(x))
    }
    else {
      setCardItem([data])
      sessionStorage.setItem("cartItem", JSON.stringify([data]))
    }
  }
  const handleRemoveCart = (data) => {
    let x = cartItem.filter((item) => item !== data);
    setCardItem(x)
    sessionStorage.setItem("cartItem", JSON.stringify(x))
  }
  return (
    <div className="App">
      <div className="d-flex justify-content-between p-3 align-items-center header fixed-top position-relative">
        <label className="h5">Food Delight</label>
        <div role="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <span className="position-relative"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
            {
              cartItem?.length > 0 &&
              <span className="position-absolute top-0 start-70 translate-middle p-1 bg-danger border border-light rounded-circle">
              </span>
            }
          </span></div>
      </div>
      <div className="container">
        <div className="row">
          {
            list?.map((it, ind) => (
              <div className="col-lg-3 mt-4 d-flex justify-content-center" key={ind}>
                <div className="card">
                  <img src={it?.img} className="card-img-top rounded-top" alt={`food${ind}`} />
                  <div className="card-body">
                    <h6 className="card-title text-start">{it?.name}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>{it?.rupees}</label>
                      <button className="btn btn-sm btnColour" title="Add to cart" onClick={() => handleCart(it)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                      </svg></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='fixed-bottom header'>
      <label className="h5"></label>
      </div>
      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5>Card Items</h5>
              {
                cartItem?.length > 0 ?
                  cartItem?.map((it, ind) => (
                    <div className='row mb-2 border align-items-center' key={ind}>
                      <div className='col'>
                        <img src={it?.img} className='cartImg' alt={it?.img} />
                      </div>
                      <div className='col'>
                        <div className="fw-bold">{it?.name}</div>
                        <div className='card-title'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                        </svg>{it?.rupees}</div>
                      </div>
                      <div className='col' title='Remove from cart' role='button' onClick={() => handleRemoveCart(it)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash text-danger" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </div>
                    </div>
                  ))
                  :
                  <div className='text-muted'>No items found</div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
