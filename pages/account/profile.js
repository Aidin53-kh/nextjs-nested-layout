import Container from "../../components/container"
import AccountLayout from "../../components/layouts/AccountLayout"

export default function Profile() {
    return (
        <Container className="profile-page text-center mt-36">
            <h1 className="text-3xl font-bold">Profile Page</h1>
        </Container>
    )
}

Profile.getLayout = function getLayout(page) {
    return (
        <AccountLayout>{page}</AccountLayout>
    )
}
