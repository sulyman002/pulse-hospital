import PharmacyAside from "../ui/pharmacy-dashboard/PharmacyAside";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen flex">
      <PharmacyAside />
      <main className="flex-1 shadow-2xl">{children}</main>
    </section>
  );
};

export default layout;
