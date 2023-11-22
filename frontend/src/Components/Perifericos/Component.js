import React, { useState, useEffect } from 'react';
import './Style.css';

function Perifericos() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/perifericos')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    const handleAddToCart = (id) => {
        const newData = data['data'].map(item => {
            if (item.id === id && item.available > 0) {
                return { ...item, available: item.available - 1 };
            }
            return item;
        });

        setData({ data: newData });
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
                            </div>
                            <button 
                                className='add-to-cart-btn' 
                                onClick={() => handleAddToCart(item.id)}
                                disabled={item.available === 0}
                            >
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    ))
                    : 'Loading...'}
            </div>
        </div>
    );
}

export default Perifericos;
