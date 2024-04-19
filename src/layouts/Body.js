import SectionSeasonSales from "./bodySections/SectionSeasonSales";
import SectionTopCategories from "./bodySections/SectionTopCategories";
import SectionTopCollection from "./bodySections/SectionTopCollections";
import SectionDeals from "./bodySections/SectionsDeals";
import Banner from "../components/HeadComponents/Banner";

export default function Body() {
  return (
    <>
      <Banner />
      <SectionTopCategories />
      <SectionSeasonSales />
      <SectionTopCollection />
      <SectionDeals />
    </>
  );
}
