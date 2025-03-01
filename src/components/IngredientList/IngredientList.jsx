import "../../App.css";
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
    return (
        <ul>
          {props.availableIngredients.map((availableIngredient, index) => (
              <Ingredient
                  key={index}
                  ingredient={availableIngredient}
                  onClick={() => props.addToBurger(availableIngredient)}
                  isAddButton={true}
              />
          ))}
        </ul>
    );
};

export default IngredientList;