import React from "react"
import Directory from "./components/directory/Directory"
const App = () => {
  const category = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ]

  return (
    <React.Fragment>
      <div className='categories-container'>
        <Directory categories={category} />
      </div>
    </React.Fragment>
  )
}
export default App
