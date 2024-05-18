import { nanoid } from "nanoid";
import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import  Show from "./components/Show";
const App = () => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [title, settitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newtodo = { id: nanoid(), title, completed: false };

        settasks([...tasks, newtodo]);
        settitle("");
        localStorage.setItem("tasks", JSON.stringify([...tasks, newtodo]));
    };

    const CompleteHandler = (index) => {
        console.log(index);
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        settasks(copyTasks);
        localStorage.setItem("tasks", JSON.stringify(copyTasks));
    };

    const DeleteHandler = (id) => {
        settasks(tasks.filter((t) => t.id != id));
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks.filter((t) => t.id != id))
        );
    };

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            {/*  */}
            <Header tasks={tasks} />
            {/*  */}
             <Create tasks={tasks} settasks={settasks}/>     
            {/*  */}
              <Show tasks={tasks} settasks={settasks}/>
        </div>
    );
};


export default App;
