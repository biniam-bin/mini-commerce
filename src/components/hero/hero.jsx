import React from 'react'
import './hero.styles.scss'


function Hero() {
    return (
        <section className="hero is-info is-large hero-image">
            <div className="hero-body">
                <div className="container">
                    <h1 className="hero-title">
                        Lorem, ipsum dolor.
                    </h1>

                    <div className="shop-now-btn">
                        <button className="button is-black">
                            Shop now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
