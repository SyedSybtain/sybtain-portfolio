import { useState } from 'react'
import sybtainLogo from './assets/sybtain.jpg'


function App() {
  const languages = ["Python" ,"JavaScript", "Matlab", "PostgreSQL", "C/C++", "Assembly", "Verilog", "VHDL"]
  const frameWorks = ["DJANGO","ReactJS","Pytorch", "TensorFlow", "Numpy", "Pandas", "Scikit-Learn", "Matplotlib", "OpenCV"]
  const techStack = ["Git/Github", "Docker", "AWS", "MySQL", "DJANGO", "DRF", "Raspberry Pi", "Integrating APIs"]
  const interests = ["AI", "ML", "GenAI", "NLP", "Computer Vision", "IoT", "LLM’s", "Fine Tuning AI Models", "Integrating AI with WEB"]
  const [show,setShow] = useState(false)

  return (
    <div className='bg-[url(https://i.pinimg.com/originals/8e/46/15/8e46150f790fbefe438d9c2767c32ad1.gif)] min-w-screen min-h-screen text-white font-mono p-4'>
      <div className=' min-w-screen min-h-screen bg-black bg-opacity-30 p-4 rounded-2xl flex flex-col border-2'>

        <div className='min-w-[90%] max-w-[90%] h-max bg-sky-700 bg-opacity-0 p-2 rounded-xl flex flex-col items-center justify-center self-center'>
          <img className='rounded-full border-4 border-white min-w-[30%]' src={sybtainLogo} alt="" />
          <b>Syed Sybtain Bukhari</b>
          <p>Python Full Stack Developer</p>
        </div>

        <div className='flex flex-col bg-slate-800 min-w-[90%] max-w-[90%] rounded mt-4 p-4 border-4 border-white self-center bg-opacity-0'>
          <div className='bg-neutral-900 p-4 self-center rounded min-w-[90%] max-w-[90%] bg-opacity-[90%]'>
            <b className='text-4xl font-mono'>About MySelf</b>
            <p className='text-mono'>I amComputer Engineer Graduated from Comsats University Islamabad. I have passion in AI, NLP, GenAI,
                Computer Vision and Python Development. This Passion leads me to do projects in these domains to learn
                advanced techniques and contribute in projects for the benefits of Society.
            </p>
          </div>

          <div className='bg-neutral-900 p-4 self-center rounded min-w-[90%] max-w-[80%] mt-2 bg-opacity-[50%]'>
            <b className='text-4xl font-mono'>Eucation</b>
              <li className='font-bold'>BS Computer Engineering</li>
              <p>Comsats University Isalamabad</p>
              <p>Aug 2019–July 2023 📆</p>
          </div>

          <div className='bg-neutral-900 p-4 self-center rounded min-w-[90%] max-w-[90%] mt-2 bg-opacity-[50%]'>
            <b className='text-4xl font-mono'>Projects</b>
              <div className='flex flex-col'>
                <div className='min-w-[90%] max-w-[90%] self-start bg-indigo-400 p-2 rounded-xl mb-2 bg-opacity-[50%]'>
                  <b className='font-bold text-black'>FYP-AUTOMATIC VEHICLECHECK-INCHECK-OUT USING IOT AND DEEPLEARNING</b>
                  <p>This was my FYP Project to develop a smart system for Campus vehicles entering at the gate. Using IoT we limit the
                    functionality of Camera and then deploy YOLOv7 model on Raspberry Pi to detect Vehicle Type,License Plate and
                    Individual License Characters and Store results for Logging.</p>
                </div>
                <div className='min-w-[90%] max-w-[90%] self-end bg-indigo-400 p-2 rounded-xl mb-2 bg-opacity-[50%]'>
                  <b className='font-bold self-start text-black'>ANCIENT ROMAN COIN CLASSIFICATION USING DEEPLEARNING</b>
                  <p>Trained and Analyze the Performance of Yolov3, Yolov4, Yolov5, Yolov7 and Yolov8 for Classification of Roman Coins.
                    I Contributed with Training and Fine Tuning of Different Model Versions and Sizes.</p>
                </div>
                <div className='min-w-[90%] max-w-[90%] self-start bg-indigo-400 p-2 rounded-xl bg-opacity-[50%]'>
                  <b className='font-bold self-start text-black'>REMOTE FIRE AND SMOKE DETECTION</b>
                  <p>Developed a Real-Time Yolov5 model of different sizes to detect the smoke and fire for remote safety application.</p>
                </div>
              </div>
          </div>

          <div className='bg-neutral-900 p-4 self-center rounded min-w-[70%] mt-2 bg-opacity-[50%]'>
            <b className='text-4xl font-mono'>Skills</b>
              <div className='flex flex-col'>
                <div className='min-w-[40%] max-w-[80%] self-start bg-sky-900 p-2 rounded-xl mb-2 bg-opacity-[50%]'>
                  <b className='font-bold font-mono'>Languages</b>
                  {languages.map((lang,ind) => <li key={ind}>{lang}</li>  )}
                </div>
                <div className='min-w-[40%] max-w-[80%] self-end bg-sky-900 p-2 rounded-xl mb-2 bg-opacity-[50%]'>
                  <b className='font-bold font-mono'>FrameWorks</b>
                  {frameWorks.map((fw,ind2) => <li key={ind2}>{fw}</li>  )}
                </div>
                <div className='min-w-[40%] max-w-[80%] self-start bg-sky-900 p-2 rounded-xl bg-opacity-[50%]'>
                  <b className='font-bold self-start font-mono'>Tech-Stack</b>
                  {techStack.map((ts,ind3) => <li key={ind3}>{ts}</li>  )}
                </div>
              </div>
          </div>

          <div className='bg-neutral-900 p-4 self-center rounded min-w-[30%] mt-2 bg-opacity-[50%]'>
            <b className='text-4xl font-mono'>Interests</b>
              {interests.map((intrs,ind4) => <li key={ind4}>{intrs}</li>  )}
          </div>

          
        </div>

        <div className='bg-slate-900 min-w-[100%] max-w-[100%] self-center m-4 p-2 rounded text-center'>
          <b className='text-4xl'>Personal Info/Links</b>  <button className='hover:scale-150 text-4xl' onClick={() => setShow(!show)}> {show ? "🙈" : "👀"} </button>
          <div className={show ? 'flex flex-col items-start text-start' : 'flex flex-col items-start blur-sm text-start'}>
            <div>Email : <a href="mailto:sybtainsyed@gmail.com">sybtainsyed@gmail.com 📩</a> </div>
            <div>Phone : 03458843285 📞  </div>
            <div>LinkedIn : <a href="https://www.linkedin.com/in/syed-sybtain/">My LinkedIn 🖇️ </a> </div>
            <div>GitHub : <a href="https://github.com/SyedSybtain">My Github 🖇️ </a> </div>
            <div>Address : KPK, Pakistan 📌 </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
