import { ThreeCircles } from 'react-loader-spinner';

import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.container}>
      <ThreeCircles
        className={s.loader}
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
