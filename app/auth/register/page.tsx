"use client";

import ActionButton from "@/app/_components/ActionButton";
import FakeStore from "@/app/_components/FakeStore";
import UserCard from "@/app/_components/UserCard";

export default function RegisterPage() {
    return (
        <main>
            <ActionButton label="Register" onClick={() => console.log("Register button clicked")} />
            <UserCard username="New User" description="Register to access exclusive features." buttonLabel="Register"></UserCard>
            <FakeStore />
        </main>
    )
}