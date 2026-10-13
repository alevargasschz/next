"use client";

type ActionButtonProps = {
    label: string;
    onClick: () => void;
};

export default function ActionButton({ label, onClick }: ActionButtonProps) {
    return (
        <button onClick={onClick} className="action-button">
            {label}
        </button>
    )
}