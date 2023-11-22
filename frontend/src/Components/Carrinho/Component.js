import React from 'react';
import './Style.css';

function Carrinho({ cartItems, removeFromCart }) {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='carrinho'>
            <h2>Carrinho</h2>
            <div className='total-price'>Total: R$ {totalPrice.toFixed(2)}</div>
            <ul className='cart-list'>
                {cartItems.map((item, index) => (
                    <li key={index} className='cart-item'>
                        <img src={item.image} alt={item.name} className='cart-item-image' />
                        <span className='cart-item-name'>{item.name}</span>
                        <span className='cart-item-price'>R$ {item.price.toFixed(2)}</span>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Carrinho;