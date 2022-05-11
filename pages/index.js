import Banner from "../components/HomeComponents/Banner/Banner";
import Topics from "../components/HomeComponents/Topics/Topics";
import Newsletter from "../components/HomeComponents/Newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      {/* banner  */}
      <Banner />
      {/* Topics */}
      <Topics />
      {/* newsletter  */}
      <Newsletter />
    </div>
  );
}
