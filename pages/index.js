import FuseSearchRecipe from "@/components/Search/FuseSearchRecipe";
import SideBannerHome from "@/components/SideBanner/SideBannerHome";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <>
      <SideBannerHome />
      {/*       <BackgroundImage />
       */}
      <FuseSearchRecipe />
    </>
  );
}
