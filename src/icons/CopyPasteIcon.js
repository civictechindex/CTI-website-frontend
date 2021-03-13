import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CopyPasteIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M13 0H2C0.9 0 0 0.9 0 2V15C0 15.55 0.45 16 1 16C1.55 16 2 15.55 2 15V3C2 2.45 2.45 2 3 2H13C13.55 2 14 1.55 14 1C14 0.45 13.55 0 13 0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM16 20H7C6.45 20 6 19.55 6 19V7C6 6.45 6.45 6 7 6H16C16.55 6 17 6.45 17 7V19C17 19.55 16.55 20 16 20Z' />
    </SvgIcon>
  );
};

export default CopyPasteIcon;
