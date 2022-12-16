import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.marca} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.marca}</h1>
                <h5>{item.tipo}</h5>
                <p>{item.medida}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;