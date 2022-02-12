import stickyheader from "../styles/stickycontenthead.module.scss";
function ContentStickyHeader({ switchsides }) {
  return (
    <div style={{ position: switchsides }} className={stickyheader.container}>
      <div className={stickyheader.content}>
        <div className={stickyheader.categoryHeader}>Category</div>
        <div>Veg</div>
        <div>Price</div>
        <div>Filters</div>
      </div>
    </div>
  );
}

export default ContentStickyHeader;
