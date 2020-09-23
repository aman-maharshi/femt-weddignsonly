import React from "react"

function ChooseCardSection() {
    return (
        <div className="choose-card-section">
            <div className="wrapper">
                <div className="choose-card__container">
                    <div className="choose-card__section-one">
                        <p className="choose-card__section-one__title">Choose Your Perfect Card</p>
                        <p className="choose-card__section-one__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, magnam? Cupiditate magnam fugiat, facere est animi, beatae corrupti recusandae corporis.</p>
                    </div>
                    <div className="choose-card__section-two">
                        <div className="choose-card__section-two__image choose-card__section-two__image-one"></div>
                        <div className="choose-card__section-two__text">First Year Free</div>
                    </div>
                    <div className="choose-card__section-two">
                        <div className="choose-card__section-two__image choose-card__section-two__image-two"></div>
                        <div className="choose-card__section-two__text">5,000 Points</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCardSection
