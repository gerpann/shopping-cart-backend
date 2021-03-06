// check if field exist in req.body
const checkBody = (requiredField) => (req, res, next) => {
    const missingFields = requiredField.filter(requiredField => {
        if (!req.body.hasOwnProperty(requiredField)) {
            return requiredField
        }
    })
    if (missingFields.length > 0) {
        return res.status(500).json({message: `${missingFields.join(', ')} are required!!`})
    }
    next()
}

// check if field is exists in req.query
const checkQuery = (requiredField) => (req, res, next) => {
    const missingFields = requiredField.filter(requiredField => {
        if (!req.query.hasOwnProperty(requiredField)) {
            return requiredField
        }
    })
    if (missingFields.length > 0) {
        return res.status(500).json({message: `${missingFields.join(', ')} are required!!`})
    }
    next()
}

module.exports = Object.assign({}, {checkBody, checkQuery})
