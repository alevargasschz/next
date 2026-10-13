export default function LoginPage() { 
    return (
        <main>
            <h1>Login Page</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username:</label>
                    <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="username" name="username" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password:</label>
                    <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
    )
}