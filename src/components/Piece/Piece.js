import React from 'react';
import Rating from 'react-rating';
import './piece.css';

const Piece = (props) => {
    // console.log(props.piece);
    const {title,rating, price, image, category} = props.piece;
    return (
        <div className='piece-container'>
            <div className='piece'>
                <img className='piece-image' src={image} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
                <p><small>Category: {category}</small></p>
                <Rating 
                    initialRating={rating.rate}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                />
                <span> ({rating.count} reviews)</span>
                <p><strong>${price}</strong></p>
                <button className="btn-regular" onClick={()=>props.handleOrder(props.piece)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Piece;