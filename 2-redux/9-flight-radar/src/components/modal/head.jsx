import { useDispatch } from "react-redux";
import { close } from "../../redux/slices/detailSlice";
import c from "../../utils/null-check";

const Head = ({ isLoading, info, error }) => {
  const dispatch = useDispatch();

  return (
    <div className="head">
      {isLoading || error ? (
        <div className="head-skeleton">
          <div />
          <span />
          <span />
        </div>
      ) : (
        <div>
          <h3 title="Çağrı İşareti">{c(info?.identification?.callsign)}</h3>
          <span title="Uçuş Numarası">{c(info?.identification?.number?.default)}</span>
          <span title="Uçak Tip Kodu">{c(info?.aircraft?.model?.code)}</span>
        </div>
      )}

      <button onClick={() => dispatch(close())}>X</button>
    </div>
  );
};

export default Head;
