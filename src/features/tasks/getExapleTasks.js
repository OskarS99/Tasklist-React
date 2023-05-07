export const getExampleTasks = async () => {
    const response = await fetch("/tasklist-react/getExampleTasks.json");

    if (!response.ok) {

        new Error(response.statusText);
    }

    return await response.json();
}