import { Outlet } from 'react-router-dom';
import { Container, Header, Link, List } from '../SharedLayout/SharedLayout.module';

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>

                    <List>
                        <li>
                            <Link to="/" end>Home</Link>
                        </li>
                        <li>
                            <Link to="movies">Movies</Link>
                        </li>

                    </List>
                </nav>
            </Header>
            <Outlet />
        </Container>
    );
};