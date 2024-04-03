import { Box, Chip, Link, Typography } from "@mui/material";
import { Work } from "@mui/icons-material";

import Experience from "@/components/shared/Experience";
import Spacer from "@/components/shared/spacer";

const educations = [
    /*

    {
        dates: "2023",
        title: "AWS CERTIFIED DEVELOPER",
        company: "AMAZON WEB SERVICES",
        description: "AWS CERTIFIED DEVELOPER - ASSOCIATE",
    },
    */
    {
        dates: "Graduated May 2022",
        title: "BACHELOR'S DEGREE",
        company: "CSU NORTHRIDGE",
        url: "https://www.csun.edu/",
        description: "Bachelor's of Science in Computer Science",
    }
]

export default function Education() {

    return (
        <Box sx={{ width: '100%', marginLeft: '1em' }} >
            {
                educations.map((education, index) => (
                    <Experience key={index} dates={education.dates} title={education.title} company={education.company} url={education.url} description={education.description} />
                ))
            }
        </Box>
    )
}