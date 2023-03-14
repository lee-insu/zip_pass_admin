import Editor from "ckeditor5-custom-build/build/ckeditor";
import {CKEditor} from "@ckeditor/ckeditor5-react";

const EditorModule = ({isEditorReady}: any) => {
  return <>{isEditorReady && <CKEditor data={"Title"} editor={Editor} />}</>;
};

export default EditorModule;
