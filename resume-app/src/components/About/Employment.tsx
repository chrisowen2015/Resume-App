'use client';

import { Box, Chip, Fab, Grid, Paper, Typography } from "@mui/material";
import Spacer from "@/components/shared/spacer";
import Experience from "@/components/shared/Experience";
import { HorizontalRule } from '@mui/icons-material';
import { Work } from "@mui/icons-material";

import { useTheme } from "@mui/material";
import Link from "next/link";

const employmentHistory = [
    {
        dates: "JAN 2023 - PRESENT",
        title: "SENIOR SOFTWARE DEVELOPER",
        company: "CREATIVE NOTE",
        url: "https://www.creativenote.com/",
        description: "",
    },
    {
        dates: "JAN 2022 - JAN 2023",
        title: "SOFTWARE DEVELOPER",
        company: "BURNS & MCDONNELL",
        url: "https://www.burnsmcd.com/",
        description: "Responsible for developing client-facing web applications using Blazor, React and .NET Core. Set up and maintained databases during development and production. Worked with SCRUM teams to develop and deploy applications to Azure."
    },
    {
        dates: "MAY 2018 - AUG 2018",
        title: "SOFTWARE DEVELOPER INTERN",
        company: "DRMCNATTY & ASSOCIATES",
        url: "https://www.drmcnatty.com/",
        description: "Assisted with developing a web application using Ruby on Rails for a client. Developed a new employee-facing web application to improve intranet productivity.",
    }
]

export default function Employment() {
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', }} >
            {
                employmentHistory.map((job, index) => (
                    <Experience key={index} dates={job.dates} title={job.title} company={job.company} url={job.url} description={job.description} />
                ))
            }
        </Box>
    )
}