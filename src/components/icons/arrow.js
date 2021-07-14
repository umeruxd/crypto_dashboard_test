import React from 'react';

const ArrowIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={props.class}
    >
      <path
        id="icon"
        className="cls-1"
        d="M11.293,19.814H11.226a1.4,1.4,0,0,1-1.27-.976L7.862,12.159,1.2,10.517A1.4,1.4,0,0,1,.96,7.889L17.7,0.4a1.392,1.392,0,0,1,1.851,1.814L12.578,18.959A1.389,1.389,0,0,1,11.293,19.814Zm6.97-18.153L1.518,9.149,8.96,10.977l2.326,7.442L18.263,1.661h0Z"
      />
    </svg>
  );
};

export default ArrowIcon;
