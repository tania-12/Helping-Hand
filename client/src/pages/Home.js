import helpingHand from './HelpingHand1.png';


function Home() {

  return (
    <div className = "landingPage">
      <img className = "mainImage" alt="helping" src = {helpingHand} />
      <div className = "LPcontainer1">
        <span></span>
      <h1 className = "LPTitle">What we're about</h1>
      <div className = "LPcontainer">
        
        <div className = "block">
        </div>
        <div className = "block1">
          <p className = "aboutHH">Helping hand is a platform that allows users to find volunteer sites with ease. With the click of a button you can add the event of your choosing
          to your calendar. Get connected with us today and start lending a hand</p>
        </div>
        <div className = "block">
        </div>
      </div>
      <div className = "block2">
      </div>
      </div>
    </div>
    
  );
}
export default Home;