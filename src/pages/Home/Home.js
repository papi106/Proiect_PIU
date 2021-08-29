import React from 'react'
const Home = () => {
  return (
    <div className="container">

    <h2 className="text-center" style={{paddingTop: "10%"}}>
      Welcome to the <b>Web Grocery List</b> website, where you can <i><u>add</u></i>, 
      <i><u>delete</u></i> or <i><u>edit</u></i> the food you want to buy later.
    </h2>

    <h3 className="text-center" style={{paddingTop: "5%"}}>
      Go to the <a href="/grocery"><i><b>Grocery List</b></i></a> tab and try to <i><u>add</u></i>, 
      <i><u>delete</u></i> or <i><u>edit</u></i> one of your items.
      <br />
      After you completed your list, enjoy shopping! 
    </h3>

    <h3 className="text-center" style={{paddingTop: "5%"}}>
      If you want to contact us, just press click on the <a href="/contact"><i><b>Contact Us</b></i></a> tab and watch the informations from that page.
    </h3>
    
  </div>
  )
}
export default Home;