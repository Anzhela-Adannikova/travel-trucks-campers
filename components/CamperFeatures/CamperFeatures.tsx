"use client";

import { useState } from "react";
import css from "./CamperFeatures.module.css";
import { Campers } from "@/types/campers";
import Reviews from "../Reviews/Reviews";

interface CamperFeaturesProps {
  camper: Campers;
}

const CamperFeatures = ({ camper }: CamperFeaturesProps) => {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );

  const entries = Object.entries(camper);
  const featureKeys = entries.filter(([, value]) => value === true);

  return (
    <div className={css.features}>
      <div className={css.tabs}>
        <button
          className={`${css.tabButton} ${activeTab === "features" ? css.active : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${activeTab === "reviews" ? css.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      {activeTab === "features" && (
        <div className={css.details}>
          <div className={css.badges}>
            {featureKeys.map(([key, value]) => (
              <span key={key} className={css.tagItem}>
                <svg className={css.icon} width="20" height="20" aria-hidden>
                  <use href={`/icons/icons.svg#icon-${key.toLowerCase()}`} />
                </svg>
                <span className={css.tagLabel}>
                  {typeof value === "string" ? value : key}
                </span>
              </span>
            ))}
          </div>

          {/* Vehicle details */}
          <h3 className={css.detailName}>Vehicle details</h3>

          <ul className={css.detailsList}>
            {Object.entries({
              Form: camper.form,
              Length: camper.length,
              Width: camper.width,
              Height: camper.height,
              Tank: camper.tank,
              Consumption: camper.consumption,
            }).map(([key, value]) => (
              <li key={key}>
                <span>{key}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "reviews" && (
        <div>
          <Reviews reviews={camper.reviews} />
        </div>
      )}
    </div>
  );
};

export default CamperFeatures;
