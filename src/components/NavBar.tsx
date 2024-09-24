import Link from "next/link";
import { Container } from "@mui/material";

export default function NavBar() {
    const ulStyles = {
        display: 'flex',
        listStyleType: 'none',
    };

    const liStyles = {
        textDecoration: 'none',
        marginRight: '15px'
    };

    return (
        <Container maxWidth={false} sx={{backgroundColor: 'grey', padding: '15px', mb: '25px'}}>
            <ul style={ulStyles}>
                <li><Link href="/" style={liStyles}>Home</Link></li>
                <li><Link href="/login" style={liStyles}>Login</Link></li>
                <li><Link href="/search" style={liStyles}>Search</Link></li>
                <li><Link href="/settings" style={{textDecoration: 'none'}}>Settings</Link></li>
            </ul>
        </Container>
    );
}