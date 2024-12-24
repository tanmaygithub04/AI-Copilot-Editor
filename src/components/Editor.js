import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BubbleMenu from './BubbleMenu'; 

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'This is some sample text to edit. Highlight any part of it!',
            },
          ],
        },
      ],
    },
  });

  const [showMenu, setShowMenu] = useState(false);
  const [selection, setSelection] = useState(null);

  const toggleMenu = (e) => {
    const { selection } = editor.state;
    if (selection.empty) {
      setShowMenu(false);
    } else {
      const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
      setSelection(rect);
      setShowMenu(true);
    }
  };

  const aiAction = (action, text) => {
    // this will actually call an AI service to shorten or lengthen the text
    return new Promise((resolve) => {
      setTimeout(() => {
        if (action === 'shorten') {
          resolve(text.slice(0, text.length / 2)); // Simply cut the text in half for now
        } else if (action === 'lengthen') {
          resolve(text + ' (continued text to make it longer...)');
        }
      }, 1000);
    });
  };

  const handleAction = (action) => {
    const selectedText = window.getSelection().toString();
    aiAction(action, selectedText).then((result) => {
      editor.chain().focus().deleteSelection().insertContent(result).run();
    });
    setShowMenu(false); 
  };

  editor.on('selectionUpdate', toggleMenu);
  // if our selection is not empty we want to show the bubble menu
  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      {showMenu && selection && (
        <BubbleMenu rect={selection} onAction={handleAction} />
      )}

    </div>
  );
};

export default Editor;
