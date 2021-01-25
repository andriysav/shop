import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductLoadingBlock = () => {
  return (
    <ContentLoader
      className="product-block"
      speed={2}
      width={260}
      height={290}
      viewBox="0 0 260 290"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="-1" y="270" rx="3" ry="3" width="280" height="26" />
      <rect x="-1" y="309" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="427" rx="3" ry="3" width="0" height="24" />
      <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
      <rect x="0" y="418" rx="3" ry="3" width="91" height="31" />
      <rect x="5" y="19" rx="0" ry="0" width="297" height="200" />
      <rect x="2" y="238" rx="0" ry="0" width="284" height="52" />
    </ContentLoader>
  );
};

export default ProductLoadingBlock;
