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
  OtherUser,
  UserTag,
  Loading,
  Account,
  ScrollWrapper,
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

  // const successEvent = () => {
  //   try {
  //     const rankQuery = query(collection(db, "rank"));
  //     onSnapshot(rankQuery, () => {
  //       setSuccessActive(true);
  //       setTimeout(() => {
  //         setSuccessActive(false);
  //       }, 1500);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
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
    const newMyRecipe = [e, ...myRecipe];
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

  const generateRandomRecipe = async () => {
    // 랜덤으로 만든 배열 DB에 업데이트
    setLoading(true);
    const shuffledNumbers = shuffleArray([0, 1, 2]); // 여기서 섞을 숫자를 지정
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
    fetchRecipe();
    getRankList();
  }, []);

  useEffect(() => {
    if (myRecipe.length === 3) {
      matchRecipe();
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
        <RecipeWrapper>
          {loading ? (
            <Loading>Loading...</Loading>
          ) : (
            <>
              <Recipe>
                <>
                  <p className="title">만들어주세요!</p>
                  <div className="object">
                    {recipe.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            item === 0
                              ? "strawberry"
                              : item === 1
                              ? "choco"
                              : "mint"
                          } ${
                            index === 0 ? "one" : index === 1 ? "two" : "three"
                          }`}
                        ></div>
                      );
                    })}
                  </div>
                </>
              </Recipe>
              <MyRecipe>
                {myRecipeLoading ? (
                  <Loading>Loading..</Loading>
                ) : (
                  <>
                    <p className="title">나의 조합</p>
                    <div
                      className={`${
                        myRecipe.length === 2
                          ? "second"
                          : myRecipe.length === 3
                          ? "third"
                          : ""
                      } object`}
                    >
                      {myRecipe.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`${
                              item === 0
                                ? "strawberry"
                                : item === 1
                                ? "choco"
                                : "mint"
                            } ${
                              index === 0
                                ? "one"
                                : index === 1
                                ? "two"
                                : "three"
                            }`}
                          ></div>
                        );
                      })}
                    </div>
                  </>
                )}
              </MyRecipe>
            </>
          )}
        </RecipeWrapper>
        <BtnWrap>
          <div>
            <Button
              className="strawberry"
              onClick={() => handleMyResipeMake(0)}
            ></Button>
            <Button
              className="choco"
              onClick={() => handleMyResipeMake(1)}
            ></Button>
            <Button
              className="mint-choco"
              onClick={() => handleMyResipeMake(2)}
            ></Button>
          </div>
          <span>SELECT ME!!!</span>
        </BtnWrap>
        <UserList>
          <div className="first-user">
            <p className="title">최고의 실력자</p>
            <span className="name">
              {rankList.length > 0 ? rankList[0].userName : "1등 없음!"}
            </span>
          </div>
          {rankLoading ? (
            <Loading>Loading...</Loading>
          ) : (
            <OtherUser>
              <div className="index">기회가 있는 자</div>
              <ScrollWrapper>
                {rankList.slice(1).map((item, index) => {
                  return (
                    <UserTag key={index}>
                      <span>{item.userName}</span>
                      <span>{item.score}</span>
                    </UserTag>
                  );
                })}
              </ScrollWrapper>
            </OtherUser>
          )}
        </UserList>
      </Wrapper>
    </>
  );
}
