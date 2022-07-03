import { ProdottiLogo } from "../../Assets/50ProdottiLogo/ProdottiLogo";
import { DomainLogo } from "../../Assets/DomainLogo/DomainLogo";

export const carouselItems = [
    {
        text: "Connet your own domain",
        logo: <DomainLogo/>,
        logoBackground: "#FFA26B"
    },
    {
        text: "50 additional products",
        logo: <ProdottiLogo/>,
        logoBackground: "#00C48C"
    },

]
export type CarouselItems = typeof carouselItems