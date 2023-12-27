import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const BasketProduct = () => {
    const { products, total, amount } = useSelector((store) => store.basket);

    return (
        <div className='max-w-7xl mx-auto py-4'>
            {amount > 0 ? (
                <>
                    <div>
                        {products.map((item, i) => (
                            <Product
                                key={item.id}
                                name={item.title}
                                price={item.price}
                                image={item.images}
                                amount={item.amount}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <p className='text-2xl text-gray-700 font-medium text-center'>Cart is Empty</p>
                </>
            )}
            <div className='flex flex-row items-center justify-evenly py-8'>
                <p className='text-2xl font-medium'>Total :</p>
                <p className='text-2xl font-medium'>₹ {total}</p>
            </div>
        </div>
    );
};

export default BasketProduct;