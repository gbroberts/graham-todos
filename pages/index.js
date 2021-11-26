import { AppBar } from "components/appbar"
import { GoogleProvider } from "components/authentication/providers"
import { Title } from "ui/title"
import { Divider } from "ui/spacers"
import { UserLogin } from "components/authentication/user-login"
import { Legal, HighLight } from "ui/legal"
import { PageLayout, PageHeader, PageFooter, PageBody } from "layouts/loginpage";

function Index() {

    return (
        <>
            <AppBar />
            <PageLayout>
                <PageHeader>
                    <Title>Account Login</Title>
                </PageHeader>
                <PageBody>
                    <GoogleProvider>With Google</GoogleProvider>
                    <Divider>OR</Divider>
                    <UserLogin />
                </PageBody>
                <PageFooter>
                    <Legal>Legal Stuff  <HighLight>terms and conditions</HighLight></Legal>
                </PageFooter>

            </PageLayout>
        </>
    )
}



export default Index