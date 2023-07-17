export default function Header() {
    return (
        <div className="flex flex-row justify-between w-full p-3">
            <h1 className="text-text dark:text-darktext">Fundr</h1>
            <button className="bg-primary p-2 rounded-md w-24 text-text hover:scale-95 transition-all">Sign In</button>
        </div>
    )
}