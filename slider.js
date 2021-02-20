import { Box, Text, Image } from '@chakra-ui/react';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
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

  return (
    <Carousel
      plugins={[
        'infinite',
        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000,
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
            {/* <Text>{slideData?.text}</Text> */}
          </Box>
        ))
      }
    </Carousel>
  );
}
