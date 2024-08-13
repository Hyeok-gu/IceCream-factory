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
  HeaderTithe,
  RecipeWrapper,
  Recipe,
  MyRecipe,
  BtnWrap,
  Button,
  UserList,
  UserTag,
  Loading,
  Account,
  ScrollWrapper,
  IcecreamBox,
  IcecreamItem,
} from "../components/home-components";

const icecreamRef = doc(db, "icecream", "Mtu2EMz2fp8FKkItKQm5");
const array = [0, 1, 2, 3, 4, 5];

export default function Home() {
  const userId = auth.currentUser.uid;
  const userName = auth.currentUser.displayName;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rankList, setRankList] = useState([]);
  const [recipe, setRecipe] = useState([]); // DB에 있는 레시피
  const [myRecipe, setMyRecipe] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [lastUser, setLastUser] = useState("");
  const [randomBtnArray, setRandomBtnArray] = useState(array);
  const [gameLoading, setGameLoading] = useState(false);

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

  const scoreAdd = async () => {
    const userDocRef = doc(db, "rank", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const currentScore = userDocSnap.data().score || 0; // score가 없으면 기본값 0
      const newScore = currentScore + 1;
      await updateDoc(userDocRef, { score: newScore });
    } else {
      await setDoc(userDocRef, {
        score: 1,
        userName: userName || "Unknown User",
      });
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
          lastUser: userName,
        });
      }, 2000);
    }
  };

  useEffect(() => {
    fetchRecipe();
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
          <span className='text'>{lastUser} 성공!!</span>
        </Success>
        <Header>
          <Account>{userName}</Account>
          <Logout
            onClick={() => {
              logOut();
            }}
          >
            로그아웃
          </Logout>
        </Header>
        <HeaderTithe>ICECREAM FACTORY</HeaderTithe>
        <UserList>
          <p className="title">순위</p>
          <ScrollWrapper>
            {rankList.map((item, index) => {
              return (
                <UserTag
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
                  <div className="wrap">
                    <span className="index">{index + 1}</span>
                    <span className="name">{item.userName}</span>
                  </div>
                  <span className="score">{item.score}</span>
                </UserTag>
              );
            })}
          </ScrollWrapper>
        </UserList>
        <RecipeWrapper>
          {loading ? (
            <Loading>Loading...</Loading>
          ) : (
            <>
              <Recipe>
                <>
                  <p className="title">만들어주세요!</p>
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
                          }`}
                        ></IcecreamItem>
                      );
                    })}
                  </IcecreamBox>
                </>
              </Recipe>
              <MyRecipe>
                <>
                  <p className="title">나의 조합</p>
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
                            }`}
                          ></IcecreamItem>
                        );
                      })}
                    </div>
                  </IcecreamBox>
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
    </>
  );
}
