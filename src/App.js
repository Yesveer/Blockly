// import React, { useState } from "react";
// import "./App.css";

// import logo from "./logo.svg";

// import BlocklyComponent, {
//   Block,
//   Value,
//   Field,
//   Shadow,
//   Category,
// } from "./Blockly";

// import "./blocks/customblocks";
// import "./generator/generator";
// import { defaultToolbox } from "./fields/DefaultTool";
// import { javascriptGenerator } from "blockly/javascript";

// function App(props) {
//   const onWorkspaceChange = (workspace) => {
//     if (workspace) {
//       console.log("Workspace", workspace);
//     }
//   };

//   return (
//     <div className="app">
//       <BlocklyComponent
//         language="python"
//         readOnly={false}
//         trashcan={true}
//         zoom={{
//           controls: true,
//         }}
//         onWorkspaceChange={onWorkspaceChange}
//         grid={{
//           spacing: 25,
//           length: 3,
//           colour: "#ccc",
//           snap: true,
//         }}
//         locale="zh-hans"
//         media={"media/"}
//         move={{
//           scrollbars: true,
//           drag: true,
//           wheel: true,
//         }}
//         initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml">
// <block type="controls_ifelse" x="0" y="0"></block>
// </xml>`}
//       >
//         <Category name="Logic" colour="#5b80a5">
//           <Block type="controls_if"></Block>
//           <Block type="logic_compare">
//             <Field name="OP">EQ</Field>
//           </Block>
//           <Block type="logic_operation">
//             <Field name="OP">AND</Field>
//           </Block>
//           <Block type="logic_negate"></Block>
//           <Block type="logic_boolean">
//             <Field name="BOOL">TRUE</Field>
//           </Block>
//           <Block type="logic_null"></Block>
//           <Block type="logic_ternary"></Block>
//         </Category>
//         <Category name="Loops" colour="#5ba55b">
//           <Block type="controls_repeat_ext">
//             <Value name="TIMES">
//               <Shadow type="math_number">
//                 <Field name="NUM">10</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="controls_whileUntil">
//             <Field name="MODE">WHILE</Field>
//           </Block>
//           <Block type="controls_for">
//             <Field name="VAR">i</Field>
//             <Value name="FROM">
//               <Shadow type="math_number">
//                 <Field name="NUM">1</Field>
//               </Shadow>
//             </Value>
//             <Value name="TO">
//               <Shadow type="math_number">
//                 <Field name="NUM">10</Field>
//               </Shadow>
//             </Value>
//             <Value name="BY">
//               <Shadow type="math_number">
//                 <Field name="NUM">1</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="controls_forEach">
//             <Field name="VAR">j</Field>
//           </Block>
//           <Block type="controls_flow_statements">
//             <Field name="FLOW">BREAK</Field>
//           </Block>
//         </Category>
//         <Category name="Math" colour="#5b67a5">
//           <Block type="math_number">
//             <Field name="NUM">0</Field>
//           </Block>
//           <Block type="math_arithmetic">
//             <Field name="OP">ADD</Field>
//             <Value name="A">
//               <Shadow type="math_number">
//                 <Field name="NUM">1</Field>
//               </Shadow>
//             </Value>
//             <Value name="B">
//               <Shadow type="math_number">
//                 <Field name="NUM">1</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_single">
//             <Field name="OP">ROOT</Field>
//             <Value name="NUM">
//               <Shadow type="math_number">
//                 <Field name="NUM">9</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_trig">
//             <Field name="OP">SIN</Field>
//             <Value name="NUM">
//               <Shadow type="math_number">
//                 <Field name="NUM">45</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_constant">
//             <Field name="CONSTANT">PI</Field>
//           </Block>
//           <Block type="math_number_property">
//             <mutation divisor_input="false"></mutation>
//             <Field name="PROPERTY">EVEN</Field>
//             <Value name="NUMBER_TO_CHECK">
//               <Shadow type="math_number">
//                 <Field name="NUM">0</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_round">
//             <Field name="OP">ROUND</Field>
//             <Value name="NUM">
//               <Shadow type="math_number">
//                 <Field name="NUM">3.1</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_on_list">
//             <mutation op="SUM"></mutation>
//             <Field name="OP">SUM</Field>
//           </Block>
//           <Block type="math_modulo">
//             <Value name="DIVIDEND">
//               <Shadow type="math_number">
//                 <Field name="NUM">64</Field>
//               </Shadow>
//             </Value>
//             <Value name="DIVISOR">
//               <Shadow type="math_number">
//                 <Field name="NUM">10</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_constrain">
//             <Value name="Value">
//               <Shadow type="math_number">
//                 <Field name="NUM">50</Field>
//               </Shadow>
//             </Value>
//             <Value name="LOW">
//               <Shadow type="math_number">
//                 <Field name="NUM">1</Field>
//               </Shadow>
//             </Value>
//             <Value name="HIGH">
//               <Shadow type="math_number">
//                 <Field name="NUM">100</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_random_int">
//             <Value name="FROM">
//               <Shadow type="math_number">
//                 <Field name="NUM">1</Field>
//               </Shadow>
//             </Value>
//             <Value name="TO">
//               <Shadow type="math_number">
//                 <Field name="NUM">100</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="math_random_float"></Block>
//         </Category>
//         <Category name="Text" colour="#5ba58c">
//           <Block type="text">
//             <Field name="TEXT"></Field>
//           </Block>
//           <Block type="text_join">
//             <mutation items="2"></mutation>
//           </Block>
//           <Block type="text_append">
//             <Field name="VAR">item</Field>
//             <Value name="TEXT">
//               <Shadow type="text">
//                 <Field name="TEXT"></Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="text_length">
//             <Value name="Value">
//               <Shadow type="text">
//                 <Field name="TEXT">abc</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="text_isEmpty">
//             <Value name="Value">
//               <Shadow type="text">
//                 <Field name="TEXT"></Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="text_indexOf">
//             <Field name="END">FIRST</Field>
//             <Value name="Value">
//               <Block type="variables_get">
//                 <Field name="VAR">text</Field>
//               </Block>
//             </Value>
//             <Value name="FIND">
//               <Shadow type="text">
//                 <Field name="TEXT">abc</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="text_charAt">
//             <mutation at="true"></mutation>
//             <Field name="WHERE">FROM_START</Field>
//             <Value name="Value">
//               <Block type="variables_get">
//                 <Field name="VAR">text</Field>
//               </Block>
//             </Value>
//           </Block>
//           <Block type="text_getSubstring">
//             <mutation at1="true" at2="true"></mutation>
//             <Field name="WHERE1">FROM_START</Field>
//             <Field name="WHERE2">FROM_START</Field>
//             <Value name="STRING">
//               <Block type="variables_get">
//                 <Field name="VAR">text</Field>
//               </Block>
//             </Value>
//           </Block>
//           <Block type="text_changeCase">
//             <Field name="CASE">UPPERCASE</Field>
//             <Value name="TEXT">
//               <Shadow type="text">
//                 <Field name="TEXT">abc</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="text_trim">
//             <Field name="MODE">BOTH</Field>
//             <Value name="TEXT">
//               <Shadow type="text">
//                 <Field name="TEXT">abc</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="text_print">
//             <Value name="TEXT">
//               <Shadow type="text">
//                 <Field name="TEXT">abc</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="text_prompt_ext">
//             <mutation type="TEXT"></mutation>
//             <Field name="TYPE">TEXT</Field>
//             <Value name="TEXT">
//               <Shadow type="text">
//                 <Field name="TEXT">abc</Field>
//               </Shadow>
//             </Value>
//           </Block>
//         </Category>
//         <Category name="Lists" colour="#745ba5">
//           <Block type="lists_create_with">
//             <mutation items="0"></mutation>
//           </Block>
//           <Block type="lists_create_with">
//             <mutation items="3"></mutation>
//           </Block>
//           <Block type="lists_repeat">
//             <Value name="NUM">
//               <Shadow type="math_number">
//                 <Field name="NUM">5</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="lists_length"></Block>
//           <Block type="lists_isEmpty"></Block>
//           <Block type="lists_indexOf">
//             <Field name="END">FIRST</Field>
//             <Value name="Value">
//               <Block type="variables_get">
//                 <Field name="VAR">list</Field>
//               </Block>
//             </Value>
//           </Block>
//           <Block type="lists_getIndex">
//             <mutation statement="false" at="true"></mutation>
//             <Field name="MODE">GET</Field>
//             <Field name="WHERE">FROM_START</Field>
//             <Value name="Value">
//               <Block type="variables_get">
//                 <Field name="VAR">list</Field>
//               </Block>
//             </Value>
//           </Block>
//           <Block type="lists_setIndex">
//             <mutation at="true"></mutation>
//             <Field name="MODE">SET</Field>
//             <Field name="WHERE">FROM_START</Field>
//             <Value name="LIST">
//               <Block type="variables_get">
//                 <Field name="VAR">list</Field>
//               </Block>
//             </Value>
//           </Block>
//           <Block type="lists_getSublist">
//             <mutation at1="true" at2="true"></mutation>
//             <Field name="WHERE1">FROM_START</Field>
//             <Field name="WHERE2">FROM_START</Field>
//             <Value name="LIST">
//               <Block type="variables_get">
//                 <Field name="VAR">list</Field>
//               </Block>
//             </Value>
//           </Block>
//           <Block type="lists_split">
//             <mutation mode="SPLIT"></mutation>
//             <Field name="MODE">SPLIT</Field>
//             <Value name="DELIM">
//               <Shadow type="text">
//                 <Field name="TEXT">,</Field>
//               </Shadow>
//             </Value>
//           </Block>
//           <Block type="lists_sort">
//             <Field name="TYPE">NUMERIC</Field>
//             <Field name="DIRECTION">1</Field>
//           </Block>
//         </Category>

//         <sep></sep>
//         <Category
//           name="Variables"
//           colour="#a55b80"
//           custom="VARIABLE"
//         ></Category>
//         <Category
//           name="Functions"
//           colour="#995ba5"
//           custom="PROCEDURE"
//         ></Category>
//       </BlocklyComponent>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BlocklyComponent, {
  Block,
  Value,
  Field,
  Shadow,
  Category,
} from "./Blockly";

import "./blocks/customblocks";
import "./generator/generator";
import Scratch from "./page/Scratch";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/javascript",
      element: <BlockCom ln={"javascript"} />,
    },
    {
      path: "/python",
      element: <BlockCom ln={"python"} />,
    },
    {
      path: "/scratch",
      element: <Scratch />,
    },
    {
      path: "/**",
      element: (
        <div>
          <h1>404 Not Found</h1>
        </div>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />;
    </Provider>
  );
}

export default App;

const BlockCom = ({ ln }) => {
  const onWorkspaceChange = (workspace) => {
    if (workspace) {
      console.log("Workspace", workspace);
    }
  };
  return (
    <>
      <BlocklyComponent
        language={ln}
        readOnly={false}
        trashcan={true}
        zoom={{
          controls: true,
        }}
        onWorkspaceChange={onWorkspaceChange}
        grid={{
          spacing: 25,
          length: 3,
          colour: "#ccc",
          snap: true,
        }}
        locale="zh-hans"
        media={"media/"}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="controls_ifelse" x="0" y="0"></block>
  </xml>`}
      >
        <Category name="Logic" colour="#5b80a5">
          <Block type="controls_if"></Block>
          <Block type="logic_compare">
            <Field name="OP">EQ</Field>
          </Block>
          <Block type="logic_operation">
            <Field name="OP">AND</Field>
          </Block>
          <Block type="logic_negate"></Block>
          <Block type="logic_boolean">
            <Field name="BOOL">TRUE</Field>
          </Block>
          <Block type="logic_null"></Block>
          <Block type="logic_ternary"></Block>
        </Category>
        <Category name="Loops" colour="#5ba55b">
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="controls_whileUntil">
            <Field name="MODE">WHILE</Field>
          </Block>
          <Block type="controls_for">
            <Field name="VAR">i</Field>
            <Value name="FROM">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="TO">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
            <Value name="BY">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="controls_forEach">
            <Field name="VAR">j</Field>
          </Block>
          <Block type="controls_flow_statements">
            <Field name="FLOW">BREAK</Field>
          </Block>
        </Category>
        <Category name="Math" colour="#5b67a5">
          <Block type="math_number">
            <Field name="NUM">0</Field>
          </Block>
          <Block type="math_arithmetic">
            <Field name="OP">ADD</Field>
            <Value name="A">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="B">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_single">
            <Field name="OP">ROOT</Field>
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">9</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_trig">
            <Field name="OP">SIN</Field>
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">45</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_constant">
            <Field name="CONSTANT">PI</Field>
          </Block>
          <Block type="math_number_property">
            <mutation divisor_input="false"></mutation>
            <Field name="PROPERTY">EVEN</Field>
            <Value name="NUMBER_TO_CHECK">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_round">
            <Field name="OP">ROUND</Field>
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">3.1</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_on_list">
            <mutation op="SUM"></mutation>
            <Field name="OP">SUM</Field>
          </Block>
          <Block type="math_modulo">
            <Value name="DIVIDEND">
              <Shadow type="math_number">
                <Field name="NUM">64</Field>
              </Shadow>
            </Value>
            <Value name="DIVISOR">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_constrain">
            <Value name="Value">
              <Shadow type="math_number">
                <Field name="NUM">50</Field>
              </Shadow>
            </Value>
            <Value name="LOW">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="HIGH">
              <Shadow type="math_number">
                <Field name="NUM">100</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_random_int">
            <Value name="FROM">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
            <Value name="TO">
              <Shadow type="math_number">
                <Field name="NUM">100</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="math_random_float"></Block>
        </Category>
        <Category name="Text" colour="#5ba58c">
          <Block type="text">
            <Field name="TEXT"></Field>
          </Block>
          <Block type="text_join">
            <mutation items="2"></mutation>
          </Block>
          <Block type="text_append">
            <Field name="VAR">item</Field>
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT"></Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_length">
            <Value name="Value">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_isEmpty">
            <Value name="Value">
              <Shadow type="text">
                <Field name="TEXT"></Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_indexOf">
            <Field name="END">FIRST</Field>
            <Value name="Value">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
            <Value name="FIND">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_charAt">
            <mutation at="true"></mutation>
            <Field name="WHERE">FROM_START</Field>
            <Value name="Value">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
          <Block type="text_getSubstring">
            <mutation at1="true" at2="true"></mutation>
            <Field name="WHERE1">FROM_START</Field>
            <Field name="WHERE2">FROM_START</Field>
            <Value name="STRING">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
          <Block type="text_changeCase">
            <Field name="CASE">UPPERCASE</Field>
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_trim">
            <Field name="MODE">BOTH</Field>
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_print">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_prompt_ext">
            <mutation type="TEXT"></mutation>
            <Field name="TYPE">TEXT</Field>
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
        </Category>
        <Category name="Lists" colour="#745ba5">
          <Block type="lists_create_with">
            <mutation items="0"></mutation>
          </Block>
          <Block type="lists_create_with">
            <mutation items="3"></mutation>
          </Block>
          <Block type="lists_repeat">
            <Value name="NUM">
              <Shadow type="math_number">
                <Field name="NUM">5</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="lists_length"></Block>
          <Block type="lists_isEmpty"></Block>
          <Block type="lists_indexOf">
            <Field name="END">FIRST</Field>
            <Value name="Value">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_getIndex">
            <mutation statement="false" at="true"></mutation>
            <Field name="MODE">GET</Field>
            <Field name="WHERE">FROM_START</Field>
            <Value name="Value">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_setIndex">
            <mutation at="true"></mutation>
            <Field name="MODE">SET</Field>
            <Field name="WHERE">FROM_START</Field>
            <Value name="LIST">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_getSublist">
            <mutation at1="true" at2="true"></mutation>
            <Field name="WHERE1">FROM_START</Field>
            <Field name="WHERE2">FROM_START</Field>
            <Value name="LIST">
              <Block type="variables_get">
                <Field name="VAR">list</Field>
              </Block>
            </Value>
          </Block>
          <Block type="lists_split">
            <mutation mode="SPLIT"></mutation>
            <Field name="MODE">SPLIT</Field>
            <Value name="DELIM">
              <Shadow type="text">
                <Field name="TEXT">,</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="lists_sort">
            <Field name="TYPE">NUMERIC</Field>
            <Field name="DIRECTION">1</Field>
          </Block>
        </Category>

        <sep></sep>
        <Category
          name="Variables"
          colour="#a55b80"
          custom="VARIABLE"
        ></Category>
        <Category
          name="Functions"
          colour="#995ba5"
          custom="PROCEDURE"
        ></Category>
      </BlocklyComponent>
    </>
  );
};
