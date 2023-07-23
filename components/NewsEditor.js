"use client"
import { useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from '../src/app/styles/newStyles.module.css'

const NewsEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleImageUpload = (file) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', {
      src: URL.createObjectURL(file),
    });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

    setEditorState(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
    );
  };

  return (
    <div className={styles.texteditorcontent}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="news-editor-wrapper"
        editorClassName={styles.news_editor_content}
        toolbar={{
          image: {
            uploadCallback: handleImageUpload,
            alt: { present: true, mandatory: false },
          },
        }}
      />
    </div>
  );
};

export default NewsEditor;
