'use client'
import { useRef } from "react";

interface TextAreaProps {
    onMessage: any
}
const TextArea = ({onMessage}:TextAreaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    return (
        <div className="demo-test-area--wrapper">
          <div className="demo-test-area--title">
            <div className="demo-test-area--title-main">react-chat-window demo</div>
            <div className="demo-test-area--title-sub">
              <a href="https://kingofthestack.com">made by King of the Stack</a>
            </div>
          </div>
          <form className="demo-test-area" onSubmit={(e)=> {
            e.preventDefault();
                onMessage(textAreaRef?.current?.value);
                const textControl = textAreaRef?.current;
                if (textControl !== null) {
                    textControl.value = '';
                }
          }}>
            <div className="demo-test-area--preamble">Test the chat window by sending a message:</div>
            <textarea
              ref={textAreaRef}
              className="demo-test-area--text"
              placeholder="Write a test message...."
            />
            <button className="demo-test-area--button"> Send Message! </button>
          </form>
          <p className="demo-test-area--info">
            react-chat-window is a chat window that allows you to build and add custom live chat to your sites. It includes only the react chat widget. There is no backend, and no communication system baked in.
            <br />
            <br/>
            Usage instructions for react-chat-window are <a href="https://github.com/kingofthestack/react-chat-window">on Github</a>.
          </p>
        </div>
      );
    }
export default TextArea;