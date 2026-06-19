import SalesHero from "@/components/sales/SalesHero";
import SalesBenefits from "@/components/sales/SalesBenefits";
import SalesFlow from "@/components/sales/SalesFlow";
import SalesWhyUs from "@/components/sales/SalesWhyUs";
import SalesTestimonials from "@/components/sales/SalesTestimonials";
import SalesFAQ from "@/components/sales/SalesFAQ";
import SalesFooter from "@/components/sales/SalesFooter";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <SalesHero />
        <SalesBenefits />
        <SalesFlow />
        <SalesWhyUs />
        <SalesTestimonials />
        <SalesFAQ />
      </main>
      <SalesFooter />
    </>
  );
}
