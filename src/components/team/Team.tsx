import React from 'react'
import s from './team.module.css'
import img1 from './icons8-facebook.svg'
import img2 from './icons8-instagram.svg'
import img3 from './icons8-twitter.svg'


export default function Team() {
  return (
    <div className={s.team}>
      <div className={s.text}>
            <h2><span>OUR</span><br />TEAM</h2>
            <p>Vivamus molestie dui vel varius auctor. Mauris interdum, libero ut efficitur gravida, orci lectus eleifend erat, nec pellentesque massa odio at nulla. Cras id pharetra orci, lacinia aliquet metus.</p>
            <div className={s.line}></div>
      </div>
      <div className={s.table}>
        <div className={s.item1}>
          <div className={s.anim}>
          <h2>NATHAN BATES</h2>
          <p>UI/UX DESIGNER</p>
          <div className={s.photos}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          </div>
        </div>
        <div className={s.item2}>
        <div className={s.anim}>
          <h2>NATHAN BATES</h2>
          <p>UI/UX DESIGNER</p>
          <div className={s.photos}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          </div>
        </div>
        <div className={s.item3}>
        <div className={s.anim}>
          <h2>NATHAN BATES</h2>
          <p>UI/UX DESIGNER</p>
          <div className={s.photos}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          </div>
        </div>
        <div className={s.item4}>
        <div className={s.anim}>
          <h2>NATHAN BATES</h2>
          <p>UI/UX DESIGNER</p>
          <div className={s.photos}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          </div>
        </div>
        <div className={s.item5}>
        <div className={s.anim}>
          <h2>NATHAN BATES</h2>
          <p>UI/UX DESIGNER</p>
          <div className={s.photos}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          </div>
        </div>
        <div className={s.item6}>
        <div className={s.anim}>
          <h2>NATHAN BATES</h2>
          <p>UI/UX DESIGNER</p>
          <div className={s.photos}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className={s.bg_rect}></div>
      <div className={s.bg_members}>EMBERS</div>
      <div className={s.bg}></div>
    </div>
  )
}
