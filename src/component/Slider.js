import '../style/slider.css'
function Slider()
{
    const obj = [
    {
            title : "Blogging Website",
            
            gist :"I developed a blogging website,where a user can create ,delete post and see their dashboard.",
            tech:"#nodejs #MangoDB #expressjs",
            url:"https://github.com/Sakthisaba/Beelog"
        },
        {
            title : "Emotion based Music player",
            
            gist :"This app detectathe user's emotion and play songs according to their emotion",
            tech:"#Android #Flask",
            url:"https://github.com/Sakthisaba/MoodSwing"
        },
        {
            title : "BaaS",
            
            gist :"Blockchain as a Storage,Using ipfs and blockchian technology user can upload unlimited data in Blockchain",
            tech:"#ethereum #ipfs #solidity #react",
            url:"https://github.com/Sakthisaba/Web3.0"
        }
       
    ]
  const Cards = obj.map((list)=>(
    
    <div className="column">
    <div className="card">
      <h3>{list.title}</h3>
      <p>{list.gist}</p>
      <p className='stack'>{list.tech}</p>
      <a href={list.url}> Code</a>
    </div>
  </div>

  ))
  function github()
  {
    window.location.href = "https://github.com/Sakthisaba/";
  }
  
    return (
        <>
        
        <div className='Projects'>
        <span>Some Things I’ve Built.</span>
        <div className="row">
            
       {Cards}
        </div>
        
        </div>
        <p className='hover'onClick={github}>more on my github^</p></>
    )
}

export default Slider;