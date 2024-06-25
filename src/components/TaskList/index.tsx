import {useContext} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ITask, TasksContext} from '../../context/TasksContext';

export const TaskList = () => {
  //pode ser usado o useTaskList() que é um hook, assim como foi usado na home
  const tasks = useContext(TasksContext);

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza?', 'Deseja remover esta tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          tasks.removeTask(id);
        },
      },
      {
        text: 'Não',
        onPress: () => {},
      },
    ]);
  };

  return (
    <FlatList
      data={tasks.tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTask}>
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
