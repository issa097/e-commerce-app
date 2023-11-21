const Headingtitle = ({ title }) => {
  return (
    <div style={wrapperstyle}>
      <h2 style={titlestyle} className="title">{title}</h2>
    </div>
  );
};


const wrapperstyle ={
    marginRight:'20px',
    marginTop:'40px'
}
const titlestyle={
    color:'var(--primary-color)'
}
export default Headingtitle;
