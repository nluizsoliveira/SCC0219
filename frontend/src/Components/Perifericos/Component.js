import React from 'react';
import './Style.css';

function Perifericos({ data, updateItem, addToCart }) {
    const handleAddToCart = (item) => {
        if (item.available > 0) {
            const updatedItem = { ...item, available: item.available - 1 };
            updateItem(updatedItem);
            addToCart(updatedItem);
        }
    };

    const truncateTitle = (title) => {
        return title.length > 60 ? title.substring(0, 57) + '...' : title;
    };

    return (
        <div className='perifericos'>
            <h2>Periféricos - Em Construção</h2>
            <div className='card-container'>
                {data ?
                    data['data'].map(item => (
                        <div className='card' key={item.id}>
                            <img src={item.image} alt={item.name} className='card-image' />
                            <div className='card-info'>
                                <h3 className='card-title'>{truncateTitle(item.name)}</h3>
                                <p className='card-price'>R$ {item.price}</p>
                                <p className='card-availability'>Em estoque: {item.available}</p>
                                <button 
                                    className='add-to-cart-btn' 
                                    onClick={() => handleAddToCart(item)}
                                    disabled={item.available === 0}
                                >
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    ))
                    : 'Loading...'}
            </div>
        </div>
    );
}

export default Perifericos;
