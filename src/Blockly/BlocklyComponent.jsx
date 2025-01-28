import React, { useEffect, useRef, useState } from "react";
import "./BlocklyComponent.css";

import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import { pythonGenerator } from "blockly/python";
import * as locale from "blockly/msg/en";
import "blockly/blocks"; // Import default blocks

Blockly.setLocale(locale);

function BlocklyComponent(props) {
  const blocklyDiv = useRef(null); // Reference for the Blockly workspace div
  const toolbox = useRef(null); // Reference for the toolbox
  const primaryWorkspace = useRef(null); // Reference for the Blockly workspace
  const [code, setCode] = useState(""); // State for JavaScript code
  const [pythonCode, setPythonCode] = useState(""); // State for Python code

  useEffect(() => {
    // Destructure properties passed to the component
    const { initialXml, children, onWorkspaceChange, ...rest } = props;

    // Inject Blockly workspace
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    // Load initial XML if provided
    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(initialXml),
        primaryWorkspace.current
      );
    }

    // Listener to handle workspace changes and update code states
    const handleWorkspaceChange = () => {
      const jsCode = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
      const pyCode = pythonGenerator.workspaceToCode(primaryWorkspace.current);

      setCode(jsCode); // Update JavaScript code state
      setPythonCode(pyCode); // Update Python code state

      // Call the parent callback if provided
      if (onWorkspaceChange) {
        onWorkspaceChange({ jsCode, pyCode });
      }
    };

    // Attach the listener to the workspace
    primaryWorkspace.current.addChangeListener(handleWorkspaceChange);

    // Cleanup listener on component unmount
    return () => {
      if (primaryWorkspace.current) {
        primaryWorkspace.current.removeChangeListener(handleWorkspaceChange);
      }
    };
  }, [props]); // Dependencies array ensures effect runs only on prop changes

  return (
    <React.Fragment>
      {/* Blockly workspace */}
      <div ref={blocklyDiv} id="blocklyDiv"  />

      {/* Hidden toolbox */}
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>

      {/* Code display */}
      <div className="codearea">
        <textarea
          value={code}
          className="code"
          readOnly
          placeholder="JavaScript Code"
        />
        <textarea
          value={pythonCode}
          className="code"
          readOnly
          placeholder="Python Code"
        />
      </div>
    </React.Fragment>
  );
}

export default BlocklyComponent;
