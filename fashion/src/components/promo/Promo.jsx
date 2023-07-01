import promoImg from '../../img/images/header-img.jpg';
import './promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <h1 className="promo__title">
              <span className="highlight">
                <span>let’s</span> 
              </span> 
              explore 
              <span className="highlight highlight--yellow">
                <span>unique</span>
              </span> 
              clothes.
            </h1>
            <p className="promo__desc">Live for Influential and Innovative fashion!</p>
            <div className="promo__btn-wrapper">
              <a href="#!" className="promo__btn">Shop Now</a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo;