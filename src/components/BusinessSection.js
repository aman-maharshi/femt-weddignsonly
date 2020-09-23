import React, { useState } from "react"

function BusinessSection() {
    const [currentNav, setCurrentNav] = useState(1)

    function handleClick(e) {
        e.preventDefault()
        if (e.target.textContent === "Payment Technologies") {
            setCurrentNav(prev => {
                return 1
            })
        }
        if (e.target.textContent === "Investing Basics") {
            setCurrentNav(prev => {
                return 2
            })
        }
        if (e.target.textContent === "Card Benefits") {
            setCurrentNav(prev => {
                return 3
            })
        }
        if (e.target.textContent === "Digital Wallets") {
            setCurrentNav(prev => {
                return 4
            })
        }
        if (e.target.textContent === "Find a Credit Card") {
            setCurrentNav(prev => {
                return 5
            })
        }
    }

    return (
        <section className="business-section">
            <div className="wrapper">
                <p className="business-section__title">Business Banking</p>
                <div className="business-section__nav">
                    <a onClick={handleClick} className={currentNav === 1 ? "business-section__nav-link business-section__nav-link--active" : "business-section__nav-link"} href="/#">
                        Payment Technologies
                    </a>
                    <a onClick={handleClick} className={currentNav === 2 ? "business-section__nav-link business-section__nav-link--active" : "business-section__nav-link"} href="/#">
                        Investing Basics
                    </a>
                    <a onClick={handleClick} className={currentNav === 3 ? "business-section__nav-link business-section__nav-link--active" : "business-section__nav-link"} href="/#">
                        Card Benefits
                    </a>
                    <a onClick={handleClick} className={currentNav === 4 ? "business-section__nav-link business-section__nav-link--active" : "business-section__nav-link"} href="/#">
                        Digital Wallets
                    </a>
                    <a onClick={handleClick} className={currentNav === 5 ? "business-section__nav-link business-section__nav-link--active" : "business-section__nav-link"} href="/#">
                        Find a Credit Card
                    </a>
                </div>
                {currentNav === 1 && (
                    <div className="business-section__card">
                        <div className="business-section__image"></div>
                        <div className="business-section__content">
                            <div className="business-section__content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint?</div>
                            <div className="business-section__content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eaque sint iste eveniet maxime nostrum debitis, aliquam architecto dicta autem cupiditate ut consequuntur voluptatem, enim eum eligendi quaerat?</div>
                            <button className="btn btn--blue header-section__btn">Learn More</button>
                        </div>
                    </div>
                )}
                {currentNav === 2 && (
                    <div className="business-section__card">
                        <div className="business-section__image"></div>
                        <div className="business-section__content">
                            <div className="business-section__content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
                            <div className="business-section__content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eaque sint iste eveniet maxime nostrum debitis, aliquam architecto dicta autem cupiditate ut consequuntur voluptatem, enim eum eligendi quaerat?</div>
                            <button className="btn btn--green header-section__btn">Learn More</button>
                        </div>
                    </div>
                )}
                {currentNav === 3 && (
                    <div className="business-section__card">
                        <div className="business-section__image"></div>
                        <div className="business-section__content">
                            <div className="business-section__content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint?</div>
                            <div className="business-section__content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eaque sint iste eveniet maxime nostrum debitis, aliquam architecto dicta autem cupiditate ut consequuntur voluptatem.</div>
                            <button className="btn btn--blue header-section__btn">Learn More</button>
                        </div>
                    </div>
                )}
                {currentNav === 4 && (
                    <div className="business-section__card">
                        <div className="business-section__image"></div>
                        <div className="business-section__content">
                            <div className="business-section__content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
                            <div className="business-section__content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eaque sint iste eveniet maxime nostrum debitis, aliquam architecto dicta autem cupiditate ut consequuntur voluptatem, enim eum eligendi quaerat?</div>
                            <button className="btn btn--green header-section__btn">Learn More</button>
                        </div>
                    </div>
                )}
                {currentNav === 5 && (
                    <div className="business-section__card">
                        <div className="business-section__image"></div>
                        <div className="business-section__content">
                            <div className="business-section__content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint?</div>
                            <div className="business-section__content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eaque sint iste eveniet maxime nostrum debitis, aliquam architecto dicta autem cupiditate ut consequuntur voluptatem.</div>
                            <button className="btn btn--blue header-section__btn">Learn More</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default BusinessSection
