/* eslint-disable no-undef */
import React from "react";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import "../../components/archiveItems/archiveItems.css";
import { setArchive } from "../../redux/itemsRedux/itemSlice";

function ArchiveItems() {

  const items = useSelector((state) => state.items.value);

  const returnArchive = (i) => {
    setArchive(
      items.map((item, index) => {
        if (index !== i) return { ...item, isArchive: false };
        else return { ...item };
      })
    );
  };

  return (
    <div className="archive-list">
      <h1 style={{ textAlign: "center" }}>Archive Items</h1>
      {items?.map(
        (value, index) =>
          value.isArchive === true && (
            <Item
              key={index}
              income={value}
              index={index}
              showButton={false}
              showButton2={true}
              returnArchive={returnArchive}
            />
          )
      )}
    </div>
  );
}

export default ArchiveItems;
