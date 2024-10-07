import CabinetBoard from "../../../pages/cabinetBoard";
import StoryLayout from "../Story";
import "./index.css";

const CabinetLayout = () => {
  return (
    <div className="cabinet_layout_container">
      <main className="main_container">
        <CabinetBoard />
        <StoryLayout />
      </main>
    </div>
  );
};
export default CabinetLayout;
