import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductListItems from '../components/ProductListItems'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductList } from '../data/ProductList';

const CheckOut = () => {

    const list = useSelector((state) => state.cart.list);
    const navigate = useNavigate();
    const params = useParams();

    const [state, setState] = useState(params.id ?
        [{
            ...ProductList.find((element) => element.id === parseInt(params.id)), count: 1,
        }
        ] : list)

    const incrementItem = (item) => {
        const index = state.findIndex(
            (product) => product.id === item.id
        );
        setState((state) => [
            ...state.sclice(0, index),
            { ...item, count: item.count + 1 },
            ...state.slice(index + 1),
        ]);

    }

    const decrementItem = (item) => {

        if (item.count === 1) {
            removeItemFromCart(item);

        }
        else {
            const index = state.findIndex(
                (product) => product.id === item.id
            );
            setState((state) => [
                ...state.sclice(0, index),
                { ...item, count: item.count - 1 },
                ...state.slice(index + 1),
            ]);
        }


    }

    const removeItemFromCart = (item) => {
        const index = state.list.findIndex(
            (product) => product.id === item.id
        );
        setState((state) => [
            ...state.sclice(0, index),

            ...state.slice(index + 1),
        ]);
    }

    return (
        <>

            {state.length > 0 ? (
                <>
                    {state.map((item) => (<ProductListItems
                        {...item} key={item.id}
                        incrementItem={() => incrementItem(item)}
                        decrementItem={() => decrementItem(item)}
                        removeItem={() => removeItemFromCart(item)}
                    />

                    ))}
                    <button className='btn btn-success' onClick={() => navigate('/success')}>
                        Place Order
                    </button>
                </>
            ) : (<h3 className='justify-center'>No items in the checkout</h3>)}
        </>
    );
}

export default CheckOut