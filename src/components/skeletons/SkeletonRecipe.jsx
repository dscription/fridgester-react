import React from 'react';
import SkeletonElement from './SkeletonElement';


const SkeletonRecipe = ({theme}) => {
  const themeClass = theme || "light"
  return ( 
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-recipe">
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="image" />
          <SkeletonElement type="text" />
        </div>
      </div>

    </div>
   );
}
 
export default SkeletonRecipe;