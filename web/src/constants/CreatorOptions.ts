export default {
    assignmentOptions: {
        options: [
            {key: "title", label: "Title", required: true, type: "text"},
            {
                key: "description",
                label: "Description",
                required: false,
                type: "text"
            },
            {key: "due_date", label: "Due Date", required: true, type: "date"}
        ],
        types: [
            {text: "Written response", value: "text"},
            {text: "Numerical response", value: "number"}
        ]
    },
    observationOptions: {
        options: [
            {key: "title", label: "Title", required: true, type: "text"},
            {
                key: "description",
                label: "Description",
                required: false,
                type: "text"
            },
        ],
        types: [
            {text: "Written responses", value: "text"},
            {text: "Numerical responses", value: "number"}
        ]
    },
    teacherAccount: {
        options: [
            {key: "fname", label: "First Name", required: true, type: "text"},
            {key: "lname", label: "Last Name", required: true, type: "text"}
        ]
    },
    teacherPassword: {
        options: [
            {key: "oldPass", label: "Old Password", required: true, type: "password"},
            {key: "newPass", label: "New Password", required: true, type: "password"},
            {key: "repeatNewPass", label: "Repeat New Password", required: true, type: "password"}
        ]
    },
    deviceRegistration: {
        options: [
            {key: "fopd_id", label: "Device ID", required: true, type: "text"},
            {key: "name", label: "Device Name", required: true, type: "text"}
        ]
    }
}