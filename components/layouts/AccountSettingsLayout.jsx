import Link from "next/link";
import Container from "../container";
import List from "../list/List";
import ListItem from "../list/ListItem";

export default function AccountSettingsLayout(props) {
    return (
        <Container className="settings-page flex mt-12">
            <aside className="border rounded-lg min-w-[240px] max-w-[240px] p-2">
                <List>
                    <ListItem href='/account/settings' className="hover:bg-indigo-100 active:bg-indigo-200">Settings</ListItem>
                    <ListItem href='/account/settings/user' className="hover:bg-indigo-100 active:bg-indigo-200">User</ListItem>
                    <ListItem href='/account/settings/bookmarks' className="hover:bg-indigo-100 active:bg-indigo-200">Bookmarks</ListItem>
                    <ListItem href='/account/settings/editInfo' className="hover:bg-indigo-100 active:bg-indigo-200">Edit Info</ListItem>
                    <ListItem href='/account/settings/forgetPassword' className="hover:bg-indigo-100 active:bg-indigo-200">Forget Password</ListItem>
                </List>
            </aside>
            <main className="w-full px-6">{props.children}</main>
        </Container>
    )
}