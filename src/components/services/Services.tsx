import React from 'react'
import s from './services.module.css'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'

export default function Services() {
  return (
    <div className={s.services}>
      <div className={s.text}>
            <h2><span>OUR</span><br />SERVICES</h2>
            <p>Vivamus molestie dui vel varius auctor. Mauris interdum, libero ut efficitur gravida, orci lectus eleifend erat, nec pellentesque massa odio at nulla. Cras id pharetra orci, lacinia aliquet metus.</p>
            <div className={s.line}></div>
      </div>
      <div className={s.table}>
            <div className={s.element}>
                <img src={img1} alt="" />
                <h2>BRANDING</h2>
                <div className={s.element_line}></div>
                <p>Curabitur aliquet, metus quis ornare semper, magna nibh tincidunt ante, et congue lectus dui vitae enim. Aliquam id accumsan erat.</p>
            </div>
            <div className={s.element}>
                <img src={img2} alt="" />
                <h2>PHOTOGRAPHY</h2>
                <div className={s.element_line}></div>
                <p>Sed mattis ipsum leo, et tincidunt erat ullamcorper ut. Fusce cursus odio mi, ut aliquam magna dapibus a. Vivamus auctor tempor odio id ornare.</p>
            </div>
            <div className={s.element}>
                <img src={img3} alt="" />
                <h2>ANIMATION</h2>
                <div className={s.element_line}></div>
                <p>Fusce ac molestie mi. Fusce at lacinia erat. Nam sodales blandit ornare. Suspendisse erat eros, dignissim nec mattis at, imperdiet et urna.</p>
            </div>
            <div className={s.element}>
                <img src={img4} alt="" />
                <h2>GENERATE IDEAS</h2>
                <div className={s.element_line}></div>
                <p>Vivamus molestie dui vel varius auctor. Mauris interdum, libero ut efficitur gravida, orci lectus eleifend erat, nec pellentesque massa odio at nulla.</p>
            </div>
      </div>
      <div className={s.bg_rect}></div>
      <div className={s.bg_services}>ERVICES</div>
      <div className={s.bg}></div>
    </div>
  )
}
