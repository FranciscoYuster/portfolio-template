import Header from "@/components/header"
import SobreMi from "@/components/sobre-mi"
import Curriculum from "@/components/curriculum"
import Proyectos from "@/components/proyectos"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Certificaciones from "@/components/certificaciones"

// For Cloudfare
export const runtime = "edge";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="p-4 md:p-8 lg:p-16">
        <SobreMi />
        <Curriculum />
        <Certificaciones />
        <Proyectos />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
