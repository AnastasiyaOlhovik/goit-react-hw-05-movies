import { NavLinkNotFound, DivStyled, TextStyled } from '../components/BackButton/BackButton.module';

export default function NotFound() {
    return (
        <DivStyled>
            <div>
                <img
                    src="https://papik.pro/uploads/posts/2022-08/thumbs/1661927859_31-papik-pro-p-smailik-razocharovanie-png-32.png"
                    alt="not found"
                    width="400"
                    height="400"
                />
                <TextStyled>
                    Oooops! Page not found!
                    <NavLinkNotFound to="/">
                        Return Home
                    </NavLinkNotFound>
                </TextStyled>
            </div>
        </DivStyled>
    );
}