import './foot.css'
import { FaShippingFast, FaWallet, FaPiggyBank } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";

import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="pied">
        <div className="container">
          <div className="box">
            <div className="about">
              <div className="row">
                <div className='row1'><FaShippingFast /></div>
                <div className="row2">
                  <h1>Fast delivery</h1>
                  <p>Lorem ipsum dolor sit .</p>
                </div>
                <div className='row1'><FaPiggyBank /></div>
                <div className="row2">
                  <h1>Great Saving</h1>
                  <p>Lorem ipsum dolor sit .</p>
                </div>
                <div className='row1'><SlEarphones /></div>
                <div className="row2">
                  <h1>24/7 Support</h1>
                  <p>Lorem ipsum dolor sit .</p>
                </div>
                <div className='row1'><FaWallet /></div>
                <div className="row2">
                  <h1>Money back</h1>
                  <p>Lorem ipsum dolor sit .</p>
                </div>
              </div>
            </div>
            <div className="deliv">
              <h2>delivery</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
