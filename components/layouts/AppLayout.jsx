import List from "../list/List";
import ListItem from "../list/ListItem";

export default function AppLayout(props) {
    return (
        <div className="app-layout flex">
            <aside className="border-r p-4 min-w-[260px] max-w-[260px] h-screen">
                <List>
                    <ListItem href='/'>Home</ListItem>
                    <ListItem href='/about'>About</ListItem>
                    <ListItem href='/account'>Account</ListItem>
                </List>
            </aside>
            <main className="w-full bg-indigo-50 px-4">{props.children}</main>
        </div>
    )
}