// frontend/app/men/page.tsx
import Navbar from "../components/navbar";
import MenCollection from "../components/MenCollection"; 
import Footer from "../components/Footer";

export default function MenPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20"> 
        <MenCollection />
      </div>
      <Footer />
    </main>
  );
}