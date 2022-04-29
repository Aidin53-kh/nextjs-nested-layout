import AccountLayout from "../../../../components/layouts/AccountLayout"
import AccountSettingsEditInfoLayout from "../../../../components/layouts/AccountSettingsEditInfoLayout"
import AccountSettingsLayout from "../../../../components/layouts/AccountSettingsLayout"

export default function EditInfo(props) {
    return (
        <div className="text-center mt-20">
            <h3 className="text-2xl">Edit Username Form</h3>
        </div>
    )
}

EditInfo.getLayout = function getLayout(page) {
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
