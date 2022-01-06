import copy from 'copy-to-clipboard';
import React from 'react';
import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';
import ChromaToast from '../../BaseComponents/ChromaToast';

const DonateAction = {
  PAID: ({ redeem_code, toast }) => (
    <DonateCopyCC redeem_code={redeem_code} toast={toast} />
  ),
  UNPAID: ({ checkout_url }) => <DonatePayNow checkout_url={checkout_url} />,
};

const DonatePayNow = ({ checkout_url }) => (
  <ChromaButton types={typesList.primaryFlat} href={checkout_url} as='a'>
    Bayar Sekarang
  </ChromaButton>
);

const DonateCopyCC = ({ redeem_code, toast }) => (
  <ChromaButton
    types={typesList.primaryFlat}
    onClick={() => {
      copy(redeem_code);
      toast({
        duration: 1500,
        position: 'top-right',
        render: () => {
          return (
            <ChromaToast
              title='Kode CC berhasil disalin'
              subtitle={redeem_code}
            />
          );
        },
      });
    }}
  >
    Salin Kode CC
  </ChromaButton>
);

const DonateCardActionButton = (props) => {
  if (!DonateAction[props.donation_status]) return <></>;
  return DonateAction[props.donation_status](props);
};

export { DonateCopyCC, DonatePayNow, DonateCardActionButton };
