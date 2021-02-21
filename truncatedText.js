/* eslint-disable no-nested-ternary */
import { Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function TruncatedText({ text, limit, ...rest }) {
  const [open, setOpen] = useState(false);
  const truncatedText = text.split(' ').slice(0, limit).join(' ');
  return (
    <Text {...rest}>
      {
        truncatedText.length === text.length
          ? text
          : open ? text : `${truncatedText}...`
      }
      {
        truncatedText.length !== text.length
          ? (
            <Button variant='link' colorScheme='gt' onClick={() => setOpen(!open)} size='sm' fontWeight='medium' lineHeight={1.3}>
              {
                open ? 'less' : 'more'
              }
            </Button>
          )
          : ''
      }
    </Text>
  );
}
