import Skeleton from 'react-loading-skeleton';

import { Flex } from './styles';

const CardStyle = {
  minWidth: 300,
  maxWidth: 350,
  height: 200,
  borderRadius: 10,
};

const DescriptionStyle = {
  width: 200,
  height: 50,
  borderRadius: 5,
};

const Loading = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((item, i) => (
        <Flex key={i}>
          <Skeleton style={CardStyle} />
          <Skeleton style={DescriptionStyle} />
        </Flex>
      ))}
    </>
  );
};

export default Loading;
