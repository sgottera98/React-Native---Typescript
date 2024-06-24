import {FunctionComponent, ReactElement, createContext} from 'react';

interface IProps {
  children: ReactElement;
}

export interface ITasksContext {
  id: string;
  title: string;
  addTask(): void;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: FunctionComponent<IProps> = ({children}) => {

  const addTask = () => {
    console.log('add task action');
  };

  return (
    <TasksContext.Provider value={{id: '1', title: 'Task 1', addTask}}>
      {children}
    </TasksContext.Provider>
  )
}
