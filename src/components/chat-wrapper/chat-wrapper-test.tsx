import Header from "../header";
import ChatHeader from "./header";
import TextArea from "./text-area";
//import * as chatWindow from "react-chat-window";
//const chatWindow = require("react-chat-window")

interface ChatProps {

}
const ChatWrapper = ({}:ChatProps) => {
    const _onMessageWasSent= (message: string) => {
        // this.setState({
        //   messageList: [...this.state.messageList, message]
        // });
      }
    
      const _onFilesSelected = (fileList: any) => {
        // const objectURL = window.URL.createObjectURL(fileList[0]);
        // this.setState({
        //   messageList: [...this.state.messageList, {
        //     type: 'file', author: 'me',
        //     data: {
        //       url: objectURL,
        //       fileName: fileList[0].name
        //     }
        //   }]
        // });
      }
    
      const _sendMessage= (text:string) => {
        // if (text.length > 0) {
        //   const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
        //   this.setState({
        //     newMessagesCount: newMessagesCount,
        //     messageList: [...this.state.messageList, {
        //       author: 'them',
        //       type: 'text',
        //       data: { text }
        //     }]
        //   });
        // }
      }
    
      const _handleClick= () =>{
        // this.setState({
        //   isOpen: !this.state.isOpen,
        //   newMessagesCount: 0
        // });
      }

      
    return( <div>
        {/* <ChatHeader />
        <TextArea
          onMessage={_sendMessage.bind(this)}
        />
        <chatWindow.Launcher
          agentProfile={{
            teamName: 'react-chat-window',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={_onMessageWasSent.bind(this)}
          onFilesSelected={_onFilesSelected.bind(this)}
          messageList={state.messageList}
          newMessagesCount={state.newMessagesCount}
          handleClick={_handleClick.bind(this)}
          isOpen={state.isOpen}
          showEmoji
        />
        <img className="demo-monster-img" src={monsterImgUrl} /> */}
        {/* <Footer /> */}
      </div>)
}

export default ChatWrapper;