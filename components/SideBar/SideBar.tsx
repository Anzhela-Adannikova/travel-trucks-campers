// Location;
// Filters:
// Vehicle equipment,

import { CamperFilter } from "@/types/campers";
import { useState } from "react";

// Vehicle type
interface SideBarProps {
  onChangeFilters: (filters: CamperFilter) => void;
}

const SideBar = ({ onChangeFilters }: SideBarProps) => {
  const [location, setLocation] = useState("");
};
