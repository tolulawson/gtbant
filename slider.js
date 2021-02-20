import { Box, Text, Image, background, AbsoluteCenter } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
      text: 'But have you seen our jumpsuits?',
      altText: 'A woman in a jumpsuit',
    },
  ];

  const Carousel = dynamic(() => import('@brainhubeu/react-carousel'));

  return (
    <>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2500,
            },
          },
        ]}
        animationSpeed={1000}
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
              h={550}
            />
            <Box sx={{
              background: 'linear-gradient(180deg, rgba(222, 74, 9, 0) 24.34%, #642002 100%);',
              width: '100%',
              height: '100%',
              position: 'absolute',
              bottom: 0,
            }} />
            <Text position='absolute' bottom={7} align='center' fontSize='3xl' pl='10%' pr='10%' fontWeight='medium' lineHeight={1.2}>{slideData?.text}</Text>
          </Box>
        ))
      }
      </Carousel>
    </>
  );
}