import './favourite.css';
import Card from '../card/Card';

import favourite01 from '../../img/images/promo-01.jpg';
import favourite02 from '../../img/images/promo-02.jpg';

const Favourite = () => {
  return ( 
    <section className="favourite">
      <div className="container">
        <h2 className="favourite__title title-2">
          Young’s Favourite
        </h2>
        <div className="favourite__cards">
          <Card title="Trending on instagram" img={favourite01} />
          <Card title="All Under $40" img={favourite02} />
        </div>
      </div>
    </section>
   );
}
 
export default Favourite;