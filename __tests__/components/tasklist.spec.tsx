import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import { renderHook, act } from '@testing-library/react-native';

import { TasksProvider, useTaskList } from '../../src/context/TasksContext';
import { TaskList } from '../../src/components/TaskList';

describe('TaskList commponent', () => {
  test('verifica se um item é removido da lista de tarefas', async () => {
    render(<TaskList/>, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const data = {
      id: 'Task01', title: 'Task 01'
    }

    await act(() => result.current.addTask(data));

    expect(result.current.tasks[0].title).toEqual('Task 01');

    await act(() => result.current.removeTask(data.id));

    expect(result.current.tasks.length).toEqual(0);
  });
});
