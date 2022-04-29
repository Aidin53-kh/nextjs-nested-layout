import Container from "../../components/container";
import AccountLayout from "../../components/layouts/AccountLayout";

export default function Account() {
    return (
        <Container className="account-page text-center mt-36">
            <h1 className="text-3xl font-bold">Account Main Page</h1>
        </Container>
    )
}

Account.getLayout = function getLayout(page) {
    return (
        <AccountLayout>
            {page}
        </AccountLayout>
    )
}
