const configurations = {
    baseURL: "https://donner.africa/",
    apiURL: "https://e735-197-210-85-90.ngrok-free.app/",
    fundRaiserCategories: [
        {
            "name": "Health",
            "subCategories": [
                "Medical Research",
                "Disease Prevention",
                "Medical Support",
                "Mental Health Support",
                "Maternal and Child Health",
                "Nutrition Programs",
                "Public Health Initiatives",
                "HIV/AIDS Prevention",
                "Cancer Support",
                "Emergency Medical Services"
            ]
        },
        {
            "name": "Education",
            "subCategories": [
                "Primary Education",
                "Higher Education",
                "Literacy Programs",
                "School Infrastructure",
                "Scholarships",
                "Teacher Training",
                "Education Technology",
                "Vocational Training",
                "Adult Education",
                "Special Education"
            ]
        },
        {
            "name": "Environment",
            "subCategories": [
                "Climate Change",
                "Wildlife Conservation",
                "Clean Water Initiatives",
                "Sustainable Agriculture",
                "Environmental Education",
                "Reforestation",
                "Ocean Conservation",
                "Air Quality Improvement",
                "Eco-friendly Practices",
                "Waste Management"
            ]
        },
        {
            "name": "Social Services",
            "subCategories": [
                "Hunger Relief",
                "Homelessness",
                "Domestic Violence",
                "Elderly Support",
                "Disability Services",
                "Youth Development",
                "Community Centers",
                "Crisis Intervention",
                "Family Services",
                "Humanitarian Aid"
            ]
        },
        {
            "name": "Human Rights",
            "subCategories": [
                "Civil Liberties",
                "Anti-Discrimination",
                "Refugee Support",
                "Gender Equality",
                "LGBTQ+ Rights",
                "Child Rights",
                "Indigenous Peoples' Rights",
                "Prisoner Rights",
                "Anti-Trafficking",
                "Freedom of Expression"
            ]
        },
        {
            "name": "Community Development",
            "subCategories": [
                "Infrastructure Development",
                "Job Training",
                "Microfinance",
                "Cultural Programs",
                "Urban Development",
                "Rural Development",
                "Small Business Support",
                "Community Gardens",
                "Public Spaces",
                "Fair Trade Initiatives"
            ]
        },
        {
            "name": "Animal Welfare",
            "subCategories": [
                "Rescue and Rehabilitation",
                "Shelter Operations",
                "Animal Rights Advocacy",
                "Pet Adoption",
                "Wildlife Preservation",
                "Farm Animal Welfare",
                "Marine Animal Protection",
                "Zoo and Aquarium Welfare",
                "Service Animals",
                "Conservation Research"
            ]
        },
        {
            "name": "Arts and Culture",
            "subCategories": [
                "Visual Arts",
                "Performing Arts",
                "Museums and Galleries",
                "Cultural Preservation",
                "Public Art Projects",
                "Literary Programs",
                "Music Education",
                "Film and Media",
                "Craftsmanship",
                "Historical Preservation"
            ]
        },
        {
            "name": "Emergency Relief",
            "subCategories": [
                "Disaster Response",
                "Humanitarian Aid",
                "Emergency Medical Assistance",
                "Disaster Preparedness",
                "Conflict Resolution",
                "Refugee Assistance",
                "Search and Rescue",
                "Relief Supplies Distribution",
                "Rehabilitation Programs",
                "Psychological Support"
            ]
        },
        {
            "name": "Technology Access",
            "subCategories": [
                "Digital Literacy",
                "Access to Technology",
                "STEM Education",
                "E-Waste Management",
                "Technological Innovation",
                "Internet Access",
                "Open Source Development",
                "Cybersecurity Awareness",
                "Smart Cities Initiatives",
                "Robotics Programs"
            ]
        }

    ]
};


export default {
    get(name) {
        return configurations[name];
    }
};