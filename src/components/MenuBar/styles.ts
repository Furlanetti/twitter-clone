import styled, { css } from 'styled-components';

import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
} from '../../styles/Icons';

export const Container = styled.div`
    display: none;
    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }
`;
export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
    }
`;
export const Logo = styled.div`
    width: 41px;
    height: 41px;
    margin-bottom: 20px;

    > path {
        fill: var(--twitter);
    }
`;
export const MenuButton = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 19px;
        }
    }

    padding: 8.25px 0;
    outline: 0;

    & + button {
        margin-top: 16px;
    }

    & + button:last-child {
    }
`;
export const Button = styled.div``;

const iconCSS = css`
    flex-shrink: 0;

    width: 30px;
    height: 30px;
    color: var(--white);
`;

export const HomeIcon = styled(Home)`
    ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
    ${iconCSS}
`;
export const EmailIcon = styled(Email)`
    ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
    ${iconCSS}
`;
