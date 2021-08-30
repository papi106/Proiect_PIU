import React from 'react'
const Home = () => {
  return (
    <div className="container">

    <h1 className="text-center" style={{paddingTop: "5%"}}>
      Welcome to the <b>Web Grocery List</b> website! 
    </h1>

    <h2 className="text-center" style={{paddingTop: "5%"}}>
      Here you can <i><u>add</u></i>, <i><u>delete</u></i> or <i><u>edit</u></i> the food you want to buy later.
    </h2>

    <h3 className="text-center" style={{paddingTop: "5%"}}>
      To do this, go to the <a href="/grocery"><i><b>Grocery List</b></i></a> tab and try to <i><u>add</u></i>, 
      <i><u>delete</u></i> or <i><u>edit</u></i> one of your items.
      <br />
      After you completed the list, enjoy shopping ! 
    </h3>

    <h3 className="text-center" style={{paddingTop: "3%"}}>
      If you want to contact me, go to the <a href="/contact"><i><b>Contact Us</b></i></a> tab and watch the informations from that page.
      I hope this application will help you !
    </h3>
    
  </div>
  )
}
export default Home;