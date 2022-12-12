import helpingHand from './HelpingHand1.png';


function Home() {

  return (
    <div className = "landingPage">
      <img className = "mainImage" alt="helping" src = {helpingHand} />

      <h1 className = "LPTitle">What we're about</h1>
      <div className = "LPcontainer">
        
        <div className = "block">
        </div>
        <div className = "block1">
          <p className = "aboutHH">Helping hand is a platform that allows users to find volunteer sites with ease. Get connected with us now</p>
        </div>
        <div className = "block">
        </div>
      </div>
      <div className = "footer">
      </div>
    </div>
    
  );
}
export default Home;