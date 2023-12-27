function Search(props) {
    function handleChange (e){
        const {value} = e.target
        props.handleCallback(value);
    };
    function handleKeyDown(e){
        const {keyCode} = e;
        props.handleEnter(keyCode);
    };
  return <input onChange={handleChange} type="text" value={props.value} onKeyDown={handleKeyDown} />
}

export default Search;
