import { Campers } from "@/types/campers";

interface CamperFeaturesProps {
  camper: Campers;
}

const CamperFeatures = ({ camper }: CamperFeaturesProps) => {
  const activeFeature = Object.entries(camper).filter(
    ([, value]) =>
      value === true || (typeof value === "string" && value.trim() !== "")
  );

  return (
    <div>
      {activeFeature.map(([key, value]) => (
        <span key={key}>
          <svg width="20" height="20">
            <use href={`/icons/icons.svg#icon-${key.toLowerCase()}`} />
          </svg>
          {typeof value === "string" ? value : key}
        </span>
      ))}
      <h2>Vehicle details</h2>
    </div>
  );
};

export default CamperFeatures;
