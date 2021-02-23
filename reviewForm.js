/* eslint-disable no-sparse-arrays */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useTheme,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Stack,
  Textarea,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import StarRatings from 'react-star-ratings';
import { useState, useEffect } from 'react';
import RadioAvatar from './radioAvatar';

export default function ReviewForm({ isOpen, onClose, ...rest }) {
  const [rating, setRating] = useState(0);
  const onRatingChange = ((newRating) => setRating(newRating));
  const [avatarIndex, setAvatarIndex] = useState(String(Math.floor(Math.random() * 7)));
  const onSelectAvatar = (value) => {
    setAvatarIndex(value);
  };
  const [anonymous, setAnonymous] = useState(false);

  const theme = useTheme();

  const {
    register, handleSubmit, errors, reset, setValue, clearErrors,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  });
  const onSubmit = (data) => {
    const concatData = { ...data, rating, avatarIndex };
    console.log(concatData);
  };

  const toggleAnonymous = () => {
    setAnonymous((anon) => !anon);
    setValue('name', `${anonymous ? '' : 'Anonymous'}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => { onClose(); reset(); setRating(0); setAnonymous(false); clearErrors(); }} isCentered motionPreset='slideInBottom' size='2xl' {...rest}>
      <ModalOverlay />
      <ModalContent px={[0, 3, 10]} pt={[3, 1]} pb={[6]} borderRadius='2xl'>
        <ModalHeader color='gray.600' fontWeight='medium' fontSize='2xl'>Useful Review, Useless Bank</ModalHeader>
        <ModalCloseButton colorScheme='gt' color='gray.600' />
        <ModalBody color='gray.500'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id='name'>
                <FormLabel>Display name</FormLabel>
                <Input type='text' placeholder='Enter a name' name='name' ref={register} isDisabled={anonymous} isInvalid={errors.name} />
                <InputRightElement top='52%' right='5px'>
                  <Button h='1.75rem' size='sm' onClick={toggleAnonymous} colorScheme={anonymous ? 'gt' : 'gray'}>
                    Anonymous
                  </Button>
                </InputRightElement>
              </FormControl>
              <FormControl>
                <FormLabel>Pick your avatar</FormLabel>
                <RadioAvatar name='avatar' onChange={onSelectAvatar} value={avatarIndex} />
              </FormControl>
              <FormControl>
                <FormLabel>Rating *</FormLabel>
                <StarRatings
                  rating={rating}
                  starDimension='40px'
                  starSpacing='4px'
                  starEmptyColor={theme.colors.gt[100]}
                  starRatedColor={theme.colors.gt[500]}
                  changeRating={onRatingChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Subject *</FormLabel>
                <Input type='text' placeholder='Subject line' name='subject' ref={register({ required: true })} isInvalid={errors.subject} />
              </FormControl>
              <FormControl>
                <FormLabel>Review *</FormLabel>
                <Textarea type='text' placeholder='Write a review' name='review' ref={register({ required: true })} isInvalid={errors.review} />
              </FormControl>
              <Button colorScheme='gt' borderRadius='4xl' pl={[4, 8]} pr={[4, 8]} maxW='200px' type='submit' mb={[8,, 0]}>Submit</Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
