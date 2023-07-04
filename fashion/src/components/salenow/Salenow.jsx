import './salenow.css';
import saleImg from '../../img/images/promo-img.png';

const Salenow = () => {
  return ( 
    <section className="salenow">
      <div className="salenow__container">
        <div className="salenow__content">
          <div className="salenow__img">
            <img src={saleImg} alt="promo" />
          </div>
          <div className="salenow__text">
            <h2 className="salenow__title">
              <span className="highlight">
                <span>payday</span> 
              </span> 
              sale now
            </h2>
            <p className="salenow__desc">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="salenow__desc">
              <span>1 June - 10 June 2021</span>
              *Terms & Conditions apply
            </p>
            <div className="salenow__btn-wrapper">
              <a href="#!" className="salenow__btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Salenow;