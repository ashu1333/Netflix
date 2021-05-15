import "./list_component.css";

const List_Component = () => {
  return (
    <div className="listComponent">
      <div className="listComponent__category">
        <span className="listComponent__category1">Category-Movies</span>
      </div>
      <img
        className="listComponent__image"
        src="https://netflix-10001.web.app/images/series/comedies/arrested-development/small.jpg"
      />
      <div className="listComponent__bottom">
        <span className="listComponent__title">Arrested Development</span>
        <span className="listComponent__desc">
          {
            "he Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud"
          }
        </span>
        <span className="listComponent__remove">Remove From My List</span>
      </div>
    </div>
  );
};

export default List_Component;
