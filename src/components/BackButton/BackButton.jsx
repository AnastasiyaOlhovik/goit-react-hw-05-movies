import { useLocation } from 'react-router-dom';
import { NavLinkStyled } from './BackButton.module';

export const BackButton = () => {
    const location = useLocation();

    return (
        <NavLinkStyled to={location?.state?.from ?? '/'} type="button">
            BACK
        </NavLinkStyled>
    );
};