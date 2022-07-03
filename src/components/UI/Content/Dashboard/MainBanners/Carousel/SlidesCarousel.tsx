import { Box } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { styles } from "../../../../../../styles/styles";
import { SlidesCarouselProps } from "../../../../../interfaces/interfaces";
import CarouselItem from "./CarouselItem/CarouselItem";

const SlidesCarousel: React.FC<SlidesCarouselProps> = ({items}) => {
    return <Carousel IndicatorIcon={false} sx={styles.carousel}>
       {items.map(item => <CarouselItem key={item.text} background={item.logoBackground} logo={item.logo} text={item.text}/>)}
        </Carousel>
}

export default SlidesCarousel;