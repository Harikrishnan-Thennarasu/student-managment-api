var { Student } = require('./student.schema');

const toCreateStudent = async (req, res) => {
    try {
        const newUser = new Student(req.body);
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
    } catch (e) {
        console.error(e)
        return {
            success: false,
            statusCode: 400
        }
    }
}

const toUpdateStudent = async (req, res) => {
    try {
        const result = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

const toGetAllStudents = async (req, res) => {
    try {
        const result = await Student.find({ userId: req.params.id, "skills.name": req.query.skill });
        if (result && result.length > 0) {
            return {
                success: true,
                statusCode: 200,
                data: result
            }
        } else {
            return {
                success: false,
                statusCode: 200,
                data: []
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
    toCreateStudent,
    toUpdateStudent,
    toGetAllStudents
}