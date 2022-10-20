/* eslint-disable no-undef */
import React from "react";
import Item from '../Item'; 
import { useSelector } from "react-redux";
import '../../components/archiveItems/archiveItems.css';

function ArchiveItems() {
  const items = useSelector((state) => state.items.value);

  return (
    <div className="archive-list">
      <h1 style={{textAlign: 'center'}}>Archive Items</h1>
      {items?.map((value, index) => (
        value.isArchive === true 
        &&
        <Item
          key={index}
          income={value}
          index={index}
          showButton={false}
        />
      ))}
    </div>
  );
}

export default ArchiveItems;
