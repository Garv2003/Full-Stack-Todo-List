async function getTodos() {
  try {
    const res = await fetch("/api/todo");
    const data = await res.json();
    return data.todos;
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
}

async function postTodo(newTodo) {
  try {
    await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    });
  } catch (error) {
    throw new Error("Failed to add todo");
  }
}

const DeleteTodo = async (id) => {
  try {
    await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw new Error("Failed to delete todo");
  }
};

const toggleCompleteTodo = async (id) => {
  try {
    await fetch(`/api/todo/${id}`, {
      method: "PUT",
    });
  } catch (error) {
    throw new Error("Failed to complete todo");
  }
};

const updateTodo = async ({ id, title }) => {
  try {
    await fetch(`/api/todo/${id}`, {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Failed to update todo");
  }
};

export { DeleteTodo, toggleCompleteTodo, updateTodo, getTodos, postTodo };
