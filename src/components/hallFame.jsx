import {
  HallFameWrapper,
  RankingItem,
  RankingWrap,
} from "../components/home-components";

const HallFame = (props) => {
  const { data, className } = props;
  return (
    <HallFameWrapper className={className}>
      <div className="title">
        <span>명예의 전당</span>
      </div>
      <RankingWrap>
        {data.slice(0, 3).map((item, index) => {
          return (
            <RankingItem
              key={index}
              className={`${
                index === 0
                  ? "first"
                  : index === 1
                  ? "second"
                  : index === 2
                  ? "third"
                  : ""
              }`}
            >
              <span>{item.userName}</span>
              <span>{item.score}</span>
            </RankingItem>
          );
        })}
      </RankingWrap>
    </HallFameWrapper>
  );
};

export default HallFame;
