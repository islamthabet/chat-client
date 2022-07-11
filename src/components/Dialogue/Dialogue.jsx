import React from 'react';
import {getDialogueState} from '../../core/store/dialogue.slice';
import {Warper} from './Dialogue.style';
import {useSelector} from 'react-redux';

const Dialogue = () => {
  const dialogue = useSelector(getDialogueState);
  return (
    <>
      {dialogue.show && dialogue.type === 'dialogue' && (
        <Warper width={dialogue.width} height={dialogue.height}>
          <i
            className='pi pi-times closeBtn cursor-pointer'
            onClick={dialogue.onReject}></i>
          <div className='dialogue__content'>
            <div className='dialogue__content__title'>{dialogue.title}</div>
            {dialogue.content}
          </div>
        </Warper>
      )}
    </>
  );
};

export default Dialogue;
