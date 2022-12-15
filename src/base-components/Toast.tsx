import React from 'react';
import { Box } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { Toast as ToastProps } from 'types';
import IconTextDisplay from './IconTextDisplay';

const Toast = ({
  toast,
  handleClose,
} : {
  toast: ToastProps,
  handleClose: () => void
}) => {
  const { description, ToastIcon, iconColor = 'black' } = toast;

  return (
    <Box
      background="white"
      boxShadow="dark-lg"
      maxHeight="50%"
      overflowY="auto"
      padding={2}
    >
      <SmallCloseIcon
        float="right"
        top={0}
        cursor="pointer"
        onClick={handleClose}
      />
      <Box
        paddingX={2}
        paddingY={4}
      >
        <IconTextDisplay
          text={description}
          Icon={ToastIcon}
          iconColor={iconColor}
        />
      </Box>
    </Box>
  );
};

export default Toast;
