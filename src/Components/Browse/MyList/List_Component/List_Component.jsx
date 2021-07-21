import "./list_component.css";
import { useStateValue } from "../../../../StateProvider/StateProvider";
const List_Component = ({ id, desc, image, title }) => {
  const [{ myList }, dispatch] = useStateValue();
  const removeFromMyList = () => {
    dispatch({
      type: "REMOVE_FROM_MYLIST",
      id: id,
    });
  };
  return (
    <div className="listComponent">
      <div className="listComponent__category">
        <span className="listComponent__category1">Movie</span>
      </div>
      <img
        className="listComponent__image"
        src={`https://image.tmdb.org/t/p/w500/${image}`}
      />
      <div className="listComponent__bottom">
        <span className="listComponent__title">{title}</span>
        <span className="listComponent__desc">{desc}</span>
        <span className="listComponent__remove" onClick={removeFromMyList}>
          Remove From My List
        </span>
      </div>
    </div>
  );
};

export default List_Component;
