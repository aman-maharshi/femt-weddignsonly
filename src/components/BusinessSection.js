import React from "react"

function BusinessSection() {
    function handleClick(e) {
        e.preventDefault()
    }

    return (
        <section className="business-section">
            <div className="wrapper">
                <p className="business-section__title">Business Banking</p>
                <div className="business-section__nav">
                    <a onClick={handleClick} className="business-section__nav-link business-section__nav-link--active" href="/#">
                        Payment Technologies
                    </a>
                    <a onClick={handleClick} className="business-section__nav-link" href="/#">
                        Investing Basics
                    </a>
                    <a onClick={handleClick} className="business-section__nav-link" href="/#">
                        Card Benefits
                    </a>
                    <a onClick={handleClick} className="business-section__nav-link" href="/#">
                        Digital Wallets
                    </a>
                    <a onClick={handleClick} className="business-section__nav-link" href="/#">
                        Find a Credit Card
                    </a>
                </div>
                <div className="business-section__card">
                    <div className="business-section__image"></div>
                    <div className="business-section__content">
                        <div className="business-section__content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint?</div>
                        <div className="business-section__content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eaque sint iste eveniet maxime nostrum debitis, aliquam architecto dicta autem cupiditate ut consequuntur voluptatem, enim eum eligendi quaerat?</div>
                        <button className="btn btn--blue header-section__btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessSection
