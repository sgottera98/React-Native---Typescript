import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import { renderHook, act } from '@testing-library/react-native';

import { TasksProvider, useTaskList } from '../../src/context/TasksContext';
import { Home } from '../../src/pages/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewTask = getByPlaceholderText('Adicione uma nova tarefa');

    // console.log(inputNewTask.props);

    expect(inputNewTask).toBeDefined();

    expect(inputNewTask.props.placeholder).toBeTruthy();
  });

  it('verifica a inserção de um item na lista de tarefas', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const data = {
      id: 'Task01', title: 'Task 01'
    }

    await act(() => result.current.addTask(data));

    expect(result.current.tasks).toBeTruthy();
  });

  it('verifica se o clique no botao insere um item na lista de tarefas', async () => {
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const inputNewTask = getByPlaceholderText('Adicione uma nova tarefa');
    const button = getByTestId('addButton');

    const data = {
      id: 'Task01', title: 'Task 01'
    }

    act(() => fireEvent.changeText(inputNewTask, data.title));

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(result.current.tasks).toBeTruthy();
  });
});
