function Item (props){
    function handleClick(){
        const {handleCallback, position} = props;
        handleCallback(position);
    };

    return <li key={props.position}>{props.item}  <button onClick={handleClick}>Borrar</button> </li>
     
}

export default Item;