import React, { useEffect, useRef, useState } from "react";
import "./BlocklyComponent.css";

import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import { pythonGenerator } from "blockly/python";
import * as locale from "blockly/msg/en";
import "blockly/blocks"; // Import default blocks

import * as Sk from "skulpt"; // 

Blockly.setLocale(locale);

function BlocklyComponent(props) {
  const blocklyDiv = useRef(null); // Reference for the Blockly workspace div
  const toolbox = useRef(null); // Reference for the toolbox
  const primaryWorkspace = useRef(null); // Reference for the Blockly workspace
  const [code, setCode] = useState(""); // State for JavaScript code
  const [pythonCode, setPythonCode] = useState(""); // State for Python code
  const [output, setOutput] = useState("");
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
      const jsCode = javascriptGenerator.workspaceToCode(
        primaryWorkspace.current
      );
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

  const runJavaScript = () => {
    try {
      let capturedLogs = [];
      
      // Override console.log to capture the output
      const originalLog = console.log;
      console.log = (...args) => {
        capturedLogs.push(args.join(" "));
        originalLog.apply(console, args); // Keep the original log behavior
      };
  
      // Execute the code
      eval(code);
  
      // Show the captured logs in an alert
      if (capturedLogs.length > 0) {
        alert(capturedLogs.join("\n"));
        setOutput(capturedLogs.join("\n"));
      } else {
        alert("Code executed successfully (No output).");
        setOutput("Code executed successfully (No output).");
      }
  
      // Restore console.log
      console.log = originalLog;
    } catch (error) {
      alert(`Error: ${error.message}`);
      setOutput(`Error: ${error.message}`);
    }
  };
  


// Python Code
  const runPython = () => {
    Sk.configure({
      output: (text) => {
        setOutput((prevOutput) => prevOutput + text);
      },
      read: (x) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
          throw `File not found: '${x}'`;
        }
        return Sk.builtinFiles["files"][x];
      },
    });

    setOutput(""); // Clear previous output
    Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, pythonCode))
      .then(() => {
        setOutput((prevOutput) => prevOutput || "Code executed successfully");
      })
      .catch((err) => {
        setOutput(`Error: ${err.toString()}`);
      });
  };
  return (
    <React.Fragment>
      {/* Blockly workspace */}
      <div ref={blocklyDiv} id="blocklyDiv" />

      {/* Hidden toolbox */}
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>

      {/* Code display */}
      <div className="codearea">
        <textarea
          value={props.language === "javascript" ? code : pythonCode}
          className="code"
          readOnly
          placeholder={`${props.language} Code`}
        />

        <textarea
          style={{ background: "black", color: "white" }}
          value={output}
          className="code1"
          readOnly
          placeholder="Output"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 20,
        }}
      >
        <button
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={props.language === "javascript" ? runJavaScript : runPython}
        >
          Run
        </button>
      </div>

      {/* <div className="output">
        <h3>Output</h3>
        <textarea
          value={output}
          readOnly
          style={{ width: "100%", height: "100px" }}
        />
      </div> */}
    </React.Fragment>
  );
}

export default BlocklyComponent;
