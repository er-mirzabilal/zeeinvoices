import { CreateFirstInvoice } from "@/appPages/CreateFirstInvoice";
import { AllInvoices } from "@/components/AllInvoices";
import ClientProvider from "@/components/ClientProvider";

export default function Home() {
  return (
    <div>
      {/* <CreateFirstInvoice /> */}
      <AllInvoices />
    </div>
  );
}
