/*
File Name: ComplexCode.js
Content: A Complex Code Example

This code example demonstrates a complex application that uses various JavaScript concepts, such as object-oriented programming, asynchronous operations, and event handling. It simulates a real-time messaging application with multiple users and chat rooms.

*/

// User Class
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  // Send a message
  sendMessage(room, message) {
    const newMessage = {
      user: this,
      room: room,
      message: message,
      timestamp: Date.now()
    };

    // Simulating async operation
    setTimeout(() => {
      room.addMessage(newMessage);
    }, 1000);
  }
}

// Room Class
class Room {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  // Add a new message
  addMessage(message) {
    this.messages.push(message);

    // Trigger event
    this.onMessageAdded(message);
  }

  // Event handler for message added
  onMessageAdded(message) {
    console.log(`New message in ${this.name} room: "${message.message}" - ${message.user.name}`);
  }
}

// Create users
const user1 = new User("John", 1);
const user2 = new User("Alice", 2);
const user3 = new User("Bob", 3);

// Create rooms
const room1 = new Room("General");
const room2 = new Room("Design");

// User1 sends a message to room1
user1.sendMessage(room1, "Hello, everyone!");

// User2 sends a message to room1
user2.sendMessage(room1, "Hey, John!");

// User3 sends a message to room2
user3.sendMessage(room2, "Anyone up for a brainstorming session?");

// Simulating async operations
setTimeout(() => {
  // User1 sends a message to room2
  user1.sendMessage(room2, "Sure, Bob! Let's discuss it.");
}, 2000);

setTimeout(() => {
  // User2 sends a message to room2
  user2.sendMessage(room2, "Count me in too!");
}, 3000);
...

// Continued code with more user interactions, room creations, and messaging events
// ...
// ...

// End of ComplexCode.js