import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`;

const AvatarUpload = styled.label`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #eee;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 60px;
  }
`;
const AvatarImg = styled.img`
  width: 100%;
`;
const AvaterInput = styled.input`
  display: none;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`;

export const Box = styled.div`
  margin-top: 4em;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
`;

export const InfoWrap = styled.div`
  width: 100%;
`;

export const Slot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #333;
`;
export const SubTitle = styled.p`
  font-size: 14px;
  color: #707070;
`;

export default function Profile() {
  const user = auth.currentUser;
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);
  const [userRank, setUserRank] = useState();
  const [avatar, setAvatar] = useState(user?.photoURL);
  const [userName, setUserName] = useState(
    `${user?.displayName ?? "Anonymous"}`
  );

  const fetchRank = async () => {
    setLoading(true);
    try {
      const userDocSnap = await getDoc(doc(db, "rank", user.uid));
      setUserRank(userDocSnap.data().score || 0);
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
      <Box>
        <Title>내정보</Title>
        <InfoWrap>
          <Slot>
            <Text>프로필 이미지</Text>
            {imgLoading ? (
              "업로드 중..."
            ) : (
              <>
                <AvatarUpload htmlFor="avatar">
                  {avatar ? (
                    <AvatarImg src={avatar} />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                  )}
                </AvatarUpload>
                <AvaterInput
                  onChange={onAvatarChange}
                  id="avatar"
                  type="file"
                  accept="image/*"
                ></AvaterInput>
              </>
            )}
          </Slot>
          <Slot>
            <SubTitle>닉네임</SubTitle>
            <Text>{userName}</Text>
          </Slot>
          <Slot>
            <SubTitle>점수</SubTitle>
            <Text>{loading ? "점수 가져오는 중 ..." : userRank}</Text>
          </Slot>
        </InfoWrap>
      </Box>
    </Wrapper>
  );
}
