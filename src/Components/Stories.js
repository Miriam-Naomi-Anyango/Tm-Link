import './stories.css';
import React from 'react'

function Stories () {
  return (
    <>
   <div className="Moringa3">
       <div className="Stories">
           <span><strong>Stories</strong><sub>so many stories</sub></span>
       </div>
       <div className="stories1">
           <img className="img2" src="https://pbs.twimg.com/media/DGDQl7LXUAAC-FZ?format=jpg&name=4096x4096" height="397" width="585" />
           <div className="orientation">
               <h2>Orientation day</h2>
               <p>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Nam est purus, consectetur <br />
                sit frin bot. <br />
                <a href="#" target="blank"></a>
                <button className="btn">See Album</button>
               </p>
           </div>
       </div>
   </div>

  <div className="Moringa4">
       <div className="Board">
           <h2><span className ="Board1">Board</span><span className ="Meeting">Meeting</span></h2>
           <p>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Nam est purus, consectetur <br />
            sit frin bot. <br />
           </p><br />
           <button className="btn">Read out Stories</button>
       </div>
       <div>
           <img className="img3" src="https://www.itechnewsonline.com/wp-content/uploads/2022/05/IMGL1127.jpg" height="397" width="585" />
       </div>
  </div>
   
   <div className="Moringa5">
       <div>
           <img className="img4" src="https://pbs.twimg.com/media/EDyDURfXoAAkor8.jpg:large" height="397" width="585" />
       </div>
       <div className="graduation">
           <h2>Graduation Party.</h2>
           <p>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Nam est purus,consectetur <br />
            sit frin bot. <br />
            <button className="btn">See Album</button>
           </p>
       </div>
    </div>
    </>
  )
}
export default Stories;