import React, { useRef, useState } from 'react';
import { CarouselImage } from './styled';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import { StyledFlexDiv } from '../../../components/FlexDiv';
import { AnchorTypography, HugeHeaderTypography, MainHeaderTypography } from '../../../components/Typography/styled';
import { Link } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ArrowDownIcon } from '../../../components/icons';
import { PaginationDot } from '../../../components/PaginationDot/styled';

export const HomeHeaderBlock = () => {

  const carouselImages = [
    <CarouselImage key={1} src={require('../../../assets/images/space-big-1.png')} />,
    <CarouselImage key={1} src={require('../../../assets/images/space-big-2.png')} />,
    <CarouselImage key={1} src={require('../../../assets/images/space-big-3.png')} />
  ]

  const carousel = useRef<AliceCarousel>(null);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const syncActiveIndexForSwipeGestures = (e: EventObject) => setCarouselIndex(e.item);

  const onSlideChanged = (e: EventObject) => {
    syncActiveIndexForSwipeGestures(e);
  };


  return (
    <div style={{ position: "relative" }}>
      <AliceCarousel
        ref={carousel}
        items={carouselImages}
        disableButtonsControls
        disableDotsControls
        activeIndex={carouselIndex}
        onSlideChanged={onSlideChanged}
      />

      <StyledFlexDiv
        style={{
          position: "absolute",
          top: "50%",
          left: "48%",
          transform: "translate(-50%, -50%)",
          zIndex: '2',
          gap: '8px'
        }}
      >
        <PaginationDot isactive={carouselIndex === 0} color='white' onClick={() => carousel?.current?.slideTo(0)} />
        <PaginationDot isactive={carouselIndex === 1} color='white' onClick={() => carousel?.current?.slideTo(1)} />
        <PaginationDot isactive={carouselIndex === 2} color='white' onClick={() => carousel?.current?.slideTo(2)} />
      </StyledFlexDiv>

      <MainHeaderTypography
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        The space is waiting for
      </MainHeaderTypography>
      <HugeHeaderTypography
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        you
      </HugeHeaderTypography>

      <Link
        to="#tours"
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: '2',
          textDecoration: "none"
        }}
      >
        <StyledFlexDiv style={{ gap: '8px' }}>
          <AnchorTypography>Explore tours</AnchorTypography>
          <ArrowDownIcon />
        </StyledFlexDiv>
      </Link>
    </div>
  )
}