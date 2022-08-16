import "./menu.scss";
import Item from "../Item/Item";

const FoodMenu = ({ items , type }) => {
  return (
    <>
      <h2 className="menuName" >{type}</h2>
      <div className="menuItems">
        {items.map((menuItem) => {
          const {  name, image, price } = menuItem;
          return (
            <Item name={name} image={image} price={price} />
          );
        })}
      </div>
    </>
  );
};

export default FoodMenu;
