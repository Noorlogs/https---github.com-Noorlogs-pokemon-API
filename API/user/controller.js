const { connect } = require('mongoose');
const newUserSchema = require('./schema');
const { hash, compare } = require('bcryptjs')
require('dotenv').config()

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        await connect(process.env.MONGO_URL)
        const checkUserExist = await newUserSchema.findOne({ _id })
        if (!checkUserExist) {
            res.status(404).json({
                message: "User Not Found!"
            })
        }
        else {

            const decryptPassword = compare(password, checkUserExist.password)
            console.log(decryptPassword)

            res.json({
                user: checkUserExist
            })
        }

    }
    catch (error) {
        res.json({
            message: error
        })

    }

}

const NewUser = async (req, res) => {

    const { username, password, email } = req.body;

    try {
        await connect(process.env.MONGO_URL)
        console.log("connected")
        const checkExisting = await newUserSchema.exists({ username: username })
        console.log("checking user")

        if (checkExisting) {
            res.json({
                message: "User Already Exist!"
            })
        }
        else {
            await newUserSchema.create({ username, password: await hash(password, 12), email })
            const allUsers = await newUserSchema.find()
            res.status(201).json({
                message: "New User Has Been Created To DB",
                allUsers
            })
        }
    }

    catch (error) {
        res.json({
            message: error.message
        });

    }
};

const getAllUsers = async (req, res) => {
    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL USERS 
        const allUsers = await newUserSchema.find()
        res.json({
            showAll: allUsers
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

const getUserID = async (req, res) => {
    const { _id } = req.query

    try {
        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL CATEGORIES 
        const userid = await newUserSchema.findOne({ _id })
        res.json({ userid });
    }
    catch (error) {
        console.log("teeeeet teeet teeet")
        res.json({
            message: error.message
        });
    }
};

// const getUserEmail = async (req, res) => {
//     const { email } = req.query
//     try {
//         // Save the user to the database
//         await connect(process.env.MONGO_URL)
//         console.log("database connect")
//         // GETTING ALL CATEGORIES 
//         const userEmail = await newUserSchema.findOne({ email })
//         console.log("find it")

//         res.json({ userEmail });
//         console.log("done")
//     }
//     catch (error) {
//         console.error("Error fetching user:", error);
//         res.json({
//             message: error.message
//         });
//     }
// };

const updateProfile = async (req, res) => {
    const { _id, username, password, email } = req.body;
    const filter = { _id }
    const update = { username, password, email }

    try {
        // Save the user to the database
        await connect(process.env.MONGO_URL)

        const user_id = await newUserSchema.findOneAndUpdate
            (filter, update, { new: true })

        res.json({
            message: "Updated Successfully!",
            user_id
        })

    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

const deleteProfile = async (req, res) => {

    const { _id } = req.body

    try {

        // Save the user to the database
        await connect(process.env.MONGO_URL)
        // GETTING ALL CATEGORIES 
        const userid = await newUserSchema.findOneAndDelete({ _id })
        res.json({
            message: "Field Deleted Successfully!",
            userid
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

module.exports = {
    NewUser,
    loginUser,
    getAllUsers,
    getUserID,
    // getUserEmail,
    updateProfile,
    deleteProfile
}