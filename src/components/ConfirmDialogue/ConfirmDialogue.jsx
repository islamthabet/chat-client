import React from 'react';
import {useSelector} from 'react-redux';
import {getDialogueState} from '../../core/store/dialogue.slice';
import {Button} from 'primereact/button';
import {Warper} from './ConfirmDialogue.style';

const ConfirmDialogue = () => {
  const dialogue = useSelector(getDialogueState);
  return (
    <>
      {dialogue.show && dialogue.type === 'confirm' && (
        <Warper>
          <div className='dialogue__content'>
            <div className='dialogue__content__title'>{dialogue.title}</div>
            <div className='dialogue__content__body'>{dialogue.content}</div>
            <div className='dialogue__content__buttons'>
              <Button
                label='CANCEL'
                className='p-button-outlined p-button-danger'
                onClick={dialogue.onReject}></Button>
              <Button
                className='p-button-raised p-button-success'
                label='OK'
                onClick={dialogue.onAccept}></Button>
            </div>
          </div>
        </Warper>
      )}
    </>
  );
};

export default ConfirmDialogue;
