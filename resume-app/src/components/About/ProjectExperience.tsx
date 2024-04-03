'use client';

import { Box, Button, Chip, Fab, Grid, Paper, Stack, Typography } from "@mui/material";
import Spacer from "@/components/shared/spacer";
import Experience from "@/components/shared/Experience";
import { HorizontalRule } from '@mui/icons-material';
import { Work } from "@mui/icons-material";

import { useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const projectExperience = [
    {
        title: "MasterPC",
        imgUrl: "images/coming-soon-.jpg",
        liveUrl: "https://victorious-river-0a26b4410.4.azurestaticapps.net",
        github: "https://github.com/chrisowen2015/WarmWave",
        description: "A website to plan a custom computer build and view computer hardware specifications. Features a compatibility checker, a build planner, and a large repository of computer hardware components.",
        tools: ["Blazor Webassembly", "Frontend Development", "Backend Development", "EF Core", "Azure", "SQL", "Azure AD", "Azure SQL", "Azure Static Web Apps", "Microsoft Entra ID"],
        inDevelopment: true,
    },
    {
        title: "PEKE Art",
        imgUrl: "/images/peke-art.png",
        liveUrl: "https://pekeart.com/",
        github: undefined,
        description: "A custom Shopify website for PEKE Art, a small business that allows sellers to create seller accounts and list their art for sale. The website features a gallery of art, blog articles, and seller dashboards.",
        tools: ["Shopify", "CMS", "CI/CD", "Shopify Liquid", "Stripe", "Frontend Development", "Product Development"],
        inDevelopment: true,
    },
    {
        title: "Warm Wave",
        imgUrl: "/images/warm-wave.png",
        liveUrl: "https://warm-wave.vercel.app/",
        github: "https://github.com/chrisowen2015/WarmWave",
        description: "A custom website for Warm Wave Studio, a music production studio in Los Angeles. The website features a gallery of the studio, a contact form, a list of studio services, and a list of their previous work.",
        tools: ["Next.js", "React", "Frontend Development", "Nodemailer", "Vercel", "Material-UI", "CMS"],
        inDevelopment: true,
    },
    {
        title: "My Website!",
        imgUrl: "/images/my-website.png",
        liveUrl: "https://www.chrisowen.me/",
        github: "https://github.com/chrisowen2015/Resume-App",
        description: "A Next.js website that showcases my resume, projects, and basic information about me. The website features a contact form, my education and work history, and a list of my personal projects. The website is hosted on Vercel.",
        tools: ["Next.js", "React", "Frontend Development", "Nodemailer", "Vercel", "Material-UI",]
    },
    {
        title: "CSUN Marketplace",
        imgUrl: "/images/csun-marketplace.png",
        liveUrl: undefined,
        github: "https://github.com/chrisowen2015/csun-marketplace-blazor?tab=readme-ov-file",
        description: "A web app where CSUN community members can buy and sell used or new products to and from other CSUN community members. Integrated with PayPal for checkout and features useful for students, such as Textbook search tools.",
        tools: ["Blazor Server", "Frontend Development", "Backend Development", "EF Core", "Azure", "Paypal API", "SQL", "Microsoft Identity", "Azure SQL",]
    },
]

function ProjectTile({ title, imgUrl, liveUrl, github, description, tools, inDevelopment }: { title: string, imgUrl: string, liveUrl?: string, github?: string, description: string, tools: string[], inDevelopment?: boolean }) {

    return (
        <>
            <Paper sx={{ borderRadius: '15px', padding: '2em' }}>
                <Box sx={{ borderRadius: '15px', backgroundImage: `url(${imgUrl})`, backgroundSize: '100% 100%', backgroundPosition: 'center', width: '100%', height: { xs: '200px', sm: "250px", md: '400px', lg: '350px', xl: '400px' } }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', width: '100%', height: '100%' }}>
                        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 1, lg: 4 }} justifyContent={('center')} sx={{ width: '100%', marginBottom: { xs: '10px', lg: '2em' } }}>
                            {
                                github != undefined &&
                                <Button href={github} variant="contained" color="secondary" size="small">View on Github</Button>
                            }

                            {
                                liveUrl != undefined &&
                                <Button href={liveUrl} variant="contained" color="secondary" size="small">Visit Live Site</Button>
                            }
                        </Stack>
                    </div>
                </Box>

                <Spacer height={20} />

                <Typography variant="h4" component={"h4"} fontWeight={500}>
                    {title}
                </Typography>

                <Spacer height={10} />

                <Typography>
                    {description}
                </Typography>

                <Spacer height={20} />
                <div style={{ marginLeft: '-0.5em' }}>
                    {
                        inDevelopment &&
                        <Chip label="In Development" color="secondary" sx={{ margin: '0.5em' }} />
                    }

                    {
                        tools.map((tool, index) => (
                            <Chip label={tool} key={index} style={{ margin: '0.5em' }} />
                        ))
                    }
                </div>
            </Paper>
        </>
    )
}

export default function ProjectExperience() {

    return (
        <Box sx={{ width: '100%', padding: '2em', paddingTop: '0' }} >

            <Typography fontWeight={600} variant="h3" component="h3" align="center" id="projects">
                PROJECT EXPERIENCE
            </Typography>

            <Spacer height={20} />

            <Typography align="center">
                Here are some projects I&apos;ve worked on, along with the technologies I used to build them and links to their respective Github repositories.
            </Typography>

            <Spacer height={40} />

            <Grid container spacing={4}>
                {
                    projectExperience.map((project, index) => (
                        <Grid item key={index} xs={12} md={6} lg={6}>
                            <ProjectTile title={project.title} imgUrl={project.imgUrl} liveUrl={project.liveUrl} github={project.github} description={project.description} tools={project.tools} inDevelopment={project.inDevelopment} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}