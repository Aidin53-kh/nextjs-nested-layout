import Link from "next/link";

export default function ListItem(props) {
    return (
        <Link href={props.href}>
            <a>
                <li className="rounded-lg flex items-center py-3 px-5 font-semibold justify-between hover:bg-gray-100 active:bg-gray-200">
                    {props.children}
                </li>
            </a>
        </Link>
    )
}