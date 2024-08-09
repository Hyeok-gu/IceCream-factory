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
} from "../components/home-components";

const icecreamRef = doc(db, "icecream", "Mtu2EMz2fp8FKkItKQm5");

export default function Home() {
  const userId = auth.currentUser.uid;
  const userName = auth.currentUser.displayName;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [myRecipeLoading, setMyRecipeLoading] = useState(false);
  const [rankLoading, setRankLoading] = useState(false);
  const [rankList, setRankList] = useState([]);
  const [recipe, setRecipe] = useState([]); // DB에 있는 레시피
  const [myRecipe, setMyRecipe] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [lastUser, setLastUser] = useState("");
  const [successActive, setSuccessActive] = useState(false);

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
      setSuccessActive(true);
      setTimeout(() => {
        setSuccessActive(false);
      }, 1000);
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
    const shuffledNumbers = shuffleArray([0, 1, 2]); // 여기서 섞을 숫자를 지정
    setRandomRecipe(shuffledNumbers);
    try {
      await updateDoc(icecreamRef, {
        recipe: shuffledNumbers,
      }); // Firestore 문서 업데이트
    } catch (e) {
      console.log(e);
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
          {userName} 성공!!
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
          <Recipe>
            {loading ? (
              <Loading>Loading...</Loading>
            ) : (
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
            )}
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
                          index === 0 ? "one" : index === 1 ? "two" : "three"
                        }`}
                      ></div>
                    );
                  })}
                </div>
              </>
            )}
          </MyRecipe>
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
              {rankList.slice(1).map((item, index) => {
                return (
                  <UserTag key={index}>
                    <span>{item.userName}</span>
                    <span>{item.score}</span>
                  </UserTag>
                );
              })}
            </OtherUser>
          )}
        </UserList>
      </Wrapper>
    </>
  );
}
