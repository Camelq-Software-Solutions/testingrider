import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatBotScreen({ navigation }: any) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hi! How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      id: (messages.length + 1).toString(),
      text: input,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTimeout(() => {
      const botReply: Message = {
        id: (messages.length + 2).toString(),
        text: getBotReply(input),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botReply]);
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 600);
  };

  const getBotReply = (userText: string) => {
    // Simple keyword-based responses
    const text = userText.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) return 'Hello! How can I assist you?';
    if (text.includes('problem') || text.includes('issue')) return 'I am sorry to hear that. Can you describe your problem in detail?';
    if (text.includes('ride')) return 'Is your question about booking, cancelling, or something else about rides?';
    if (text.includes('payment')) return 'For payment issues, please check your wallet or payment method.';
    return "I'm here to help! Please provide more details.";
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Support Chat</Text>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  messagesList: {
    paddingBottom: 10,
  },
  messageContainer: {
    marginVertical: 4,
    maxWidth: '80%',
    borderRadius: 12,
    padding: 10,
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: 8,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 