import Button from 'react-bootstrap/Button';

function ProductCard(props) {
    console.log(props)
    return (
        <>
         <div>{props.product.name}</div>
         <Button variant="secondary">Secondary</Button>
        </>
       
        
    )
}

export default ProductCard;