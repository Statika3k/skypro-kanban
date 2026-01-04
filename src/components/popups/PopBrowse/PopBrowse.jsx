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

  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }

    const load = async () => {
      try {
        const t = await getTaskById(id);
        if (!t) {
          alert("Задача не найдена");
          navigate("/");
          return;
        }
        setTask(t);
        setFormData({
          description: t.description || "",
          status: t.status || "Без статуса",
          topic: t.topic || "Research",
          date: t.date ? new Date(t.date) : new Date(),
        });
      } catch (err) {
        console.error("Ошибка загрузки:", err);
        alert("Не удалось загрузить задачу");
        navigate("/");
      }
    };

    load();
  }, [id, getTaskById, navigate]);

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

      navigate("/", {replace: true});

      await refreshTasks();
      
    } catch (err) {
      alert("Не удалось сохранить: " + (err.message || ""));
    }
  };

  const handleDelete = async () => {
    if (!confirm("Удалить задачу? Это нельзя отменить.")) return;

    setIsDeleting(true);
    try {
      await deleteTask(id);
      navigate("/", { replace: true });
    } catch (err) {
      alert("Ошибка удаления: " + (err.message || ""));
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
