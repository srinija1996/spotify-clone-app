import styled from "styled-components";

export const YourFavTunesComponent = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const MainComponent = styled.div`
  border-radius: 0 10px 10px 0;
  flex-grow: 2;
  padding: 0;
  margin: 0;
`;

export const Banner = styled.div`
  background-image: url("https://res.cloudinary.com/dbqix3lwq/image/upload/v1632227502/yourFavTunesBackground_pthkpa.jpg");
  color: #ffffff;
  height: 200px;
  background-size: cover;
  width: 90vw;
  border-radius: 0 10px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 15px;
`;

export const Heading = styled.h1`
  font-size: 30px;
  padding: 0;
  margin: 0;
`;

export const BottomSection = styled.div`
  padding: 20px;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  color: grey;
  font-weight: 500;
  font-size: 14px;
`;
