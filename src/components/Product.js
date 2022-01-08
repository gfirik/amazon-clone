import styled from "styled-components";

export default function Product({ category, image, name, prices, inStock }) {
    return (
        <Card>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h4>{prices ? 
                prices.map((price) => (
                    <span key={price.currency}>
                        {price.currency} {price.amount}
                         
                    </span>
                )) : <h1>$0.00</h1>}
            </h4>
            <h5>{inStock ? 'In Stock' : 'Out of Stock'}</h5>
            <button>Add to Cart</button>            
        </Card>
    )
}

const Card = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 1rem;
    &:hover {
        box-shadow: 0 0 7px rgba(0,0,0,0.5);    
    }
    img {
        width: 100%;
        height: 60%;
    }
    h3 {
        font-size: 1.5rem;
    }
    h4 {
        font-size: 1.2rem;
    }
    h5 {
        font-size: 1rem;
    }
    button {
        width: 100%;
        height: 40px;
        border: none;
        background-color: #52D67A;
        color: #fff;
        font-size: 1rem;
    }
`;