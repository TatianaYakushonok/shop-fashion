import styles from './Card.module.css';
import arrow from '../../img/icons/arrow.svg';

const Card = ({ title, img }) => {
 
  return ( 
    <div className={styles.card}>
      <a href="#!" className={styles.card__link}> </a>
      <img className={styles.card__img} src={img} alt="category 1" />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>
            {title}
          </div>
          <div className={styles.card__desc}>
            Explore Now!
          </div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
   );
}
 
export default Card;

