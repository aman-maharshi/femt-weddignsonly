import React from "react"
import Card from "./Card"

function FeaturesSection() {
    return (
        <section className="features-section">
            <div className="wrapper">
                <h1 className="features-section__title">Card Features and Benefits</h1>
                <div className="features-section__card-container">
                    <Card icon={[<i className="fas fa-gift" key={Math.floor(Math.random() * 1000)}></i>]} title={`Reward`} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos possimus eum velit ipsa!"} />
                    <Card icon={[<i className="fas fa-plane-departure" key={Math.floor(Math.random() * 1000)}></i>]} title={`Travel`} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos possimus eum velit ipsa!"} />
                    <Card icon={[<i className="fas fa-chart-line" key={Math.floor(Math.random() * 1000)}></i>]} title={`Low Interest`} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos possimus eum velit ipsa!"} />
                    <Card icon={[<i className="fas fa-random" key={Math.floor(Math.random() * 1000)}></i>]} title={`Balance Tranfer`} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos possimus eum velit ipsa!"} />
                    <Card icon={[<i className="fas fa-money-bill-alt" key={Math.floor(Math.random() * 1000)}></i>]} title={`Cash Back`} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos possimus eum velit ipsa!"} />
                    <Card icon={[<i className="fab fa-creative-commons-zero" key={Math.floor(Math.random() * 1000)}></i>]} title={`Low Interest`} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos possimus eum velit ipsa!"} />
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
