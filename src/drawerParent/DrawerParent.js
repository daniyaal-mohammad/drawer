import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Drawer from "../drawer/Drawer";
const DrawerParent = () => {
  const [editable, setEditable] = useState();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (editable) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [editable]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setEditableFalse(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);

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
          style={{ backgroundColor: "red", width: "200px", height: "1000px" }}
        >
          <div ref={drawerRef}>daniyaal</div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerParent;
