import React, {useRef, useEffect, forwardRef} from 'react';
import data from '@emoji-mart/data';
import {Picker} from 'emoji-mart';

const Emoji = forwardRef((props, ref) => {
  useEffect(() => {
    new Picker({...props, data, ref});
  }, []);

  return <div ref={ref} />;
});

export default Emoji;
