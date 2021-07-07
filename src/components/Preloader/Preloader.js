import preloadSvg from './Rolling-1s-200px.svg'
import s from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={s.preloaderWrap}>
      <img className={s.preloader} src={preloadSvg}/>
    </div>
  );
};

export default Preloader;