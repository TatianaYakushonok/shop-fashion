import './arrivals.css';
import Card from '../card/Card';

import cat01 from '../../img/categories/cat-01.jpg';
import cat02 from '../../img/categories/cat-02.jpg';
import cat03 from '../../img/categories/cat-03.jpg';

const Arrivals = () => {
  return ( 
    <section className="arrivals">
      <div className="container">
        <h2 className="arrivals__title title-2">
          new arrivals
        </h2>
        <div className="arrivals__cards">
          <Card title="Hoodies & Sweetshirt" img={cat01} />
          <Card title="Coats & Parkas" img={cat02} />
          <Card title="Tees & T-Shirt" img={cat03} />
        </div>
      </div>
    </section>
   );
}
 
export default Arrivals;