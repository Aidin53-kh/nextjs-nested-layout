import AccountLayout from "../../../components/layouts/AccountLayout"
import AccountSettingsLayout from "../../../components/layouts/AccountSettingsLayout"

export default function Settings() {
    return (
        <div className="settings-page flex items-center justify-center h-full">
            <h2 className="text-xl">settings main page</h2>
        </div>
    )
}

Settings.getLayout = function getLayout(page) {
    return (
        <AccountLayout>
            <AccountSettingsLayout>
                {page}
            </AccountSettingsLayout>
        </AccountLayout>
    )
}
