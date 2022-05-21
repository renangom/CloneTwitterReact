import React from 'react';

import { 
Container,
Retweeted,
Cloudd,
Body, Avatar,
Content,
Header,
Dot,
Description,
ImageContent,
Icons, Status,
CommentIcon,
RetweetIcon,
LikeIcon 
} from './styles';

const Tweet: React.FC = () => {
  return(
      <Container>
          <Retweeted>
              <Cloudd />
              Você retweetou
          </Retweeted>
          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong> Hiring Coders </strong>
                      <span>@hiringcoders</span>
                      <Dot />
                      <time> 20 de Maio</time> 
                  </Header>
                  <Description>
                      Esquece padrin
                  </Description>
                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon/>
                          18 
                      </Status>
                      <Status>
                          <RetweetIcon/>
                          202 
                      </Status>
                      <Status>
                          <LikeIcon/>
                          599 
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;