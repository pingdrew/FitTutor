const Message = require('../models/Message');

// Send a message
exports.sendMessage = async (req, res) => {
  const { recipientId, text } = req.body;

  const newMessage = new Message({
    senderId: req.user.id,
    recipientId,
    text,
  });

  await newMessage.save();
  res.status(201).json(newMessage);
};

// Get messages
exports.getMessages = async (req, res) => {
  const messages = await Message.find({
    $or: [
      { senderId: req.user.id },
      { recipientId: req.user.id }
    ]
  }).populate('senderId recipientId', 'username');
  res.json(messages);
};
