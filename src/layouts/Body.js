import SectionSeasonSales from "./bodySections/SectionSeasonSales";
import SectionTopCategories from "./bodySections/SectionTopCategories";
import SectionTopCollection from "./bodySections/SectionTopCollections";

export default function Body() {
  return (
    <>
      <SectionTopCategories />
      <SectionSeasonSales />
      <SectionTopCollection />
    </>
  );
}
