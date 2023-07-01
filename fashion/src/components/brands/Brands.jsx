import './brands.css';
import hm from '../../img/brands/HM.png';
import obey from '../../img/brands/Obey.png';
import shopify from '../../img/brands/Shopify.png';
import lacoste from '../../img/brands/Lacoste.png';
import levis from '../../img/brands/Levis.png';
import amazonm from '../../img/brands/Amazon.png';

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#!">
              <img className="brands__img" src={hm} alt="hm" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img className="brands__img" src={obey} alt="obey" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img className="brands__img" src={shopify} alt="shopify" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img className="brands__img" src={lacoste} alt="lacoste" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img className="brands__img" src={levis} alt="levis" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img className="brands__img" src={amazonm} alt="amazonm" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Brands;