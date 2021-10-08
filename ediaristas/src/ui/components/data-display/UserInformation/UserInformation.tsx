import React from 'react';
import {
    UserInformationContainer,
    UserDescription,
    AvatarStyled,
    RatingStyled,
    UserName,
} from './UserInformation.styles';

interface UserInformationProps {
    picture: string;
    name: string;
    rating: number;
    description?: string;
}

const PageTitle: React.FC<UserInformationProps> = (props) => {
    return (
        <UserInformationContainer>
            <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
            <UserName>{props.name}</UserName>
            <RatingStyled readOnly value={props.rating} />
            <UserDescription>{props.description}</UserDescription>
        </UserInformationContainer>
    );
};

export default PageTitle;
