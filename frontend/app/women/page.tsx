import Navbar from "../components/navbar"; 
import WomenCollection from "../components/WomenCollection";
import Footer from "../components/Footer";

export default function WomenPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <WomenCollection />
      </div>
      <Footer />
    </main>
  );
}