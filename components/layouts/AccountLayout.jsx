import Link from "next/link";
import Container from "../container";

const navigationbarData = [
    { text: 'settings', url: '/account/settings' },
    { text: 'profile', url: '/account/profile' },
    { text: 'account', url: '/account' },
]

export default function AccountLayout(props) {
    const Outlet = () => props.children;

    return (
        <div className="settings-layout">
            <Container className="flex items-center py-4 border-b">
                <h1 className="font-bold text-3xl text-neutral-900">Account</h1>
                <nav className="w-full">
                    <ul className="flex items-center justify-end gap-6">
                        {navigationbarData.map(item => (
                            <li key={item.url}>
                                <Link href={item.url}>
                                    <a className="font-semibold">{item.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
            <Outlet />
        </div>
    )
}