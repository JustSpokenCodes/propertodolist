import React from "react";
import Item from "./Item";

const ShoppingList = props => {
    return (
        <div className="shopping-list">
            {props.anime.map(item => {
                return <Item item={item} toggleItem={props.toggleItem} />;
            })}
        </div>
    );
};

export default ShoppingList;