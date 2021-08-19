import React from 'react'
import {withRouter} from 'react-router-dom'
import './main-section.styles.scss'
import Bag from '../../assets/photo-2.jpg'


function MainSection({history}) {
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="ms-m-image">
                    <img src={Bag} alt="" />
                </div>
                <div className="ms-m-description">
                    <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi animi magnam rem dolores, rerum quidem ullam aliquam quo tempore natus,
                        alias obcaecati ipsam dignissimos fugiat corporis. Nostrum iure nulla aut?
                    </p>
                    <button className='button is-black' id='shop-now' onClick={() => history.push('/product/1')}>
                        studio bag
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainSection)
