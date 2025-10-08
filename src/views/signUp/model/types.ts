export interface SignUpLayoutProps {
  children: React.ReactNode;
}

export interface SignUpState {
  nickname: string;
  birthYear: string;
  gender: string;
}

export interface SignUpStepProps {
  step: SignUpState;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof SignUpState,
  ) => void;
  onClickReset?: () => void;
  goNext: () => void;
}

export interface SignUpContextProps {
  state: SignUpState;
  setState: (state: SignUpState) => void;
}

export interface PreviousButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}

export type NicknameErrorType =
  | "specialCharacter"
  | "length"
  | "duplicate"
  | null;
