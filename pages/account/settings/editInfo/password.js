import AccountLayout from "../../../../components/layouts/AccountLayout"
import AccountSettingsEditInfoLayout from "../../../../components/layouts/AccountSettingsEditInfoLayout"
import AccountSettingsLayout from "../../../../components/layouts/AccountSettingsLayout"

export default function Password(props) {
    return (
        <div className="text-center mt-20">
            <h3 className="text-2xl">Edit Password Form</h3>
        </div>
    )
}

Password.getLayout = function getLayout(page) {
    return (
        <AccountLayout>
            <AccountSettingsLayout>
                <AccountSettingsEditInfoLayout>
                    {page}
                </AccountSettingsEditInfoLayout>
            </AccountSettingsLayout>
        </AccountLayout>
    )
}