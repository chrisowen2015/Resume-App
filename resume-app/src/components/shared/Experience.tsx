'use client';

import { Box, Chip, Link, Typography } from "@mui/material";
import { Work } from "@mui/icons-material";
import Spacer from "@/components/shared/spacer";

import { useTheme } from "@mui/material";

export default function Experience({ dates, title, company, url, description }: { dates: string, title: string, company: string, url?: string, description: string }) {
    const theme = useTheme();
    return (
        <Box sx={{
            width: {
                md: '100%',
                ld: '100%',
                xl: '100%',
            },
            borderLeft: '1px solid grey', paddingLeft: '3em', marginBottom: '60px'
        }}>
            <Box sx={{ display: 'flex' }}>
                <Chip label={dates} sx={{ width: 'min-content' }} />
                <Box sx={{
                    position: 'relative',
                    left: (url ? '-216px' : '-124px'),
                    top: '0px',
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 100
                }}>
                    <Work />
                </Box>
            </Box>

            <Spacer height={10} />

            <Box sx={{}}>
                <Box sx={{
                    display: {
                        lg: 'block',
                        xl: 'flex',
                    }
                }} >
                    <Typography variant="h5" fontWeight={600} >
                        {title} —&nbsp;
                    </Typography>
                    <Typography color="secondary" variant="h6" fontWeight={500}>
                        {
                            url ?
                                <Link href={url} style={{ color: 'inherit' }} underline="hover">
                                    {company}
                                </Link>
                                :
                                company
                        }
                    </Typography>

                </Box>
            </Box>

            <Spacer height={20} />

            <Typography sx={{ fontWeight: 600 }} >
                {description}
            </Typography>
        </Box>
    );
}