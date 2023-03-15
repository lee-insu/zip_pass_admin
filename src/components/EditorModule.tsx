import {CKEditor} from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import type {FC} from "react";

const Kolang = {language: "ko"};

const EditorModule: FC = () => {
  return <CKEditor data={"Title"} editor={Editor} config={Kolang} />;
};

export default EditorModule;
