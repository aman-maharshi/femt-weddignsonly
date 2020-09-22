import React from "react"

function HeaderSection() {
    return (
        <section className="header-section">
            <div className="wrapper">
                <h1 className="header-section__title">Bank Website Design Template</h1>
                <p className="header-section__desc">Wheather you're looking for side-by-side comparisions, info around rewards vs points or you're ready to apply, we've gathered eveything you need in one easy place.</p>
                <button className="btn btn--orange header-section__btn">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>Learn More
                </button>
            </div>
        </section>
    )
}

export default HeaderSection
