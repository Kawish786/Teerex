import React from 'react'
import './Filter.css'

function Filter() {
  return (
    <>
    <div className='filteradjust'>
    <div className='filter'>
        <label className='lable'>Color</label>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Blue
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Green
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Red
            </label>
        </div>
    </div>

    <div className='filter'>
    <label className='lable'>Gender</label>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Male
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Female
            </label>
        </div>
    </div>

    <div className='filter'>
        <label className='lable'>Price</label>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                0-Rs. 250
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Rs.250-Rs.450
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Rs. 450
            </label>
        </div>
    </div>

    <div className='filter'>
        <label className='lable'>Type</label>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Polo
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Hoodie
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Round
            </label>
        </div>
    </div>
    </div>
    </>
  )
}

export default Filter