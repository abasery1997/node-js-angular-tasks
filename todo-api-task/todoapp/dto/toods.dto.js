const TodoDto = ({ title, completed }) => ({
    title,
    completed,
});

const UserTodoDto = ({ _id, userid, title, completed }) => ({
    id: _id,
    userid,
    title,
    completed
});

module.exports = { TodoDto, UserTodoDto };