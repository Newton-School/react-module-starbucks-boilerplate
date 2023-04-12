function Order({ id, name, description, price }) {
    return (
        <div>
            <p>Order ID: {id}</p>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
}
export default Order;