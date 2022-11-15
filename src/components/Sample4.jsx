import React from "react";
import CodeBlock from "@theme/CodeBlock";
const Sample = (props) => {
  return (
    <div>
      {props.test}
      <CodeBlock
        language="js"
        title="/src/components/HelloCodeTitle.js"
        showLineNumbers
      >
        {`
function HelloCodeTitle(props) {
return <h1>Hello, {props.name}</h1>;
const name = null;
// This will error
console.log(name.toUpperCase());
// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
}`}
      </CodeBlock>
    </div>
  );
};

export default Sample;
