import "./Drawer.css";
const DRawer = (props) => {
  const { isEditable, closeModal, children } = props;
  return (
    <div className={isEditable ? "background opacity" : "background"}>
      <div className="wrapper">
        <div className={isEditable ? "container translate-0" : "container"}>
          <div className="sub-container">
            <div className="close" onClick={closeModal}>
              <img
                src="https://thumbs.dreamstime.com/z/close-icon-135858264.jpg"
                alt=""
                className="iconClass"
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRawer;
