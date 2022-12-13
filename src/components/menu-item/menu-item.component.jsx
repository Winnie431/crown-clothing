import React from "react";
import "../../components/menu-item/menu-item.style.scss";
import { useNavigate} from "react-router-dom";



const MenuItem = ({ title,imageUrl,size,linkUrl}) => {
  
  const navigate = useNavigate();
 
  
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
      <div 
        className="background-image"
        style={{
          backgroundImage:`url(${imageUrl})`,
        }}
        //'/hats'
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtile">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
