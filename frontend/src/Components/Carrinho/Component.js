import React from 'react';
import './Style.css';

function Carrinho({ cartItems }) {
    return (
        <div>
            <h2>Carrinho - Em Construção</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - R$ {item.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default Carrinho;
