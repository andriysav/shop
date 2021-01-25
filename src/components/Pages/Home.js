import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../redux/actions/products';
import { addProductToCart } from '../../redux/actions/cart';
import { Categories, ProductBlock, ProductLoadingBlock } from '../index';
import { setCategory } from '../../redux/actions/filters';

const categoryNames = ['New', 'Refurbished', 'Used', 'Like New', 'Open Box'];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ products }) => products.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchProducts(sortBy, category));
  }, [sortBy, category, dispatch]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const handleAddProductToCart = (obj) => {
    dispatch(addProductToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
      </div>
      <h2 className="content__title">All products</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <ProductBlock
                onClickAddProduct={handleAddProductToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(9)
              .fill(0)
              .map((_, index) => <ProductLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
