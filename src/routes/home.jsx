import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Success,
  Header,
  Logout,
  RecipeWrapper,
  Recipe,
  MyRecipe,
  BtnWrap,
  Button,
  Loading,
  IcecreamBox,
  IcecreamItem,
  Bg,
  ProfileImg,
  ProfileWrapper,
  ProfileInfo,
  HallFame,
  RankingItem,
  RankingWrap,
  RankListBtn,
} from "../components/home-components";
import RankingScreen from "../components/ranking";

const icecreamRef = doc(db, "icecream", "Mtu2EMz2fp8FKkItKQm5");
const array = [0, 1, 2, 3, 4, 5];

export default function Home() {
  const user = auth.currentUser;
  const userId = user?.uid;
  const userName = user?.displayName;
  const userProfile = user?.photoURL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showRank, setShowRank] = useState(false);
  const [rankList, setRankList] = useState([]);

  const [recipe, setRecipe] = useState([]); // DB에 있는 레시피
  const [myRecipe, setMyRecipe] = useState([]);
  const [lastUser, setLastUser] = useState("");
  const [randomBtnArray, setRandomBtnArray] = useState(array);
  const [gameLoading, setGameLoading] = useState(false);
  const [userScore, setUserScore] = useState();
  const fetchRecipe = async () => {
    //DB에 있는 레시피 가져오기
    setLoading(true);
    try {
      const recipeQuery = query(collection(db, "icecream"));
      const rankQuery = query(collection(db, "rank"), orderBy("score", "desc"));
      await onSnapshot(recipeQuery, (snapshot) => {
        const recipe = snapshot.docs.map((doc) => doc.data());
        setGameLoading(recipe[0].loadingState);
        setRecipe(recipe[0].recipe);
        setLastUser(recipe[0].lastUser);
      });
      await onSnapshot(rankQuery, (snapshot) => {
        const rankList = snapshot.docs.map((doc) => doc.data());
        setRankList(rankList);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleMyResipeMake = (e) => {
    //내 레시피에 맛 추가하기
    const newMyRecipe = [...myRecipe, e];
    setMyRecipe(newMyRecipe);
  };

  const shuffleArray = (array) => {
    //랜덤 배열 만드는 이벤트
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const shuffleBtns = () => {
    const shuffleBtnArray = shuffleArray(array);
    setRandomBtnArray(shuffleBtnArray);
  };

  const logOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const getUserScore = async () => {
    const userDocRef = doc(db, "rank", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const currentScore = userDocSnap.data().score || 0; // score가 없으면 기본값 0
      setUserScore(currentScore);
    } else {
      setUserScore(0);
    }
  };

  const scoreAdd = async () => {
    const userDocRef = doc(db, "rank", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const currentScore = userDocSnap.data().score || 0; // score가 없으면 기본값 0
      const newScore = currentScore + 1;
      await updateDoc(userDocRef, {
        score: newScore,
        photoURL: userProfile,
        userName: userName,
      });
      setUserScore(newScore);
    } else {
      await setDoc(userDocRef, {
        score: 1,
        userName: userName || "Unknown User",
        photoURL: userProfile,
      });
      setUserScore(1);
    }
  };

  const updateLoading = async () => {
    //레시피와 내 레시피가 맞으면 firestore Icecream > loadingState true로 업데이트
    setMyRecipe([]);
    if (recipe.length !== myRecipe.length) return false;
    for (let i = 0; i < recipe.length; i++) {
      if (recipe[i] !== myRecipe[i]) return false;
    }
    try {
      await updateDoc(icecreamRef, {
        loadingState: true,
        lastUser: userName,
      });
      scoreAdd();
    } catch (e) {
      console.log(e);
    } finally {
      const shuffledNumbers = shuffleArray(array); // 여기서 섞을 숫자를 지정
      setTimeout(() => {
        updateDoc(icecreamRef, {
          loadingState: false,
          recipe: shuffledNumbers,
        });
      }, 2000);
    }
  };
  const handleRankList = () => {
    setShowRank(!showRank);
  };

  useEffect(() => {
    fetchRecipe();
    getUserScore();
  }, []);

  useEffect(() => {
    if (myRecipe.length === 6) {
      updateLoading();
      shuffleBtns();
    }
  }, [myRecipe]); // myRecipe가 변경될 때마다 실행

  return (
    <>
      <Wrapper>
        <Success className={gameLoading ? "active" : ""}>
          {userProfile ? <img src={userProfile} alt="프로필 이미지" /> : ""}
          <span className="text">{lastUser} 성공!!</span>
          <div className="second"></div>
          <div className="first"></div>
        </Success>
        <Header>
          <ProfileWrapper
            onClick={() => {
              navigate("/profile");
            }}
          >
            <ProfileImg title="마이페이지 바로가기">
              {userProfile ? <img src={userProfile} alt="프로필 이미지" /> : ""}
            </ProfileImg>
            <ProfileInfo title="마이페이지 바로가기">
              <div className="textWrap">
                <span>{userName}</span>
                <span>{userScore}</span>
              </div>
              <Logout
                title="로그아웃"
                onClick={() => {
                  logOut();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="그룹_1"
                    data-name="그룹 1"
                    transform="translate(-254 -60)"
                  >
                    <path
                      id="logout_24dp_5F6368_FILL0_wght400_GRAD0_opsz24"
                      d="M121.778-824a1.712,1.712,0,0,1-1.256-.522,1.712,1.712,0,0,1-.522-1.256v-12.444a1.712,1.712,0,0,1,.522-1.256,1.712,1.712,0,0,1,1.256-.522H128v1.778h-6.222v12.444H128V-824Zm9.778-3.556-1.222-1.289,2.267-2.267h-7.267v-1.778H132.6l-2.267-2.267,1.222-1.289L136-832Z"
                      transform="translate(138 904)"
                      fill="#fff"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <rect
                      id="사각형_4"
                      data-name="사각형 4"
                      width="24"
                      height="24"
                      transform="translate(254 60)"
                      fill="none"
                    />
                  </g>
                </svg>
              </Logout>
            </ProfileInfo>
          </ProfileWrapper>
          <HallFame>
            <div className="title">
              <span>명예의 전당</span>
            </div>
            <RankingWrap>
              {rankList.slice(0, 3).map((item, index) => {
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
          </HallFame>
          <RankListBtn>
            <button
              title="랭킹 보기"
              onClick={() => {
                handleRankList();
              }}
            >
              <img src="/img/ico_rank.svg" alt="랭킹리스트 보기" />
            </button>
          </RankListBtn>
        </Header>
        <RecipeWrapper>
          {loading ? (
            <Loading>Loading...</Loading>
          ) : (
            <>
              <Recipe>
                <>
                  <IcecreamBox className="object">
                    {recipe.map((item, index) => {
                      return (
                        <IcecreamItem
                          key={index}
                          className={`${
                            item === 0
                              ? "strawberry"
                              : item === 1
                              ? "choco"
                              : item === 2
                              ? "mint"
                              : item === 3
                              ? "vanilla"
                              : item === 4
                              ? "blueberry"
                              : "greentea"
                          } ${
                            index === 0
                              ? "one"
                              : index === 1
                              ? "two"
                              : index === 2
                              ? "three"
                              : index === 3
                              ? "four"
                              : index === 4
                              ? "five"
                              : "six"
                          } wiggle`}
                        ></IcecreamItem>
                      );
                    })}
                  </IcecreamBox>
                  <p className="title">만들어주세요!</p>
                </>
              </Recipe>
              <MyRecipe>
                <>
                  <IcecreamBox className="object">
                    <div
                      className={`${
                        myRecipe.length === 1
                          ? "first"
                          : myRecipe.length === 2
                          ? "second"
                          : myRecipe.length === 3
                          ? "third"
                          : myRecipe.length === 4
                          ? "fourth"
                          : myRecipe.length === 5
                          ? "fifth"
                          : "sixth"
                      }`}
                    >
                      {myRecipe.map((item, index) => {
                        return (
                          <IcecreamItem
                            key={index}
                            className={`
                              ${index + 1 === myRecipe.length ? "active" : ""}
                              ${
                                item === 0
                                  ? "strawberry"
                                  : item === 1
                                  ? "choco"
                                  : item === 2
                                  ? "mint"
                                  : item === 3
                                  ? "vanilla"
                                  : item === 4
                                  ? "blueberry"
                                  : "greentea"
                              } ${
                              index === 0
                                ? "one"
                                : index === 1
                                ? "two"
                                : index === 2
                                ? "three"
                                : index === 3
                                ? "four"
                                : index === 4
                                ? "five"
                                : "six"
                            }`}
                          ></IcecreamItem>
                        );
                      })}
                    </div>
                  </IcecreamBox>
                  <p className="title">나의 조합</p>
                </>
              </MyRecipe>
            </>
          )}
        </RecipeWrapper>
        <BtnWrap>
          <div className="buttons">
            {randomBtnArray.map((btnIndex) => {
              return (
                <Button
                  key={btnIndex}
                  className={
                    btnIndex === 0
                      ? "strawberry"
                      : btnIndex === 1
                      ? "choco"
                      : btnIndex === 2
                      ? "mint"
                      : btnIndex === 3
                      ? "vanilla"
                      : btnIndex === 4
                      ? "blueberry"
                      : "greentea"
                  }
                  onClick={() => handleMyResipeMake(btnIndex)}
                ></Button>
              );
            })}
          </div>
          <span>SELECT ME!!!</span>
        </BtnWrap>
      </Wrapper>
      {showRank && (
        <RankingScreen
          onClick={() => {
            handleRankList();
          }}
          rankList={rankList}
        />
      )}
      <Bg />
    </>
  );
}
