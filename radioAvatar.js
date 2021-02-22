/* eslint-disable no-sparse-arrays */
/* eslint-disable react/destructuring-assignment */
import {
  useRadio,
  Box,
  useRadioGroup,
  HStack,
  Img,
} from '@chakra-ui/react';
import { avatarURLs } from './review';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label' p={0}>
      <input name='avatar' {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderRadius='100%'
        _checked={{
          bg: 'gt.400',
          color: 'white',
          borderColor: 'gt.400',
          borderWidth: '2px',
        }}
        _focus={{
          // boxShadow: 'outline',
        }}
        mb={2}
        p={0}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function RadioAvatar({}) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'avatar',
    defaultValue: '',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} wrap={['wrap',, 'nowrap']}>
      {Object.keys(avatarURLs).map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            <Img
              borderRadius='full'
              // boxSize={['60px', '70px']}
              src={avatarURLs[value]}
              alt='Avatar'
              objectFit='contain'
              w={['50px', '60px', 'auto']}
            />
          </RadioCard>
        );
      })}
    </HStack>
  );
}
