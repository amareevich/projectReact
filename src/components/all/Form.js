function Form() {
    return (
        <div className="form">
            <div className="form__content">
                <div className="form__content__item">
                    <img src="/formIMG/formimg.svg" alt="img"></img>
                    <span className="item-feedback">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        <i> a pulvinar purus condimentum“</i></span>
                </div>

                <div className="form__content__item">
                    <div className="item-discription">
                        <p>SUBSCRIBE</p>
                        <span>FOR OUR NEWLETTER AND PROMOTION</span>
                    </div>
                    <div className="item-input">
                        <input placeholder="Enter Your Email"></input>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;