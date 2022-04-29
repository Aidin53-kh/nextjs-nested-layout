import AccountLayout from "../../../components/layouts/AccountLayout"
import AccountSettingsLayout from "../../../components/layouts/AccountSettingsLayout"

export default function ForgetPassword(props) {
    return (
        <div className="settings-page flex items-center justify-center h-full">
            <h2 className="text-xl">forget password page</h2>
        </div>
    )
}

ForgetPassword.getLayout = function getLayout(page) {
    return (
        <AccountLayout>
            <AccountSettingsLayout>
                {page}
            </AccountSettingsLayout>
        </AccountLayout>
    )
}
