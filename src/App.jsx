import { Header } from '@modules/Header/Header.jsx';
import { Footer } from '@modules/Footer/Footer.jsx';
import { Hero } from '@modules/Hero/Hero.jsx';
import { Filter } from '@modules/Filter/Filter.jsx';
import { Goods } from '@modules/Goods/Goods.jsx';
import { Subscribe } from '@modules/Subscribe/Subscribe.jsx';
import { Order } from '@modules/Order/Order.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCart, registerCart } from '@store/reducers/cartSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeCart = async () => {
      await dispatch(registerCart());
      await dispatch(fetchCart());
    };

    void initializeCart();
  }, [dispatch]);

  return (
    <>
      <Header containerClass="container"
              buttonClass="button"
      />

      <main>
        <Hero className="container" />

        <Filter titleClass="visually-hidden"
                containerClass="container"
        />

        <Goods containerClass="container"
               titleClass="title"
        />

        <Subscribe containerClass="container"
                   titleClass="title"
                   buttonClass="button"
        />
      </main>

      <Footer className="container" />

      <Order />
    </>
  );
};
