import React, { useState } from "react";
import { Modal, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import styles from "@/app/styles";
interface ChatFirstMessageModalProps {
  open: boolean;
  reciever: string;
  onClose: () => void;
  onConfirmAction: (content: string) => void;
}

export const ChatFirstMessageModal = ({
  open,
  reciever,
  onClose,
  onConfirmAction,
}: ChatFirstMessageModalProps) => {
  const [firstMessage, setFirstMessage] = useState('');
  const handleSend = () => {
    if (!firstMessage || firstMessage === "") {
        alert("Please enter a message");
        return;
    }
    onConfirmAction(firstMessage);
    setFirstMessage("");
    onClose();
  };

  return (
    <Modal
      style={{ maxWidth: "90%"}}
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text variant="titleMedium" style={{ margin: 10, padding: 2, flexWrap: "wrap", maxWidth: "80%" }}>
            Send your first message to {reciever}
          </Text>
          <TextInput style={{ margin: 10, width: "90%" }}
            secureTextEntry={true}
            label="Message"
            mode="outlined"
            value={firstMessage}
            multiline
            onChangeText={(text) => setFirstMessage(text)}
        />
          <View style={styles.buttonContainer}>
            <Button  mode="outlined" onPress={onClose}  style={{ margin: 10}}>Cancel</Button>
            <Button mode="contained-tonal" onPress={handleSend} style={{ margin: 10 }}>Send</Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
