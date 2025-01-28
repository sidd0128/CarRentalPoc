import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import User from '../../types/UserProps';
import { useUsers } from '../../context/useUsersContext';
import { deleteUser, saveUsers } from '../../helper/helper';
import CustomFlatList from '../../components/CustomFlatList';

const UserList = () => {
  const { users, setUsers } = useUsers();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');


  const handleSave = async () => {
    if (!name.trim() || !drivingLicense.trim()) {
      Alert.alert('Error', 'Both fields are mandatory.');
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      drivingLicense,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    await saveUsers(updatedUsers);

    setName('');
    setDrivingLicense('');
    setModalVisible(false);
  };

  const handleDelete = async (userId: string) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);

    await deleteUser(userId);
  };

  const closeModal = () => {
    setModalVisible(false);
    setName('');
    setDrivingLicense('');
  };

  const renderUserItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <View>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userLicense}>License: {item.drivingLicense}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionButton}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  const renderModalContent = () => (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Add User</Text>
        <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
        <TextInput
          placeholder="Driving License"
          value={drivingLicense}
          onChangeText={setDrivingLicense}
          style={styles.input}
        />
        <View style={styles.modalActions}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomFlatList
              data={users}
              renderItem={renderUserItem}
              keyExtractor={(item) => item.id}
              emptyMessage="No users found."
            />
      <TouchableOpacity style={styles.floatingButton} onPress={() => setModalVisible(true)}>
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </View>
  );
};

export default UserList;
