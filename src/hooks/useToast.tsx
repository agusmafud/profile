import React from 'react';
import { useToast as ChakraUseToast } from '@chakra-ui/react';

import { Toast as ToastProps } from 'types';
import Toast from 'base-components/Toast';

const useToast = () => {
  const toast = ChakraUseToast();
  const handleCloseToasts = () => toast.closeAll();

  const renderToast = ({
    description,
    ToastIcon,
    iconColor,
  } : ToastProps) => (
    <Toast
      toast={{ description, ToastIcon, iconColor }}
      handleClose={handleCloseToasts}
    />
  );

  const handleBadgeClick = ({
    description,
    ToastIcon,
    iconColor,
  } : ToastProps) => {
    handleCloseToasts();
    toast({
      render: () => renderToast({ description, ToastIcon, iconColor }),
      duration: 9000,
      isClosable: true,
    });
  };

  return {
    handleCloseToasts,
    handleBadgeClick,
  };
};

export default useToast;
