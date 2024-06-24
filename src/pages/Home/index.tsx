import {useContext, useState} from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {TaskList} from '../../components/TaskList';
import {TasksContext} from '../../context/TasksContext';

// substituido por ContextAPI
// interface Task {
//   id: string;
//   title: string;
// }

export const Home = () => {
  const [newTask, setNewTask] = useState('');
  // substituido por ContextAPI
  // const [tasks, setTasks] = useState<Task[]>([]);
  const {addTask} = useContext(TasksContext);

  const handleAddTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };

    // substituido por ContextAPI
    // setTasks([...tasks, data]);

    addTask();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Tarefas</Text>

        <TextInput
          placeholderTextColor={'#555'}
          placeholder="Adicione uma nova tarefa"
          style={styles.input}
          onChangeText={setNewTask}
        />

        <TouchableOpacity
          onPress={handleAddTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas tarefas</Text>

        {/* <Text style={{color: '#f1f1f1'}}>{newTask}</Text> */}

        {/* <ScrollView>
          {tasks.map(task => (
            <TouchableOpacity key={task.id} style={styles.buttonTask}>
              <Text style={styles.titleTask}>{task.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView> */}

        {/* <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.buttonTask}>
              <Text style={styles.titleTask}>{item.title}</Text>
            </TouchableOpacity>
          )}
        /> */}

        <TaskList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },
});
