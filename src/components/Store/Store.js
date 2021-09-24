import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/storeDb';
import Cart from '../Cart/Cart';
import Piece from '../Piece/Piece';
import './store.css';

const Store = () => {
    const [pieces,setpieces] = useState([]);  //create state to keep server data
    const [cartItems,setCartItems] = useState([]);  //create state to keep selected cart data
    const [displayItems,setDisplayItems] = useState([]); //create state to keep searched data
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>{
                setpieces(data);
                setDisplayItems(data);
            })    //set the fetched data to state
    },[])

    useEffect(()=>{
        const savedCart = getStoredCart('modern-fair-cart');
        if (pieces.length) {
            const storageItems= [];
            for(const key in savedCart){
                const savedItem = pieces.find(piece => piece.title === key);
                const quantity = savedCart[key];
                savedItem.quantity = quantity;
                storageItems.push(savedItem);
            }
            setCartItems(storageItems);
        }

    },[pieces])
    
    const handleOrder = (item) =>{
        const newCart = [...cartItems,item];   //make new array with exist state items and adding the upcomming item
        setCartItems(newCart);
        addToDb("modern-fair-cart",item.title);
        console.log(item);
    }
    const handleSearch = (event) =>{
        const searchText = event.target.value;
        const searchResult = pieces.filter(piece => piece.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayItems(searchResult);
    }
    return (
        <div className='store-container'>
           <div>
               <div>
                   <input onChange={handleSearch} className="search-field" type="text" placeholder='search product' />
               </div>
                {
                    displayItems.map(piece => <Piece key={piece.id} piece={piece} handleOrder={handleOrder}></Piece>)
                }
           </div>
           <div>
               <h2>Order Summary</h2>
               <Cart cartItems={cartItems}></Cart>
           </div>
        </div>
    );
};

export default Store;