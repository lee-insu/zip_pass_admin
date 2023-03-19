import React, {useRef, useEffect} from "react";
import {Editor} from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

interface ToastEditorProps {
  onShowContent: (content: string) => void;
}

const ToastEditor: React.FC<ToastEditorProps> = ({onShowContent}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorInstance = useRef<Editor | null>(null);

  useEffect(() => {
    if (editorRef.current && !editorInstance.current) {
      editorInstance.current = new Editor({
        el: editorRef.current,
        previewStyle: "vertical",
        height: "500px",
        initialValue: "",
      });
    }
  }, []);

  const showContent = () => {
    onShowContent(editorInstance.current!.getMarkdown());
  };

  return (
    <>
      <div ref={editorRef}></div>
      <button onClick={showContent}>클릭</button>
    </>
  );
};

export default ToastEditor;
