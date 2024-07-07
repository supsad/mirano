import { Header } from './modules/Header/Header.jsx';
import { Footer } from './modules/Footer/Footer.jsx';
import { Hero } from './modules/Hero/Hero.jsx';
import { Filter } from './modules/Filter/Filter.jsx';
import { Goods } from './modules/Goods/Goods.jsx';
import { Subscribe } from './modules/Subscribe/Subscribe.jsx';
import { Order } from './modules/Order/Order.jsx';

export const App = () => {
  return (
    <>
      <Header className="container" />

      <main>
        <Hero className="container" />

        <Filter
          titleClass="visually-hidden"
          containerClass="container" />

        <Goods className="container" />

        <Subscribe className="container" />
      </main>

      <Footer className="container" />

      <Order />
    </>
  );
};
