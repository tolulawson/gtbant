/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
import {
  useTheme, Box, Heading, Text, Button, Stack, Divider, useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import Head from 'next/head';
import { useState } from 'react';
import Slides from '../slider';
import Review from '../review';
import ReviewForm from '../reviewForm';
import { formatNumber } from '../utilityFunctions';

export default function Home() {
  const theme = useTheme();
  const data = {
    averageRating: 2.1,
    totalReviews: 10,
  };
  const [rating, setRating] = useState(data.averageRating);
  const [totalReviews, setTotalReviews] = useState(data.totalReviews);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const singleReview = {
    displayName: 'Angry Man',
    avatarURLIndex: 0,
    reviewRating: 3,
    timestamp: new Date('January 3, 2021'),
    reviewSubject: 'I hate this bank!',
    reviewBody: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
  };

  const {
    displayName,
    avatarURLIndex,
    reviewRating,
    timestamp,
    reviewSubject,
    reviewBody,
  } = singleReview;

  return (
    <>
      <Head>
        <title>GTBant - Wouldn’t you rather bant with us?</title>
      </Head>
      <Box d='flex' flexDir='column' alignItems='center' pt={12} w={['93%', '90%']} maxW={840} ml='auto' mr='auto'>
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

        <Stack bg='white' d='flex' borderRadius='4xl' w='100%' direction={['column',, 'row']} maxH={['calc(100vh + 200px)',, '550px']} overflowY='hidden'>
          <Box w={['100%',, '60%']}>
            <Slides />
          </Box>
          <Stack direction='column' w='100%' pt={[3,, 6]} px={[3, 4, 6]} pb={0} maxH='90vh'>
            <Stack color='gray.600' justify='space-between' direction='row' w='100%' position='sticky' top={0}>
              <Box>
                <Box d='flex' alignItems='center'>
                  <Text as='span' fontSize='4xl' fontWeight='bold' mr={3} lineHeight={1.2}>{rating}</Text>
                  <StarRatings
                    rating={rating}
                    starDimension='clamp(15px, 5vw, 25px)'
                    starSpacing='clamp(1px,2vw,1.5px)'
                    starEmptyColor={theme.colors.gt[100]}
                    starRatedColor={theme.colors.gt[500]}
                    // changeRating={(newRating) => {
                    //   setRating((x) => {
                    //     const computedRating = (((data.averageRating * totalReviews) + newRating) / (totalReviews + 1));
                    //     return computedRating;
                    //   });
                    //   setTotalReviews((currentTotal) => currentTotal + 1);
                    // }}
                  />
                </Box>
                <Text as='span' fontSize='sm'>
                  Based on
                  {' '}
                  {
                    formatNumber(totalReviews)
                  }
                  {' '}
                  reviews
                </Text>
              </Box>
              <Button colorScheme='gt' borderRadius='4xl' pl={[4, 8]} pr={[4, 8]} onClick={onOpen}>Post a review</Button>
            </Stack>
            <Divider />
            <Stack direction='column' height='100vh' overflowY='scroll' w='100%' align='center'>
              <Review
                displayName={displayName}
                avatarURLIndex={avatarURLIndex}
                reviewRating={reviewRating}
                timestamp={timestamp}
                reviewSubject={reviewSubject}
                reviewBody={reviewBody}
              />
              <Review
                displayName={displayName}
                avatarURLIndex={avatarURLIndex}
                reviewRating={reviewRating}
                timestamp={timestamp}
                reviewSubject={reviewSubject}
                reviewBody={reviewBody}
              />
              <Review
                displayName={displayName}
                avatarURLIndex={avatarURLIndex}
                reviewRating={reviewRating}
                timestamp={timestamp}
                reviewSubject={reviewSubject}
                reviewBody={reviewBody}
              />
              <Review
                displayName={displayName}
                avatarURLIndex={avatarURLIndex}
                reviewRating={reviewRating}
                timestamp={timestamp}
                reviewSubject={reviewSubject}
                reviewBody={reviewBody}
              />
              <Box mb={10}>
                <Button variant='ghost' colorScheme='gt' size='lg'>Load more reviews</Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <ReviewForm isOpen={isOpen} onClose={onClose} />
    </>
  );
}
