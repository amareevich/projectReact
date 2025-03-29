function CountCart(props) {
    return (
        props.count === 0 ? null :
            (<div className="count">
                <p>{props.count}</p>
            </div>)
    );
}

export default CountCart;