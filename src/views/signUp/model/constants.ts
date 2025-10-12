import { NicknameErrorType, SignUpState } from "./types";

export const STEP_TITLE: Record<keyof SignUpState, string> = {
  nickname: "올라스에서 사용할\n닉네임을 입력해주세요",
  birthday: "출생연도를\n알려주세요",
  gender: "성별을\n선택해주세요",
};

export const NICKNAME_ERROR_CAPTION: Record<
  Exclude<NicknameErrorType, null>,
  string
> = {
  specialCharacter: "특수문자는 사용할 수 없어요",
  length: "2~8자 이내로 써주세요",
  duplicate: "이미 사용 중인 닉네임이에요",
};
