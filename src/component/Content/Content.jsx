import Party from "../Party/Party";
import Export from "../Export/Export.jsx";
import Search from "../Search/Search";
import "./Content.css";

const Content = () => (
  <div className="content-container">
    <div className="metal-toggle-container">
      <div className="metal-toggle">
        <div className="metal">Gold</div>
        <div className="metal">Silver</div>
        <div className="metal active-metal ">Both</div>
      </div>
    </div>
    <div className="party-export-container">
      <Party />
      <Export />
    </div>
    <Search />
  </div>
);

export default Content;
