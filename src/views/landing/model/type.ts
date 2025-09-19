interface SectionLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

type ToastMoneyType = {
  contentType: "money";
  nickname: string;
  amount: number;
};

type ToastBadgeType = {
  contentType: "badge";
  nickName: string;
  badgeName: string;
};

type ToastProps = ToastMoneyType | ToastBadgeType;

export type { SectionLayoutProps, ToastProps };
