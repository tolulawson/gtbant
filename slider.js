/* eslint-disable no-sparse-arrays */
import {
  Box, Text, Image,
} from '@chakra-ui/react';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slides() {
  const sliderData = [
    {
      image: 'slider-1.webp',
      text: 'Bank with us, problem no dey finish',
      altText: 'A frustrated man',
    },
    {
      image: 'slider-2.webp',
      text: 'Customer Care? We no dey give shishi',
      altText: 'A customer care personnel',
    },
    {
      image: 'slider-3.webp',
      text: 'Shut up and watch our YouTube series',
      altText: 'A hand pointing a remote at a tv',
    },
    {
      image: 'slider-4.webp',
      text: 'Keep calm and eat jollof at our Food Festival',
      altText: 'Jollof rice and chicken',
    },
    {
      image: 'slider-5.webp',
      text: 'FSHN: 100, BNKNG: 0',
      altText: 'A woman in a jumpsuit',
    },
  ];

  return (
    <>
      <Carousel
        showArrows={false}
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        useKeyboardArrows
        autoPlay
        stopOnHover
        swipeable
        emulateTouch
        interval={2300}
        transitionTime={450}
      >
        {
        sliderData.map((slideData) => (
          <Box
            key={slideData.image}
          >
            <Image
              src={`/${slideData?.image}`}
              alt={slideData?.altText}
              objectFit='cover'
              h={[200,, 550]}
              w='100%'
              borderTopLeftRadius={['1.75rem',, 0]}
              borderTopRightRadius={['1.75rem',, 0]}
            />
            <Box
              sx={{
                background: 'linear-gradient(180deg, rgba(222, 74, 9, 0) 24.34%, #642002 100%);',
                width: '100%',
                height: '100%',
                position: 'absolute',
                bottom: 0,
                left: 0,
              }}
            />
            <Text as='span' position='absolute' bottom={[7,, 8]} align='center' fontSize={['xl', '2xl', '3xl']} px={['5%',, '10%']} fontWeight='medium' lineHeight={1.2} left='50%' transform='translateX(-50%)' w='100%'>{slideData?.text}</Text>
          </Box>
        ))
      }
      </Carousel>
    </>
  );
}
