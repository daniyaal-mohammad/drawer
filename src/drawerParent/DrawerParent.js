import React from "react";
import { useState, useEffect } from "react";
import Drawer from "../drawer/Drawer";
const DrawerParent = () => {
  const [editable, setEditable] = useState();

  useEffect(() => {
    if (editable) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [editable]);

  const setEditableTRue = React.useCallback(() => {
    setEditable(true);
  });

  const setEditableFalse = React.useCallback(() => {
    setEditable(false);
  });
  return (
    <div>
      <div onClick={setEditableTRue}>button</div>
      <Drawer isEditable={editable} closeModal={setEditableFalse}>
        <div
          style={{ backgroundColor: "red", width: "200px", height: "300px" }}
        >
          daniyaal
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerParent;
