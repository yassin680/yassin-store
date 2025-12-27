import Navbar from "../components/navbar"; // تأكد واش navbar بـ n صغيرة أو كبيرة عندك
import OffersCollection from "../components/OffersCollection";
import Footer from "../components/Footer";

export default function OffersPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <OffersCollection />
      </div>
      <Footer />
    </main>
  );
}