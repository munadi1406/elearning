import { useState } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import {FaBold,FaItalic,FaUnderline,FaListUl ,FaListOl,FaStrikethrough,FaCode} from 'react-icons/fa'
import 'draft-js/dist/Draft.css';
import { useEffect } from 'react';
import { stateToHTML} from 'draft-js-export-html';
import PropTypes from 'prop-types'


export default function TextEditor({setPengumuman}) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleInlineStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleBlockTypeClick = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return null;
    }
    return getDefaultKeyBinding(e);
  };

  useEffect(()=>{
    const contentState = editorState.getCurrentContent();
    const contentHTML = stateToHTML(contentState);
    setPengumuman(contentHTML)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[editorState])

  return (
    <div className='w-full flex flex-wrap flex-col p-2'>
      <div className='mb-2 flex flex-wrap gap-3 bg-blue1 text-white p-2 rounded-md '>
        <button onClick={() => handleInlineStyleClick('BOLD')} type='button' className='font-bold'><FaBold/></button>
        <button onClick={() => handleInlineStyleClick('ITALIC')} type='button' className='italic'><FaItalic/></button>
        <button onClick={() => handleInlineStyleClick('UNDERLINE')} type='button' className='underline'><FaUnderline/></button>
        <button onClick={() => handleInlineStyleClick('STRIKETHROUGH')} type='button' className='line-through'><FaStrikethrough/></button>
        <button onClick={() => handleBlockTypeClick('unordered-list-item')} type='button' className='list-disc'><FaListUl/></button>
        <button onClick={() => handleBlockTypeClick('ordered-list-item')} type='button' className='list-decimal'><FaListOl/></button>
        <button onClick={() => handleBlockTypeClick('header-one')} type='button' className='text-2xl'>H1</button>
        <button onClick={() => handleBlockTypeClick('header-two')} type='button' className='text-xl'>H2</button>
        <button onClick={() => handleBlockTypeClick('header-three')} type='button' className='text-lg'>H3</button>
        <button onClick={() => handleBlockTypeClick('code-block')} type='button' ><FaCode/></button>
      </div>
      <div className='border rounded-md border-blue1 p-2 '>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={mapKeyToEditorCommand}
        placeholder='Ada Pengumuman Apa Nih Hari Ini ?'
      />
      </div>
    </div>
  );
}
TextEditor.propTypes ={
    setPengumuman:PropTypes.func.isRequired
}
