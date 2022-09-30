import React from 'react'
import s from './header.module.css'
import Navbar from '../layout/navbar/navbar'


export default function Header() {
  return (
    <header>
        <div className={s.container}>
          <div className={s.header_content}>
            <p className={s.left_link}>WE ANTICA</p>
            <div className={s.header_text}>
              <h2>The typeface doesn't really matter, as long as the <span>text is good</span>. </h2>
              <div className={s.line_author}>
                <div className={s.header_line}></div>
                <p>-JOHN MAEDA</p>
              </div>
              <a className={s.learn_m}>
                <p>learn more</p>
                <img src="http://demo.qodearena.com/projects/anticahtml/img/arrow_yellow.png" alt="" />
              </a>
            </div>
            <p className={s.right_link}>GET IN TOUCH</p>
          </div>
        </div>

          <div className={s.bg}></div>
          <div className={s.bg_rect}></div>
          <div className={s.bg_txt}>
            <p>ntica</p>
          </div>

    </header>
  )
}
