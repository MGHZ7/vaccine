import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { MetaverseCardSection } from "./metaverseCard";
import { MetaverseVirusSection } from "./metaverseVirus";
import { MetaverseCellSection } from "./metaverseCell";
import { MetaverseBacteriaSection } from "./metaverseBacteria";
import { MetaverseVickySection } from "./metaverseVicky";

export function MetaverseNFTSection() {
    return <section
        id="about-the-project"
        className={`flex-col justify-center items-center animate-fade-in px-4 md:px-12`}>

        <ElementVisibilityChecker ComponentToShow={MetaverseCardSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={MetaverseVirusSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={MetaverseCellSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={MetaverseBacteriaSection} props={{}} />
        {/* <ElementVisibilityChecker ComponentToShow={MetaverseVickySection} props={{}} /> */}

    </section>
}