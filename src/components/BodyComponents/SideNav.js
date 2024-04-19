export default function SideNav() {
  const section = document.querySelectorAll(".obserb");
  const handle = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(
          `.${entry.target.dataset.item}`
        ).style.opacity = 1;
      } else {
        document.querySelector(
          `.${entry.target.dataset.item}`
        ).style.opacity = 0.2;
      }
      console.log(entry.intersectionRect);
    });
  };
  const observer = new IntersectionObserver(handle, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  section.forEach((ele) => {
    observer.observe(ele);
  });

  return (
    <div className="nav-side-bar">
      <a href="#banner-container" className="banner">
        <p>banner</p>
      </a>
      <a href="#section-top-categories" className="categories">
        <p>categories</p>
      </a>
      <a href="#section-season-sale" className="sale">
        <p>sales</p>
      </a>
      <a href="#section-top-collection" className="collection">
        <p>collection</p>
      </a>
      <a href="#section-deals-container" className="deal">
        <p>deals</p>
      </a>
    </div>
  );
}
