import Link from "next/link";

export default function AccountSettingsEditInfoLayout(props) {
    const Outlet = () => props.children;

    return (
        <>
            <div className="border-b pb-4 pt-2 px-2">
                <ul className="flex gap-5 items-center">
                    <li>
                        <Link href="/account/settings/editInfo/username">
                            <a className="font-semibold">username</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account/settings/editInfo/email">
                            <a className="font-semibold">email</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account/settings/editInfo/password">
                            <a className="font-semibold">password</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}