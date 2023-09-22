import ChatButton from "@/components/chat-wrapper/chat-button";
import ChatWrapper from "@/components/chat-wrapper/chat-wrapper-test";
//import ChatWrapper from "@/components/chat-wrapper/chat-wrapper";
import { Meta } from "@/components/layouts/meta";
import { Main } from "@/components/templates/main";
import { BaseNextPage } from "@/types/base-next-page";

const HomePage: BaseNextPage<{}> = () => {
    return(   <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
        <p></p>
        <ChatButton></ChatButton>
        {/* <ChatWrapper></ChatWrapper> */}
    </Main>)
}
HomePage.auth = false;
export default HomePage;