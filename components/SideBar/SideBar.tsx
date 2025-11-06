"use client";

import { useState } from "react";
import css from "./SideBar.module.css";

const equipmentList = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
const typeList = ["Van", "Fully Integrated", "Alcove"];

const SideBar = () => {
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState<string[]>([]);
  const [vehicalType, setVehicalType] = useState("");

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleEquipmentCLick = (item: string) => {
    if (equipment.includes(item)) {
      const updatedEquipment = equipment.filter((elemet) => elemet !== item);
      setEquipment(updatedEquipment);
    } else {
      const updatedEquipment = [...equipment, item];
      setEquipment(updatedEquipment);
    }
  };

  const handleTypeClick = (type: string) => {
    if (vehicalType === type) {
      setVehicalType("");
    } else {
      setVehicalType(type);
    }
  };

  return (
    <aside className={css.sideBar}>
      <label className={css.label}>
        Location
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="City"
        />
      </label>

      <h4 className={css.filer}>Filter</h4>

      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.equipmentList}>
        {equipmentList.map((item) => (
          <li key={item}>
            <button
              type="button"
              className={equipmentList.includes(item) ? css.active : ""}
              onClick={() => handleEquipmentCLick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.typeList}>
        {typeList.map((type) => (
          <li key={type}>
            <button
              type="button"
              className={vehicalType === type ? css.active : ""}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className={css.searchButton}>
        Search
      </button>
    </aside>
  );
};

export default SideBar;
