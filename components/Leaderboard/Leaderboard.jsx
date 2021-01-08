import React from 'react';

const Leaderboard = (props) => {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWSqDNAbqLY2t3pVX-nFeA3604PtzZMvelCeRdZqx4cVnVNQlXaFL66yJ3ajld4oTAd6CUHX_UKqGh/pubchart?oid=25596175&amp;format=interactive";

  return (
    <iframe width={props.width} height={props.height} seamless scrolling="no" src={url} />
  );
};

export default Leaderboard;