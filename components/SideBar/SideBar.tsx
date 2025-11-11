"use client";

import { useState } from "react";
import css from "./SideBar.module.css";
import { useCatalogStore } from "@/lib/store/catalogStore";
import { CamperFilter } from "@/types/campers";

const equipmentList = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
const typeList = ["Van", "Fully Integrated", "Alcove"];

const equipmentIcons: Record<string, string> = {
  AC: "icon-AC",
  Automatic: "icon-automatic",
  Kitchen: "icon-citchen",
  TV: "icon-tv",
  Bathroom: "icon-bathroom",
};

const vehicalTypeIcons: Record<string, string> = {
  Van: "icon-grid_3", //panelTruck
  "Fully Integrated": "icon-grid_9", //fullyIntegrated
  Alcove: "icon-grid_9", //alcove
};

const SideBar = () => {
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState<string[]>([]);
  const [vehicalType, setVehicalType] = useState("");

  const { setFilters, fetchFilteredCampers } = useCatalogStore();

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleEquipmentCLick = (item: string) => {
    setEquipment((prev) =>
      prev.includes(item) ? prev.filter((el) => el !== item) : [...prev, item]
    );
  };

  const handleTypeClick = (type: string) => {
    setVehicalType((prev) => (prev === type ? "" : type));
  };

  const handleSearch = async () => {
    const filters: CamperFilter = {};
    if (location) filters.location = location;
    if (equipment.includes("AC")) filters.AC = true;
    if (equipment.includes("Automatic")) filters.Automatic = true;
    if (equipment.includes("Kitchen")) filters.Kitchen = true;
    if (equipment.includes("TV")) filters.TV = true;
    if (equipment.includes("Bathroom")) filters.Bathroom = true;

    if (vehicalType === "Van") filters.form = "panelTruck";
    if (vehicalType === "Fully Integrated") filters.form = "fullyIntegrated";
    if (vehicalType === "Alcove") filters.form = "alcove";

    setFilters(filters);
    await fetchFilteredCampers();
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

      <h4 className={css.filter}>Filter</h4>

      {/* Vehicle equipment */}
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.equipmentList}>
        {equipmentList.map((item) => (
          <li key={item}>
            <button
              type="button"
              className={equipment.includes(item) ? css.active : ""}
              onClick={() => handleEquipmentCLick(item)}
            >
              <svg width={32} height={32}>
                <use href={`/icons/icons.svg#${equipmentIcons[item]}`} />
              </svg>
              <span>{item}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Vehicle type */}
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.typeList}>
        {typeList.map((type) => (
          <li key={type}>
            <button
              type="button"
              className={vehicalType === type ? css.active : ""}
              onClick={() => handleTypeClick(type)}
            >
              <svg width={32} height={32}>
                <use href={`/icons/icons.svg#${vehicalTypeIcons[type]}`} />
              </svg>
              <span>{type}</span>
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </aside>
  );
};

export default SideBar;
