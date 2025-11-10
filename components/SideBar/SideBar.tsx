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
  Van: "icon-grid_3",
  "Fully Integrated": "icon-grid_9",
  Alcove: "icon-grid_9",
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

  const handleSearch = () => {
    const filters: CamperFilter = {
      location: location || undefined,
      AC: equipment.includes("AC"),
      Automatic: equipment.includes("Automatic"),
      Kitchen: equipment.includes("Kitchen"),
      TV: equipment.includes("TV"),
      Bathroom: equipment.includes("Bathroom"),
      Van: vehicalType === "Van",
      FullyIntegrated: vehicalType === "Fully Integrated",
      Alcove: vehicalType === "Alcove",
    };

    setFilters(filters);
    fetchFilteredCampers();
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
