import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ITasksContext, TasksContext } from '../../context/TasksContext';

export const TaskList = () => {

  const tasks = useContext(TasksContext)

  return (
    <FlatList
      data={tasks as unknown as ITasksContext[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
