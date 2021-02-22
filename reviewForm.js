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
import { useState } from 'react';
import RadioAvatar from './radioAvatar';
import { avatarURLs } from './review';

export default function ReviewForm({ isOpen, onClose, ...rest }) {
  const [rating, setRating] = useState(0);
  const theme = useTheme();

  const [show, setShow] = useState(false);
  const handleAnonymousClick = () => setShow(!show);

  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const [formData, setFormData] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    setFormData((currentFormData) => ({ ...currentFormData, ...data}));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size='2xl' {...rest}>
      <ModalOverlay />
      <ModalContent px={[0, 3, 10]} pt={[3, 1]} pb={[6]} borderRadius='2xl'>
        <ModalHeader color='gray.600' fontWeight='medium' fontSize='2xl'>Useful Review, Useless Bank</ModalHeader>
        <ModalCloseButton colorScheme='gt' color='gray.600' />
        <ModalBody color='gray.500'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id='name'>
                <FormLabel>Display name</FormLabel>
                <Input type='text' placeholder='Enter a name' name='name' ref={register} />
                <InputRightElement top='52%' right='5px'>
                  <Button h='1.75rem' size='sm' onClick={handleAnonymousClick}>
                    Anonymous
                  </Button>
                </InputRightElement>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Pick your avatar</FormLabel>
                <RadioAvatar name='avatar' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Rating</FormLabel>
                <StarRatings
                  rating={rating}
                  starDimension='40px'
                  starSpacing='4px'
                  starEmptyColor={theme.colors.gt[100]}
                  starRatedColor={theme.colors.gt[500]}
                  changeRating={(newRating) => setRating(newRating)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input type='text' placeholder='Subject line' name='subject' ref={register} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Review</FormLabel>
                <Textarea type='text' placeholder='Write a review' name='review' ref={register} />
              </FormControl>
              <Button colorScheme='gt' borderRadius='4xl' pl={[4, 8]} pr={[4, 8]} maxW='200px' type='submit' mb={[8,, 0]}>Submit</Button>
            </Stack>
          </form>
        </ModalBody>

        {/* <ModalFooter>
          <Button colorScheme='gt' type='submit'>Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}
