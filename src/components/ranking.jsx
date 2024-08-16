import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  z-index: 100;
  padding: 42px 16px 0;
  display: flex;
  justify-content: center;
`;

const Exit = styled.button`
  width: 44px;
  height: 44px;
  border: 3px solid #c83517;
  border-radius: 9px;
  background-color: #f84c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: translateY(-5px);
  }
`;

const List = styled.div`
  width: 100%;
  max-width: 480px;
`;

const Title = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  height: 34px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const ScrollWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-top: 32px;
  gap: 16px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .wrap {
    display: flex;
    align-items: center;
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: 900;
  }
  .index {
    margin-right: 18px;
  }
  .photo {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 8px;
  }
`;

export default function RankingScreen(props) {
  const { onClick, rankList } = props;
  return (
    <Wrapper>
      <Exit onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g id="그룹_30" data-name="그룹 30" transform="translate(-1844 -55)">
            <rect
              id="사각형_21"
              data-name="사각형 21"
              width="24"
              height="24"
              transform="translate(1844 55)"
              fill="none"
            />
            <g
              id="close_FILL0_wght400_GRAD0_opsz48"
              transform="translate(1837.65 48.65)"
              fill="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M 25.11923027038574 27.05710792541504 L 24.76568031311035 26.70354843139648 L 18.35000038146973 20.28786849975586 L 11.9343204498291 26.70354843139648 L 11.58077049255371 27.05710792541504 L 11.22722053527832 26.70354843139648 L 9.996450424194336 25.4727783203125 L 9.642889976501465 25.11922836303711 L 9.996450424194336 24.76567840576172 L 16.41213035583496 18.34999847412109 L 9.996450424194336 11.93431854248047 L 9.642889976501465 11.58076858520508 L 9.996450424194336 11.22721862792969 L 11.22722053527832 9.996448516845703 L 11.58077049255371 9.642888069152832 L 11.9343204498291 9.996448516845703 L 18.35000038146973 16.41212844848633 L 24.76568031311035 9.996448516845703 L 25.11923027038574 9.642888069152832 L 25.47278022766113 9.996448516845703 L 26.70355033874512 11.22721862792969 L 27.05710983276367 11.58076858520508 L 26.70355033874512 11.93431854248047 L 20.28787040710449 18.34999847412109 L 26.70355033874512 24.76567840576172 L 27.05710983276367 25.11922836303711 L 26.70355033874512 25.4727783203125 L 25.47278022766113 26.70354843139648 L 25.11923027038574 27.05710792541504 Z"
                stroke="none"
              />
              <path
                d="M 25.11923027038574 26.34999847412109 L 26.35000038146973 25.11922836303711 L 19.58077049255371 18.34999847412109 L 26.35000038146973 11.58076858520508 L 25.11923027038574 10.34999847412109 L 18.35000038146973 17.11922836303711 L 11.58077049255371 10.34999847412109 L 10.35000038146973 11.58076858520508 L 17.11923027038574 18.34999847412109 L 10.35000038146973 25.11922836303711 L 11.58077049255371 26.34999847412109 L 18.35000038146973 19.58076858520508 L 25.11923027038574 26.34999847412109 M 25.11923027038574 27.34999847412109 C 24.86330795288086 27.34999847412109 24.60738563537598 27.25236892700195 24.4121208190918 27.05710792541504 L 18.35000038146973 20.9949893951416 L 12.28787994384766 27.05710792541504 C 11.8973503112793 27.44762992858887 11.26419162750244 27.44762992858887 10.87366008758545 27.05710792541504 L 9.642889976501465 25.82633781433105 C 9.252370834350586 25.4358081817627 9.252370834350586 24.80264854431152 9.642889976501465 24.41211891174316 L 15.70501041412354 18.34999847412109 L 9.642889976501465 12.28787803649902 C 9.252370834350586 11.89734840393066 9.252370834350586 11.26418876647949 9.642889976501465 10.87365818023682 L 10.87366008758545 9.642888069152832 C 11.26419162750244 9.252367973327637 11.8973503112793 9.252367973327637 12.28787994384766 9.642888069152832 L 18.35000038146973 15.7050085067749 L 24.4121208190918 9.642888069152832 C 24.80265045166016 9.252367973327637 25.43581008911133 9.252367973327637 25.82633972167969 9.642888069152832 L 27.05710983276367 10.87365818023682 C 27.44762992858887 11.26418876647949 27.44762992858887 11.89734840393066 27.05710983276367 12.28787803649902 L 20.99499130249023 18.34999847412109 L 27.05710983276367 24.41211891174316 C 27.44762992858887 24.80264854431152 27.44762992858887 25.4358081817627 27.05710983276367 25.82633781433105 L 25.82633972167969 27.05710792541504 C 25.63107490539551 27.25236892700195 25.37515258789062 27.34999847412109 25.11923027038574 27.34999847412109 Z"
                stroke="none"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </Exit>
      <List>
        <Title>순위</Title>
        <ScrollWrap>
          {rankList.map((item, index) => {
            return (
              <Row key={index}>
                <div className="wrap">
                  <span className="index">{index + 1}등</span>
                  <img
                    className="photo"
                    src={item.photoURL}
                    alt="프로필 이미지"
                  ></img>
                  <span className="name">{item.userName}</span>
                </div>
                <span className="score">{item.score}</span>
              </Row>
            );
          })}
        </ScrollWrap>
      </List>
    </Wrapper>
  );
}
