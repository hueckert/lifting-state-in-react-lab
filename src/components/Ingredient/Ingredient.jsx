import "../../App.css";

const Ingredient = ({ ingredient, onClick, isAddButton }) => {
    const listStyle = {
        backgroundColor: ingredient.color
    };

    return (
        <li style={listStyle}>
            {ingredient.name}
            <button onClick={onClick}>
                {isAddButton ? '➕' : '❌'}
            </button>
        </li>
    );
};

export default Ingredient;