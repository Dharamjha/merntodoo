const Todomodel = require('../models/Todomodel');

module.exports.getTodo = async (req, res) => {
    try {
        const todos = await Todomodel.find();
        res.send(todos);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching todos");
    }
};

module.exports.savetodo = async (req, res) => {
    const { text } = req.body;

    try {
        const newTodo = await Todomodel.create({ text });
        console.log("Added Successfully", newTodo);
        res.send(newTodo);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving todo");
    }
};

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body;

    try {
        const updatedTodo = await Todomodel.findByIdAndUpdate(
            _id,
            { text },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).send("Todo not found!");
        }

        res.send(updatedTodo);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating todo");
    }
};

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body;

    try {
        const deletedTodo = await Todomodel.findByIdAndDelete(_id);

        if (!deletedTodo) {
            return res.status(404).send("Todo not found!");
        }

        res.send("Deleted successfully!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting todo");
    }
};
