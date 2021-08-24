import React from 'react'
const Home = () => {
  return (
    <div className="container">
    
    <h1 className="text-center" style={{paddingTop: "2%"}}>
      Home Page
    </h1>

    <h2 className="text-center" style={{paddingTop: "3%"}}>
      Welcome to the <b>Web Grocery List</b> website, where you can <i>add</i>, <i>delete</i> or <i>edit</i> the food you want to buy later.
    </h2>

    <h3 className="text-center" style={{paddingTop: "10%"}}>
      Go to the <i><b>Grocery List</b></i> tab and try to add, delete or edit one of your items.
      <br />
      After you completed your list, enjoy shopping! 
    </h3>

    <h3 className="text-center" style={{paddingTop: "5%"}}>
      If you want to contact us, just press click on the <i><b>Contact Us</b></i> tab and watch the informations from that page.
    </h3>
    
  </div>
  )
}
export default Home;