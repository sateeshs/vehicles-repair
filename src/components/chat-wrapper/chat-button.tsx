import InlineButton from "./inline-button";
const ChatButton = () => {
    return (
        <div className="relative">
          <button className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                          fixed bottom-0 right-0 right-5 rounded-lg
                          mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10">
            <div className="p-3 rounded-full border-4 border-white bg-red-600">
              <InlineButton/>
            </div>
        
          </button>
        </div>)
}

export default ChatButton;