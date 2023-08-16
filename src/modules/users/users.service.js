var { User } = require('./users.schema');

const toSignUpUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName: userName });
        if (user && user._id) {
            return {
                success: false,
                statusCode: 409
            }
        } else {
            const newUser = new User({
                userName: userName,
                password: password,
            });
            const result = await newUser.save();
            if (result) {
                return {
                    success: true,
                    statusCode: 200,
                    data: result
                }
            } else {
                return {
                    success: false,
                    statusCode: 500
                }
            }
        }
    } catch (e) {
        console.error(e)
        return {
            success: false,
            statusCode: 400
        }
    }
}

const toLoginUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const result = await User.findOne({ userName, password });
        if (result && result._id) {
            return {
                success: true,
                statusCode: 200,
                data: result
            }
        } else {
            return {
                success: false,
                statusCode: 401
            }
        }
    } catch (e) {
        console.error(e);
        return {
            success: false,
            statusCode: 400
        }
    }
}

module.exports = {
    toSignUpUser,
    toLoginUser
}