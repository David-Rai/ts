//Controller for the /users routes
const allUsers = (req, res) => {
    const users = [
        {
            name: "ram",
            age: 12
        },
        {
            name: "dam",
            age: 14
        }
    ];
    res.json(users);
};
export { allUsers };
