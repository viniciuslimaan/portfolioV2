import Skeleton from 'react-loading-skeleton';

const CardStyle = {
  width: 300,
  height: 300,
  borderRadius: 10,
};

const Loading = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((item, i) => (
        <Skeleton style={CardStyle} key={i} />
      ))}
    </>
  );
};

export default Loading;
