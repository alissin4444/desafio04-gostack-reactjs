import styled from "styled-components";

import Theme from "../../configs/Theme";

export const Header = styled.div`
  height: 50px;
  background-color: ${Theme.primary.core};
  color: ${Theme.texts.inverted};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-right: 20px;
      font-size: 18px;
    }
  }
`;
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;
export const TimeLine = styled.div`
  padding: 0 20px;
`;
export const Post = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: ${Theme.background.tint};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;
export const PostOwner = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const PostDate = styled.h4`
  font-size: 12px;
  color: ${Theme.texts.muted};
`;

export const Divider = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${Theme.background.core};
`;

export const Comentary = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: flex-start;
  div {
    background-color: ${Theme.background.core};
    border-radius: 15px;
    padding: 15px;
    flex: 1;
    margin: 5px 0;
  }
`;

export const Avatar = styled.img`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  margin-right: 20px;
`;
export const Name = styled.h1`
  font-size: ${props => props.size}px;
  font-weight: bold;
  color: ${Theme.texts.primary};
`;
export const Text = styled.p`
  font-size: ${props => props.size}px;
  color: ${Theme.texts.secondary};
  line-height: 1.8;
`;
