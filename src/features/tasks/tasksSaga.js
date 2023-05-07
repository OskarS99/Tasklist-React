import { takeEvery, put, call, delay } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess } from "./tasksSlice";
import { getExampleTasks } from "./getExapleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
