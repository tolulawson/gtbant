/* eslint-disable no-sparse-arrays */
import {
  useTheme, Text, Stack, Img, Image,
} from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';
import { timeAgo } from './utilityFunctions';
import TruncatedText from './truncatedText';

export const avatarURLs = {
  0: '/avatars/avatar-0.webp',
  1: '/avatars/avatar-1.webp',
  2: 'avatars/avatar-2.webp',
  3: 'avatars/avatar-3.webp',
  4: 'avatars/avatar-4.webp',
  5: 'avatars/avatar-5.webp',
  6: 'avatars/avatar-6.webp',
  7: 'avatars/avatar-7.webp',
};

export default function Review({
  avatarURLIndex, displayName, reviewRating, timestamp, reviewSubject, reviewBody,
}) {
  const theme = useTheme();
  // console.log(Object.keys(avatarURLs));
  return (
    <Stack borderRadius={12} bg='gt.50' p={[3,, 2]} direction='row' color='gray.600' spacing={[6,, 10]} w='100%'>
      <Stack direction={['column',, 'row']} position='relative'>
        <Image
          borderRadius='full'
          boxSize={['60px', '70px']}
          src={avatarURLs[avatarURLIndex]}
          alt={displayName}
          objectFit='contain'
        />
        <Stack spacing={0} direction='column'>
          <Text fontSize={['sm',, 'lg']} color='gray.600' align={['center',, 'left']}>{displayName}</Text>
          <Stack spacing={0} direction='column' display={['none',, 'inherit']}>
            <StarRatings
              rating={reviewRating}
              starDimension='clamp(8px, 5vw, 16px)'
              starSpacing='clamp(1px,2vw,1.5px)'
              starEmptyColor={theme.colors.gt[100]}
              starRatedColor={theme.colors.gt[500]}
            />
            <Text fontSize='xs' color='gray.500' mt={0}>{timeAgo(timestamp)}</Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack w={['80%',, '50%']}>
        <Stack direction='row' display={['inherit',, 'none']} justify='space-between' align='center'>
          <StarRatings
            rating={reviewRating}
            starDimension='clamp(8px, 5vw, 16px)'
            starSpacing='clamp(1px,2vw,1.5px)'
            starEmptyColor={theme.colors.gt[100]}
            starRatedColor={theme.colors.gt[500]}
          />
          <Text fontSize='xs' color='gray.500' mt={0}>{timeAgo(timestamp)}</Text>
        </Stack>
        <Text fontSize='lg' fontWeight='medium' lineHeight={1} sx={{ marginTop: '5px!important' }}>{reviewSubject}</Text>
        <TruncatedText text={reviewBody} limit={30} fontSize='sm' lineHeight={1.3} sx={{ transition: '0.2s ease' }} />
      </Stack>

    </Stack>
  );
}
