import './download.css';
import voucher from '../../img/images/vouchers-img.png';
import appStore from '../../img/icons/app-store.png';
import googlePlay from '../../img/icons/google-play.png';

const Download = () => {
  return ( 
    <section className="download">
      <div className="container">
        <div className="download__content">
          <div className="download__text">
            <h2 className="download__title">
              download app & get the voucher!
            </h2>
            <p className="download__desc">
              Get 30% off for first transaction using Rondovision mobile app for now.
            </p>
            <div className="download__btn-wrapper">
              <a href="#!" className="download__btn">
                <img src={appStore} alt="app-store" />
              </a>
              <a href="#!" className="download__btn">
                <img src={googlePlay} alt="google-play" />
              </a>
            </div>
          </div>
          <div className="download__img">
            <img src={voucher} alt="voucher" />
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Download;