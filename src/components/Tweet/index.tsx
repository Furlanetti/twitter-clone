import React from 'react';

import {
    Container,
    Retweeted,
    UserIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <UserIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Felipe Furlanetti</strong>
                        <span>@furlanetti</span>
                        <Dot />
                        <time>27 de Out</time>
                    </Header>

                    <Description>Teste de descrição</Description>
                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            44
                        </Status>
                        <Status>
                            <RetweetIcon />
                            55
                        </Status>
                        <Status>
                            <LikeIcon />
                            77
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
