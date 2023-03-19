import "@/styles/globals.css";
import "@toast-ui/editor/dist/toastui-editor.css";

import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
