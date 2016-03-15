import React from 'react';

const HelloWorld = ({message, children}) => {
  return(
    <div>
      <h1>{message}</h1>
      <h1>{children}</h1>
    </div>
  )
};

export default HelloWorld;


/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */
