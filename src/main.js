import { render } from "preact";
import { useForm } from "react-hook-form";

import { html} from "./html";

// Restore this line to fix the bug
// window.process = { env: { NODE_DEV: "production" } };

const App = () => {
  const { register } = useForm();

  return html`
    <form>
      <input type=text name=test ref=${register} value=test>
    </form>
  `;
}


render(html`<${App}/>`, document.getElementById("app"));