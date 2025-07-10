function UserList({ users }) {
    return (
        <section style={{ marginTop: "2rem" }}>
            <h2>Usuarias registradas</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>{user.name}</strong> ({user.email}) - {user.location}, plan{" "}
                        {user.plan}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default UserList;
