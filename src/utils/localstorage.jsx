const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "taskSummary": {
            "active": 1,
            "newtask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare monthly report",
                "description": "Compile and analyze data for the monthly sales report.",
                "date": "2025-05-01",
                "category": "Reporting"
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "title": "Update CRM",
                "description": "Ensure all client interactions are logged in the CRM system.",
                "date": "2025-04-28",
                "category": "CRM"
            },
            {
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true,
                "title": "Client Follow-Up",
                "description": "Call back clients who showed interest in Q1 campaigns.",
                "date": "2025-04-25",
                "category": "Client Relations"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Diya",
        "email": "employee2@example.com",
        "password": "123",
        "taskSummary": {
            "active": 1,
            "newtask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "title": "Inventory Check",
                "description": "Perform a full inventory check in Warehouse A.",
                "date": "2025-05-02",
                "category": "Logistics"
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "title": "Order Supplies",
                "description": "Reorder low-stock items from preferred suppliers.",
                "date": "2025-04-30",
                "category": "Procurement"
            },
            {
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false,
                "title": "Safety Audit",
                "description": "Prepare for next week’s safety audit.",
                "date": "2025-05-05",
                "category": "Compliance"
            },
            {
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true,
                "title": "Repair Schedule",
                "description": "Coordinate with maintenance for overdue machine repair.",
                "date": "2025-04-27",
                "category": "Maintenance"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Kabir",
        "email": "employee3@example.com",
        "password": "123",
        "taskSummary": {
            "active": 1,
            "newtask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false,
                "title": "Design Homepage Banner",
                "description": "Create a promotional banner for the summer campaign.",
                "date": "2025-05-02",
                "category": "Design"
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "title": "Social Media Post",
                "description": "Schedule social media posts for the next two weeks.",
                "date": "2025-04-29",
                "category": "Marketing"
            },
            {
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true,
                "title": "Product Mockup",
                "description": "Deliver mockups for new product packaging.",
                "date": "2025-04-26",
                "category": "Design"
            },
            {
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false,
                "title": "Email Campaign",
                "description": "Draft content for the May newsletter.",
                "date": "2025-05-03",
                "category": "Email Marketing"
            },
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "title": "Brand Guideline Review",
                "description": "Review and update the brand style guide.",
                "date": "2025-04-28",
                "category": "Branding"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Ishita",
        "email": "employee4@example.com",
        "password": "123",
        "taskSummary": {
            "active": 1,
            "newtask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "title": "Server Maintenance",
                "description": "Update security patches on all production servers.",
                "date": "2025-05-02",
                "category": "IT"
            },
            {
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false,
                "title": "Bug Fixes",
                "description": "Resolve tickets from the issue tracker.",
                "date": "2025-05-03",
                "category": "Development"
            },
            {
                "active": true,
                "newtask": false,
                "completed": true,
                "failed": false,
                "title": "Database Backup",
                "description": "Perform and verify daily backups.",
                "date": "2025-04-29",
                "category": "Database"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Rohan",
        "email": "employee5@example.com",
        "password": "123",
        "taskSummary": {
            "active": 1,
            "newtask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": false,
                "newtask": false,
                "completed": true,
                "failed": false,
                "title": "Team Meeting",
                "description": "Host weekly team sync-up to discuss progress.",
                "date": "2025-04-30",
                "category": "Management"
            },
            {
                "active": false,
                "newtask": true,
                "completed": false,
                "failed": false,
                "title": "Performance Reviews",
                "description": "Prepare performance review documents for Q2.",
                "date": "2025-05-06",
                "category": "HR"
            },
            {
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false,
                "title": "Hiring Plan",
                "description": "Draft a hiring plan for the upcoming quarter.",
                "date": "2025-05-02",
                "category": "Recruitment"
            },
            {
                "active": false,
                "newtask": false,
                "completed": false,
                "failed": true,
                "title": "Budget Proposal",
                "description": "Submit budget proposal for departmental needs.",
                "date": "2025-04-25",
                "category": "Finance"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Meera",
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setlocaldata = () => {
    localStorage.setItem("employee", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));

}
export const getlocaldata = () => {
    const employee = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return{employee,admin};
}