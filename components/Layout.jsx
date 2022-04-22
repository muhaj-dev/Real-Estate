import Head from "next/head";
import { Container } from 'react-bootstrap';

import Navbars from "./Navbars";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Container style={{ MaxWidth: '1280px', margin: '0' }}>
            <header>
                <Navbars />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Container>
    </>
);

export default Layout;