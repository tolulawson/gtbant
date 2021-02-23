/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
import {
  useTheme, Box, Heading, Text, Button, Stack, Divider, useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import Head from 'next/head';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Slides from '../slider';
import Review from '../review';
import ReviewForm from '../reviewForm';
import { formatNumber } from '../utilityFunctions';

export default function Home({ data }) {
  const router = useRouter();
  const theme = useTheme();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const { totalReviews, averageRating, reviews } = data;

  const { isOpen, onOpen, onClose } = useDisclosure();

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
                  <Text as='span' fontSize='4xl' fontWeight='bold' mr={3} lineHeight={1.2}>{averageRating}</Text>
                  <StarRatings
                    rating={averageRating}
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
                  review
                  {
                    totalReviews > 1 ? 's' : ''
                  }
                </Text>
              </Box>
              <Button colorScheme='gt' borderRadius='4xl' pl={[4, 8]} pr={[4, 8]} onClick={onOpen}>Post a review</Button>
            </Stack>
            <Divider />
            <Stack direction='column' height='100vh' overflowY='scroll' w='100%' align='center'>
              {
                reviews.map((singleReview) => {
                  const {
                    name,
                    avatarIndex,
                    rating,
                    timestamp,
                    subject,
                    review,
                  } = singleReview;

                  return (
                    <Review
                      displayName={!name ? 'Anonymous' : name.split(' ').length > 1 ? `${name.split(' ')[0]} ${name.split(' ')[1][0]}.` : name}
                      avatarURLIndex={avatarIndex}
                      reviewRating={rating}
                      timestamp={timestamp}
                      reviewSubject={subject}
                      reviewBody={review}
                      key={timestamp}
                    />
                  );
                })
              }
              <Box mb={10}>
                <Button variant='ghost' colorScheme='gt' size='lg'>Load more reviews</Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <ReviewForm isOpen={isOpen} onClose={onClose} refresh={refreshData} />
    </>
  );
}

export async function getServerSideProps() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: 'gtbant-46196.firebaseapp.com',
    projectId: 'gtbant-46196',
    storageBucket: 'gtbant-46196.appspot.com',
    messagingSenderId: '762936752644',
    appId: '1:762936752644:web:b20172f0899643fd2c5351',
    measurementId: 'G-BBB9689FZM',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();
  // if (process.env.HOST) {
  //   db.settings({
  //     host: process.env.HOST,
  //     ssl: false,
  //   });
  // }
  const reviewsRef = db.collection('reviews');
  const snapshot = await reviewsRef.get();
  const reviews = [];
  snapshot.forEach((doc) => {
    reviews.push(doc.data());
  });
  const calcAverage = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    const average = sum / arr.length;
    return Math.round(average * 10) / 10;
  };

  let data;

  if (reviews.length > 0) {
    data = {
      totalReviews: reviews.length,
      averageRating: calcAverage(reviews.map((i) => i.rating)),
      reviews: reviews.sort((a, b) => b.timestamp - a.timestamp),
    };
  } else {
    data = {
      totalReviews: 0,
      averageRating: 0,
      reviews: null,
    };
  }
  return { props: { data } };
}
