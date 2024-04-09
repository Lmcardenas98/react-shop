import SectionSeasonSales from "./bodySections/SectionSeasonSales";
import SectionTopCategories from "./bodySections/SectionTopCategories";
import SectionTopCollection from "./bodySections/SectionTopCollections";
import SectionDeals from "./bodySections/SectionsDeals";

export default function Body() {
  return (
    <>
      <SectionTopCategories />
      <SectionSeasonSales />
      <SectionTopCollection />
      <SectionDeals />
    </>
  );
}
