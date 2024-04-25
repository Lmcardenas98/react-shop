import SectionSeasonSales from "./bodySections/SectionSeasonSales";
import SectionTopCategories from "./bodySections/SectionTopCategories";
import SectionTopCollection from "./bodySections/SectionTopCollections";
import SectionDeals from "./bodySections/SectionsDeals";
import Banner from "../components/HeadComponents/Banner";
import SectionGetFollow from "./bodySections/SectionGetFollow";
import SectionNewsletter from "./bodySections/SectionNewsletter";

export default function Body() {
  return (
    <>
      <Banner />
      <SectionTopCategories />
      <SectionSeasonSales />
      <SectionTopCollection />
      <SectionDeals />
      <SectionGetFollow />
      <SectionNewsletter />
    </>
  );
}
