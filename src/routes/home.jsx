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

export default function Home() {
  const userId = auth.currentUser.uid;
  const userName = auth.currentUser.displayName;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [myRecipeLoading, setMyRecipeLoading] = useState(false);
  const [rankLoading, setRankLoading] = useState(true);
  const [successActive, setSuccessActive] = useState(false);
  const [rankList, setRankList] = useState([]);
  const [recipe, setRecipe] = useState([]); // DB에 있는 레시피
  const [myRecipe, setMyRecipe] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [lastUser, setLastUser] = useState("");
  const [randomBtnArray, setRandomBtnArray] = useState([]);

  const fetchRecipe = async () => {
    //DB에 있는 레시피 가져오기
    setLoading(true);
    try {
      const recipeQuery = query(collection(db, "icecream"));
      await onSnapshot(recipeQuery, (snapshot) => {
        const recipe = snapshot.docs.map((doc) => doc.data());
        setRecipe(recipe[0].recipe);
        setLastUser(recipe[0].lastUser);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const successEvent = () => {
    try {
      // 특정 컬렉션에 대한 쿼리 설정
      const rankQuery = query(collection(db, "rank"));

      // 컬렉션의 모든 문서에 대한 실시간 업데이트 리스너 설정
      onSnapshot(rankQuery, (querySnapshot) => {
        // 변경된 문서들에 대해 반복
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "modified") {
            // 변경된 문서의 경우 실행
            // 변경된 문서에 대한 동작 수행
            setSuccessActive(true);
            setTimeout(() => {
              setSuccessActive(false);
            }, 1500);
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleMyResipeMake = (e) => {
    //내 레시피에 맛 추가하기
    const newMyRecipe = [...myRecipe, e];
    setMyRecipe(newMyRecipe);
  };

  const matchRecipe = () => {
    // 나의 레시피와 DB레시피를 비교해 정답 유무 확인
    setMyRecipeLoading(true);
    try {
      if (recipe.length !== myRecipe.length) return false;
      for (let i = 0; i < recipe.length; i++) {
        if (recipe[i] !== myRecipe[i]) return false;
      }
      scoreAdd();
    } catch (e) {
      console.log(e);
    } finally {
      setMyRecipe([]);
      getRankList();
      generateRandomRecipe();
      setMyRecipeLoading(false);
    }
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
    const shuffleBtnArray = shuffleArray([0, 1, 2, 3, 4, 5]);
    setRandomBtnArray(shuffleBtnArray);
    console.log(shuffleBtnArray);
  };

  const generateRandomRecipe = async () => {
    // 랜덤으로 만든 배열 DB에 업데이트
    setLoading(true);
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5]); // 여기서 섞을 숫자를 지정
    setRandomRecipe(shuffledNumbers);
    try {
      await updateDoc(icecreamRef, {
        recipe: shuffledNumbers,
      }); // Firestore 문서 업데이트
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getRankList = async () => {
    //랭킹 리스트 가져오기
    setRankLoading(true);
    try {
      const rankQuery = query(collection(db, "rank"), orderBy("score", "desc"));
      await onSnapshot(rankQuery, (snapshot) => {
        const rankList = snapshot.docs.map((doc) => doc.data());
        setRankList(rankList);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setRankLoading(false);
    }
  };

  const scoreAdd = async () => {
    if (!auth.currentUser) return;
    const userDocRef = doc(db, "rank", userId);
    const userDocSnap = await getDoc(userDocRef);
    await updateDoc(icecreamRef, {
      lastUser: userName,
    });
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

  const logOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    successEvent();
  });

  useEffect(() => {
    shuffleBtns();
    fetchRecipe();
    getRankList();
  }, []);

  useEffect(() => {
    if (myRecipe.length === 6) {
      matchRecipe();
      shuffleBtns();
    }
  }, [myRecipe]); // myRecipe가 변경될 때마다 실행

  return (
    <>
      <Wrapper>
        <Success className={successActive ? "active" : ""}>
          <span>{lastUser} 성공!!</span>
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
          {rankLoading ? (
            <Loading>Loading...</Loading>
          ) : (
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
          )}
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
                {myRecipeLoading ? (
                  <Loading>Loading..</Loading>
                ) : (
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
                )}
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
