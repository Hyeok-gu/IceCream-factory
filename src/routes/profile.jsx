import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 16px 0;
`;

const PageTitle = styled.div`
  border: 2px solid #1c1108;
  background-color: #392b20;
  padding: 6px 11px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  span {
    font-weight: 900;
    color: #fff;
    font-size: 16px;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0e3c3;
  border: 2px solid #3f2d23;
  position: relative;
  box-shadow: 0 6px #3f2d23, 0 11px rgba(63, 45, 35, 0.5);
  padding: 60px 30px 30px;
  &::after {
    content: "";
    width: 42px;
    height: 50px;
    display: block;
    background: url(/img/ico_clip.svg) no-repeat center / cover;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
`;

const ImgLoading = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 23px;
  background-color: #e2b97e;
  border: 3px solid #1c1108;
  margin-bottom: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarUpload = styled.label`
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 23px;
  background-color: #e2b97e;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #1c1108;
  margin-bottom: 38px;
  transition: all 0.1s linear;
  &:hover {
    transform: translateY(-5px);
  }
  &.empty {
    &::after {
      content: "";
      width: 40px;
      height: 40px;
      display: block;
      background: url(/img/ico_camera.svg) no-repeat center / cover;
      position: absolute;
    }
  }
`;
const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const AvaterInput = styled.input`
  display: none;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 26px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: 900;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #6a5e55;
  font-weight: 900;
`;

const CodeDeco = styled.img`
  width: 100%;
  max-width: 260px;
`;

const Pid = styled.p`
  font-size: 14px;
  font-weight: 900;
  color: #c1b18a;
  text-align: center;
  letter-spacing: -1.5px;
  padding-top: 22px;
`;

const Button = styled.button`
  width: 112px;
  height: 80px;
  background: url(/img/ico_button_bg.svg) no-repeat center / contain;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  margin-top: 56px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: translateY(-5px);
  }
`;

export default function Profile() {
  const user = auth.currentUser;
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);
  const [userRank, setUserRank] = useState();
  const [avatar, setAvatar] = useState(user?.photoURL);
  const [userName, setUserName] = useState(
    `${user?.displayName ?? "Anonymous"}`
  );
  const navigate = useNavigate();

  const fetchRank = async () => {
    setLoading(true);
    try {
      const userDocSnap = await getDoc(doc(db, "rank", user.uid));

      if (!userDocSnap.exists()) {
        //문서의 존재 유무 확인
        setUserRank(0);
      } else {
        const score = userDocSnap.data()?.score || 0;
        setUserRank(score);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onAvatarChange = async (e) => {
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      setImgLoading(true);
      try {
        const file = files[0];
        const locationRef = ref(storage, `avatars/${user?.uid}`);
        const result = await uploadBytes(locationRef, file);
        const avatarUrl = await getDownloadURL(result.ref);
        setAvatar(avatarUrl);
        await updateProfile(user, { photoURL: avatarUrl });
      } catch (e) {
        console.log(e);
      } finally {
        setImgLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchRank();
  }, []);

  return (
    <Wrapper>
      {user && (
        <>
          <PageTitle>
            <span>마이페이지</span>
          </PageTitle>
          <CardWrapper>
            <InfoWrap>
              {imgLoading ? (
                <ImgLoading>로딩 중</ImgLoading>
              ) : (
                <>
                  <AvatarUpload
                    htmlFor="avatar"
                    className={!avatar ? "empty" : ""}
                  >
                    {avatar && <AvatarImg src={avatar} />}
                  </AvatarUpload>
                  <AvaterInput
                    onChange={onAvatarChange}
                    id="avatar"
                    type="file"
                    accept="image/*"
                  ></AvaterInput>
                </>
              )}
              <Slot>
                <SubTitle>닉네임</SubTitle>
                <Text>{userName}</Text>
              </Slot>
              <Slot>
                <SubTitle>점수</SubTitle>
                <Text>{loading ? "점수 가져오는 중 ..." : userRank}</Text>
              </Slot>
              <CodeDeco src="/img/ico_code_deco.svg" alt="바코드 데코레이션" />
              <Pid>PID | {user.uid}</Pid>
            </InfoWrap>
          </CardWrapper>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            확인
          </Button>
        </>
      )}
    </Wrapper>
  );
}
