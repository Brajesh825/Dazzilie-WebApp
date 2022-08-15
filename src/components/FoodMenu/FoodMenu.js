import "./foodMenu.scss";

const FoodMenu = ({ items , type }) => {

  return (
    <>
      <h2 className="menuName" >{type}</h2>
      <div className="menuItems">
        {items.map((menuItem) => {
          const { id, name, image, price } = menuItem;
          return (
            <article key={Math.random()} className="menuItem">
              <div className="imageContainer">
                <img src={image} alt={name} className="photo" />
              </div>
              <div className="itemInfo">
                <header>
                  <h3>{name}</h3>
                  <p className="price">${price}</p>
                </header>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default FoodMenu;
