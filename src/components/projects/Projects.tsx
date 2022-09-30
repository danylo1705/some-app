import React from 'react'
import { text } from 'stream/consumers'
import s from './projects.module.css'
import img from './icons8-search.svg'

export default function Projects() {
  return (
    <div className={s.projects}>
        <div className={s.text}>
            <h2><span>OUR</span><br/>PROJECTS</h2>
            <ul>
                <li>show all</li>
                <li>branding</li>
                <li>photography</li>
                <li>animation</li>
                <li>ui/ux design</li>
            </ul>
        </div>
        <div className={s.photos}>
          <div className={s.item1}>
            <div className={s.item_anim}>
              <img src={img} alt="" />
              <h2>CREATIVE CARDS</h2>
              <p>BRANDING, ANIMATION</p>
            </div>
          </div>
          <div className={s.item2}>
            <div className={s.item_anim}>
              <img src={img} alt="" />
              <h2>CREATIVE CARDS</h2>
              <p>BRANDING, ANIMATION</p>
            </div>
          </div>
          <div className={s.item3}>
            <div className={s.item_anim}>
              <img src={img} alt="" />
              <h2>CREATIVE CARDS</h2>
              <p>BRANDING, ANIMATION</p>
            </div>
          </div>
          <div className={s.item4}>
            <div className={s.item_anim}>
              <img src={img} alt="" />
              <h2>CREATIVE CARDS</h2>
              <p>BRANDING, ANIMATION</p>
            </div>
          </div>
        </div>
        <div className={s.bg_rect}></div>
        <div className={s.bg_orks}>ORKS</div>
    </div>
  )
}
