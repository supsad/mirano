import styles from './Hero.module.scss';
import classNames from 'classnames';

export const Hero = ({ className }) => (
  <section className={ styles.hero }>
    <div className={ className }>
      <div className={ styles.headGroup }>
        <h1 className={ styles.title }>Авторские букеты</h1>
        <p className={ styles.subtitle }>и подарки</p>
      </div>

      <figure className={ styles['group-image'] }>
        <picture className={ classNames(styles.image, styles.image_left) }>
          <source srcSet="/img/hero-left@1x.avif 1x, /img/hero-left@2x.avif 2x" type="image/avif" />
          <source srcSet="/img/hero-left@1x.webp 1x, /img/hero-left@2x.webp 2x" type="image/webp" />
          <img
            src="/img/hero-left@1x.jpg"
            srcSet="/img/hero-left@2x.jpg 2x"
            alt="Букет цветов в банке. В букете ярко-оранжевые розы, оранжевые тюльпаны и львиный зев.
            Дополнительно в композию включены белые цветы и зеленые элементы,
            придающие букету объем и разнообразие" />
        </picture>

        <svg
          className={ classNames(styles.image, styles.image_center) }
          role="img"
          aria-label="Букет цветов в вазе, включающий нежные розовые розы,
                   розовые хризантемы и другие цветы пастельных цветов, размещенные в белой вазе в форме головы."
          width="680" height="588" viewBox="0 0 680 588" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid slice">
          <clipPath id="hero">
            <path
              d="M680 112.187C680 137.954 653.568 161.688 609.146 180.61C653.568 211.682 680 250.658 680 292.973C680 335.869 652.836 375.335 607.304 406.613C652.836 425.66 680 449.692 680 475.813C680 537.649 527.777 587.776 340 587.776C152.223 587.776 0 537.649 0 475.813C0 449.692 27.1636 425.66 72.6961 406.613C27.1636 375.335 0 335.869 0 292.973C0 250.658 26.4319 211.682 70.854 180.61C26.4319 161.688 0 137.954 0 112.187C0 50.3515 152.223 0.223633 340 0.223633C527.777 0.223633 680 50.3515 680 112.187Z" />
          </clipPath>

          <foreignObject clipPath="url(#hero)" width="100%" height="100%">
            <div className={ styles['image-center'] }></div>
          </foreignObject>
        </svg>


        <picture className={ classNames(styles.image, styles.image_right) }>
          <source
            srcSet="/img/hero-right@1x.avif 1x, /img/hero-right@2x.avif 2x" type="image/avif" />
          <source
            srcSet="/img/hero-right@1x.webp 1x, /img/hero-right@2x.webp 2x" type="image/webp" />
          <img
            src="/img/hero-right@1x.jpg"
            srcSet="/img/hero-right@2x.jpg 2x"
            alt="Букет цветов в банке. В букете ярко-оранжевые розы, оранжевые тюльпаны и львиный зев.
            Дополнительно в композию включены белые цветы и зеленые элементы,
            придающие букету объем и разнообразие" />
        </picture>
      </figure>
    </div>
  </section>
);
