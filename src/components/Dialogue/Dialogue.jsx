import React from 'react';
import {closeDialogue, getDialogueState} from '../../core/store/dialogue.slice';
import {Warper} from './Dialogue.style';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Dialogue = () => {
  const dialogue = useSelector(getDialogueState);
  const dispatch = useDispatch();
  const onEscape = (e) => {
    if (e.key === 'Escape' && dialogue.show && dialogue.type === 'dialogue') {
      dispatch(closeDialogue());
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [dialogue]);
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
