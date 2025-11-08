interface ShareProps {
  title: string;
  text: string;
  url: string;
}

const shareContent = async (props: ShareProps) => {
  const { title, text, url } = props;

  const shareData = {
    title,
    text,
    url,
  }

  // Web Share API를 지원하는지 확인
  if (navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      // 사용자가 공유를 취소한 경우 (AbortError)는 무시
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("공유 중 오류 발생:", error);
        fallbackShare(url);
      }
    }
  } else {
    // Web Share API를 지원하지 않는 브라우저의 경우 클립보드에 복사
    fallbackShare(url);
  }
};

// Fallback: 클립보드에 URL 복사
const fallbackShare = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url);
    alert("링크가 클립보드에 복사되었습니다!");
  } catch (error) {
    console.error("클립보드 복사 실패:", error);
    // 클립보드 API도 실패한 경우 텍스트 선택 방식 사용
    const textArea = document.createElement("textarea");
    textArea.value = url;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      alert("링크가 클립보드에 복사되었습니다!");
    } catch (err) {
      console.error("복사 실패:", err);
      alert("공유에 실패했습니다. URL을 직접 복사해주세요: " + url);
    }
    document.body.removeChild(textArea);
  }
};

export default shareContent;
