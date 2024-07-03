import classNames from 'classnames';

export const Card = ({ className, img, title, dateDelivery, price}) => (
  <article className={ classNames(className, 'card') }>
    <img
      className="card__image"
      src={ img }
      alt={ title }
    />
    <div className="card__content">
      <h3 className="card__title">{ title }</h3>
      <div className="card__footer">
        <p className="card__date-delivery">{ dateDelivery }</p>
        <button className="card__button">{ price }&nbsp;₽</button>
      </div>
    </div>
  </article>
);