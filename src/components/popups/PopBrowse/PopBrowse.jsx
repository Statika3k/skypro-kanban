import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import {
  BtnGroup,
  CloseButton,
  EditButton,
  FormBrowseArea,
  PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseTitle,
  PopBrowseTopBlock,
  PopBrowseWrap,
  StyledPopBrowse,
  Status,
  StatusTheme,
  StatusThemes,
  StatusTitle,
  PopBrowseFormBlock,
  BtnBrowse,
  Label,
  CategoriesTheme,
} from "./PopBrowse.styled";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../../context/TaskContext";

function PopBrowse({ taskId }) {
  const { id: paramId } = useParams();
  const id = taskId || paramId;

  const navigate = useNavigate();

  const {
    getTaskById,
    updateTask,
    deleteTask,
    loading: tasksLoading,
    refreshTasks,
  } = useContext(TaskContext);

  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    status: "Без статуса",
    topic: "Research",
    date: new Date(),
  });
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (!id || isDeleted) return;
    const load = async () => {
      try {
        const taskData = await getTaskById(id);
        setTask(taskData);
        setFormData({
          description: taskData.description || "",
          status: taskData.status || "Без статуса",
          topic: taskData.topic || "Research",
          date: taskData.date ? new Date(taskData.date) : new Date(),
        });
      } catch (err) {
        alert("Не удалось загрузить задачу: " + (err.message || ""));
        navigate("/", { replace: true });
      }
    };
    load();
  }, [id, isDeleted, getTaskById, navigate]);

  const handleStatusClick = (status) => {
    if (isEditing) {
      setFormData((prev) => ({ ...prev, status }));
    }
  };

  const handleDateSelect = (date) => {
    if (isEditing) {
      setFormData((prev) => ({ ...prev, date }));
    }
  };

  const handleSave = async () => {
    try {
      await updateTask({
        id,
        task: {
          description: formData.description,
          status: formData.status,
          date: formData.date.toISOString(),
        },
      });

      navigate("/", { replace: true });

      await refreshTasks();
    } catch (err) {
      alert("Не удалось сохранить: " + (err.message || ""));
    }
  };

  const handleDelete = async () => {
    if (!confirm("Удалить задачу? Это нельзя отменить.")) return;
    setIsDeleting(true);
    setIsDeleted(true);
    try {
      await deleteTask(id);
      navigate("/", { replace: true });
    } catch (err) {
      alert("Ошибка удаления: " + (err.message || ""));
      setIsDeleted(false);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleClose = () => {
    navigate("/", { replace: true });
  };

  const isLoading = tasksLoading || isDeleting;

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <StyledPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>{task?.title || `Задача №${id}`}</PopBrowseTitle>
              <CategoriesTheme
                className={`categories__theme _${
                  formData.topic === "Web Design"
                    ? "orange"
                    : formData.topic === "Research"
                      ? "green"
                      : "purple"
                } _active-category`}
              >
                <p
                  className={`_${
                    formData.topic === "Web Design"
                      ? "orange"
                      : formData.topic === "Research"
                        ? "green"
                        : "purple"
                  }`}
                >
                  {formData.topic}
                </p>
              </CategoriesTheme>
            </PopBrowseTopBlock>

            <Status>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                {statuses.map((status) => (
                  <StatusTheme
                    key={status}
                    className={
                      isEditing
                        ? formData.status === status
                          ? "_active"
                          : ""
                        : formData.status === status
                          ? "_active"
                          : "_hide"
                    }
                    onClick={() => handleStatusClick(status)}
                  >
                    <p>{status}</p>
                  </StatusTheme>
                ))}
              </StatusThemes>
            </Status>

            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <PopBrowseFormBlock>
                  <Label htmlFor="textArea01">Описание задачи</Label>
                  <FormBrowseArea
                    name="description"
                    value={formData.description}
                    onChange={(e) =>
                      isEditing &&
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder={
                      isEditing ? "Описание..." : "Описание отсутствует"
                    }
                    readOnly={!isEditing}
                  />
                </PopBrowseFormBlock>
              </PopBrowseForm>

              <Calendar
                initialDate={task?.date ? new Date(task.date) : new Date()}
                onDateSelect={handleDateSelect}
                disabled={!isEditing}
              />
            </PopBrowseWrap>

            <BtnBrowse>
              <BtnGroup>
                {!isEditing ? (
                  <EditButton
                    className="_btn-bor _hover03"
                    onClick={() => setIsEditing(true)}
                    disabled={isLoading}
                  >
                    Редактировать задачу
                  </EditButton>
                ) : (
                  <>
                    <EditButton
                      className="_btn-bor _hover03"
                      onClick={handleSave}
                      disabled={isLoading}
                    >
                      Сохранить
                    </EditButton>
                    <EditButton
                      className="_btn-bor _hover03 _gray"
                      onClick={() => setIsEditing(false)}
                    >
                      Отменить
                    </EditButton>
                  </>
                )}
                <EditButton
                  className="_btn-bor _hover03"
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  {isDeleting ? "Удаление..." : "Удалить задачу"}
                </EditButton>
              </BtnGroup>

              <CloseButton className="_btn-bg _hover01" onClick={handleClose}>
                Закрыть
              </CloseButton>
            </BtnBrowse>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}

export default PopBrowse;
