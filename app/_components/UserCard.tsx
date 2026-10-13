type UserCardProps = {
    username: string;
    description: string;
    buttonLabel: string;
};

export default function UserCard({ username, description, buttonLabel }: UserCardProps) { 
    return (
        <div className="user-card">
            <h2>{username}</h2>
            <p>{description}</p>
            <button>{buttonLabel}</button>
        </div>
    )
}