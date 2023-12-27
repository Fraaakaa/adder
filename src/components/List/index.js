import Item from "../Item";

function List(props) {
    function handleButton(position){
        props.handleCallback(position);
    }
  return<>
  <ul>
    {props.item.map((item, key) => {
        return <Item handleCallback={handleButton} item={item} position={key} />
    })}
  </ul>
  </>
  
}

export default List;
