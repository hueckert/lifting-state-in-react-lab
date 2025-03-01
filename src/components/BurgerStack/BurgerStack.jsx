import "../../App.css";
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
    return (
        <ul>
          {props.burgerStack.length === 0 ? (
              <li>No Ingredients</li>
          ) : (
              props.burgerStack.map((burgerStackItem, index) => (
                  <Ingredient
                      key={index}
                      ingredient={burgerStackItem}
                      onClick={() => props.removeFromBurger(burgerStackItem)}
                      isAddButton={false}
                  />
              ))
          )}
        </ul>
    );
};

export default BurgerStack;