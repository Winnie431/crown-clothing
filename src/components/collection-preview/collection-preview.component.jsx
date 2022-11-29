import React from "react";
import '../collection-preview/collection-preview.style.scss';

const CollectionPreview = ({title,items}) => {
    console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUppercase()}</h1>
      <div className="preview">       
        {
        items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}
export default CollectionPreview;
