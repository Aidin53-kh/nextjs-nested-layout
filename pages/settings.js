import Link from "next/link";

export default function About() {
    return (
        <div className="settings-page">
            <h1>this is settings</h1>
            <ul>
                <li>
                    <Link href="/settings/editName">
                        <a>edit name</a>
                    </Link>
                </li>
                <li>
                    <Link href="/settings/editEmail">
                        <a>edit email</a>
                    </Link>
                </li>
                <li>
                    <Link href="/settings/editAvatar">
                        <a>edit avatar</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
