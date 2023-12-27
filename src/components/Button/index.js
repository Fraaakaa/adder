function Button(props) {
    function handleClick(){
        props.handleCallback();
    };
  return <button onClick={handleClick}>Agregar</button>;
}

export default Button;
