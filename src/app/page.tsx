import { Meta } from "@/components/layouts/meta";
import { Main } from "@/components/templates/main";
import { BaseNextPage } from "@/types/base-next-page";

const HomePage: BaseNextPage<{}> = () => {
    return(   <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
        <p></p>
    </Main>)
}
HomePage.auth = false;
export default HomePage;