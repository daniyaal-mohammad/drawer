import react from "react";
import "./Drawer.css";
const DRawer = (props) => {
  const { isEditable, closeModal, children } = props;
  return (
    <div className={isEditable ? "background opacity" : "background"}>
      <div className="wrapper">
        <div className={isEditable ? "container translate-0" : "container"}>
          <div className="sub-container">
            <div className="close" onClick={closeModal}>
              <div>close</div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRawer;
