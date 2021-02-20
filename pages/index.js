import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Slides from '../slider';

export default function Home() {
  return (
    <Box d='flex' flexDir='column' alignItems='center' pt={12} w='90%' maxW={840} ml='auto' mr='auto'>
      <Box pb={8} alignSelf='flex-start' d='flex' alignItems='center' justifyContent='space-between' w='100%'>
        <Heading as='h1' maxW='70%'>
          Wouldn’t you rather
          {' '}
          <Text as='span' fontWeight='700'>bant</Text>
          {' '}
          with us?™
        </Heading>
        <Box>
          <Image
            src='/clown_logo.svg'
            alt='Clown logo'
            width={80}
            height={80}
          />
        </Box>
      </Box>

      <Box bg='white' d='flex' borderRadius='4xl' w='100%'>
        <Box w='35%'>
          <Slides />
        </Box>
        <Box>
          <Heading>Yay!</Heading>
        </Box>
      </Box>
    </Box>
  );
}
