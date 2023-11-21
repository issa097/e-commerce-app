import "./spinner.css"

const Spinner = () => {
  const dots = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
  return (
    <div className="spinner">
      <div className="dots">
        {dots.map((d) => (
          <div
            className="dot"
            key={d}
            style={{
              transform: `rotate(${
                d * (360 / dots.length)
              }deg) translateY(35px)`,
              animationDelay:`${d*0.1}s`
            }}
          ></div>
        ))}
      </div>
      
    </div>
  );
};

export default Spinner;
