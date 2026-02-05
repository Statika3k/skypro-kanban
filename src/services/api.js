import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data.tasks || [];
  } catch (error) {
    if (!error.response) {
      throw new Error("Не удалось подключиться к серверу. Проверьте интернет.");
    }
    throw new Error(error.response?.data?.error || "Ошибка загрузки задач");
  }
}

export async function postTask({ token, task }) {
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw new Error("Не удалось подключиться к серверу. Проверьте интернет.");
    }
    throw new Error(error.response?.data?.error || "Ошибка создания задачи");
  }
}

export async function editTask({ token, id, task }) {
  try {
    const response = await axios.put(API_URL + "/" + id, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw new Error("Не удалось подключиться к серверу. Проверьте интернет.");
    }
    throw new Error(error.response?.data?.error || "Ошибка обновления задачи");
  }
}

export async function deleteTask({ token, id }) {
  try {
    const response = await axios.delete(API_URL + "/" + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw new Error("Не удалось подключиться к серверу. Проверьте интернет.");
    }
    throw new Error(error.response?.data?.error || "Ошибка удаления задачи");
  }
}

export async function fetchTaskById({ token, id }) {
  try {
    const response = await axios.get(API_URL + "/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data.task;
  } catch (error) {
    if (!error.response) {
      throw new Error("Не удалось подключиться к серверу. Проверьте интернет.");
    }
    throw new Error(error.response?.data?.error || "Ошибка загрузки задачи");
  }
}
