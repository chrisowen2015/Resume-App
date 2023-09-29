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
        dates: "2022",
        title: "BACHELOR'S DEGREE",
        company: "CSU NORTHRIDGE",
        description: "BACHELOR'S OF SCIENCE IN COMPUTER SCIENCE",
    }
]

export default function Education() {

    return (
        <Box sx={{ width: '100%', marginLeft: '1em' }} >
            {
                educations.map((job, index) => (
                    <Experience key={index} dates={job.dates} title={job.title} company={job.company} description={job.description} />
                ))
            }
        </Box>
    )
}