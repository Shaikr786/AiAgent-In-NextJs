import { revalidatePath } from "next/cache";
import {auth, currentUser} from "@clerk/nextjs/server";
type MockUsers = {
    id: number,
    name: string,
}

export default async function MockUsers() {

    const authObj = await auth();
    const user = await currentUser();

    console.log({authObj, user});
    
    const response = await fetch("https://67b2bcaebc0165def8ce58f8.mockapi.io/users");
    const users = await response.json();
    async function addUser(formData: FormData) {
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://67b2bcaebc0165def8ce58f8.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name}),
        }
        );
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }

    return (
        <div>
            <div>
                <form action={addUser}>
                    <input type='text' name="name" placeholder="Enter Name" />
                    <button>Add User</button>
                </form>
            </div>
            <ul className="space-y-2">
                {
                    users.map((user: MockUsers) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}