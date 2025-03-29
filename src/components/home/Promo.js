import man from '../../img/promo/man.svg';
import text from '../../img/promo/text.svg';

function Promo() {
    return (
        <div className="promo">
            <div className='promo__content'>

                <div className="promo__content__man">
                    <img src={man} alt='img'></img>
                </div>

                <div className="promo__content__text">
                    <img src={text} alt='img'></img>
                </div>

            </div>
        </div>
    );
}

export default Promo;