import styles from './Card.module.scss';

export const Card = ({ img, title, dateDelivery, price }) => (
  <article className={ styles.card }>
    <img
      className={ styles.image }
      src={ img }
      alt={ title }
    />
    <div className={ styles.content }>
      <h3 className={ styles.title }>{ title }</h3>
      <div className={ styles.footer }>
        <p className={ styles.dateDelivery }>{ dateDelivery }</p>
        <button className={ styles.button }>{ price }&nbsp;₽</button>
      </div>
    </div>
  </article>
);
