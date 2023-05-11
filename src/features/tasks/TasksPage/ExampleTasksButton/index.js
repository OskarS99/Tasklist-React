import { Button } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { selectTasks, fetchExampleTasks } from "../../tasksSlice"

export const ExampleTasksButton = () => {
 const dispatch = useDispatch();
 const {loading} = useSelector(selectTasks);

return (
        
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks()) }>
    {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
  </Button>
)
}
