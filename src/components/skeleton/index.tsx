import {Wrapper, Header, TitleSkeleton, Content, TextLineSkeleton, UserDetailsSkeleton} from "./styles"
export default function PostSkeleton() {
    return (
      <Wrapper>
        <Header>
          <TitleSkeleton />
        </Header>
        <Content>
          <UserDetailsSkeleton>
            <TextLineSkeleton width="120px" />
            <TextLineSkeleton width="80px" />
          </UserDetailsSkeleton>
          <TextLineSkeleton width="100%" />
          <TextLineSkeleton width="90%" />
          <TextLineSkeleton width="75%" />
        </Content>
      </Wrapper>
    );
  }