interface ShareProps {
  title: string;
  text: string;
  url: string;
}

const shareContent = async (props: ShareProps) => {
  console.log(props);
};

export default shareContent;
