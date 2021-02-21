/* eslint-disable no-sparse-arrays */
import {
  useTheme, Box, Heading, Text, Button, Stack, Divider,
} from '@chakra-ui/react';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import Slides from '../slider';

export default function Home() {
  const theme = useTheme();
  const data = {
    averageRating: 2.1,
    totalReviews: 28576,
  };
  const formatNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

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

      <Stack bg='white' d='flex' borderRadius='4xl' w='100%' direction={['column',, 'row']}>
        <Box w={['100%',, '35%']}>
          <Slides />
        </Box>
        <Stack direction='column' w='100%' p={6}>
          <Stack color='gray.600' justify='space-between' direction='row' w='100%' mb={2}>
            <Box>
              <Box d='flex' alignItems='center'>
                <Text as='span' fontSize='4xl' fontWeight='bold' mr={3} lineHeight={1.2}>2.1</Text>
                <StarRatings
                  rating={data.averageRating}
                  starDimension='clamp(15px, 5vw, 25px)'
                  starSpacing='clamp(1px,2vw,1.5px)'
                  starEmptyColor={theme.colors.gt[100]}
                  starRatedColor={theme.colors.gt[500]}
                />
              </Box>
              <Text as='span' fontSize='sm'>
                Based on
                {' '}
                {
                formatNumber(data.totalReviews)
              }
                {' '}
                reviews
              </Text>
            </Box>
            <Button colorScheme='gt' borderRadius='4xl' pl={[4, 8]} pr={[4, 8]}>Post a review</Button>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
}
