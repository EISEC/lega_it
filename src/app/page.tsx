import Section1 from "@/components/main/home/section_1";
import HowWorks from "@/components/main/home/howWorks";
import React from "react";
import SectionUslugi from "@/components/main/home/uiUslugi/section_uslugi";

export default function Home() {
    return (
        <main>
            <Section1/>
            <HowWorks/>
            <SectionUslugi/>
        </main>
    );
}
