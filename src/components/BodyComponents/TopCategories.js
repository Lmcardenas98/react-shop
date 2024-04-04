export default function TopCategories({ category, name }) {
  return (
    <div className="top-categories-card">
      <div className="top-categorie-main">
        <img
          alt="1"
          className="category-main-image"
          src={category?.map((item) => item.image)[0]}
        ></img>
      </div>
      <div className="top-categories-samples">
        <div className="secondary-image-container">
          <img
            alt="2"
            className="category-secondary-image"
            src={category?.map((item) => item.image)[1]}
          ></img>
        </div>
        <div className="secondary-image-container">
          <img
            alt="3"
            className="category-secondary-image"
            src={category?.map((item) => item.image)[2]}
          ></img>
        </div>
        <div className="secondary-image-container">
          <img
            alt="4"
            className="category-secondary-image"
            src={category?.map((item) => item.image)[3]}
          ></img>
        </div>
      </div>
      <div className="top-categories-description">
        <p>{name}</p>
        <button className="top-categories-btn">VIEW MORE</button>
      </div>
    </div>
  );
}
