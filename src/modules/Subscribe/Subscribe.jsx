import './subscribe.scss';

export const Subscribe = () => (
  <section className="subscribe">
    <div className="container">
      <h2 className="subscribe__title">Подпишись на&nbsp;рассылку</h2>

      <form className="subscribe__form" action="#">
        <input className="subscribe__input" type="email" name="email" placeholder="E-mail" />

        <button className="subscribe__button" aria-label="подписаться на рассылку">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.166687 6.66667C0.78502 6.66667 1.70835 6.05583 2.48335 5.4375C3.48335 4.6425 4.35585 3.6925 5.02169 2.60333C5.52085 1.78667 6.00002 0.796667 6.00002 0M6.00002 0C6.00002 0.796667 6.47919 1.7875 6.97835 2.60333C7.64502 3.6925 8.51752 4.6425 9.51585 5.4375C10.2917 6.05583 11.2167 6.66667 11.8334 6.66667M6.00002 0V20"
              stroke="white" />
          </svg>
        </button>
      </form>
    </div>
  </section>
);