import { useQuery } from '@apollo/client'
import { CATEGORIES } from './../schema';
import Product from './Product';
import styled from 'styled-components';

export default function Home() {

    const { loading, error, data } = useQuery(CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <Container>
            {data.categories.map((category) => (
                <div key={category.name}>
                    <h2>{category.name}</h2>
                    <div>
                        {category.products.map((product) => (
                            <Product 
                                key={product.id}
                                category={category.name}
                                image={[product.gallery]}                
                                name={product.name}
                                prices={[product.prices]}
                                inStock={product.inStock}
                                />
                            ))
                        }
                    </div>
                </div>
            ))}
        </Container>
    )
}

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
        div {
            display: flex;
            margin: 1rem;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-grow: 1 1 0;
        }
    }
`;