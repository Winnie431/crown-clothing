import React from "react";
import "../../components/menu-item/menu-item.style.scss";
import { useNavigate} from "react-router-dom";



const MenuItem = ({ title,image,size}) => {
  
  const navigate = useNavigate();
 
  
  return (
    <div className={`${size} menu-item`} onClick={() => navigate('/hats')}>
      <div 
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtile">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
