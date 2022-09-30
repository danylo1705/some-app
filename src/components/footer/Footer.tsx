import React from 'react'
import s from './footer.module.css'

export default function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.left_col}>
            <h2><span>GET IN</span><br />TOUCH</h2>
            <div className={s.contacts}>
                <p>EMAIL<br /><span>antica.team@gmail.com</span></p>
                <p>PHONE<br /><span>+1 650 555-1234<br />+1 650 385-6712</span></p>
            </div>
        </div>
        <div className={s.right_col}>
            <div className={s.form}>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Subject' />
                <textarea placeholder='Message' ></textarea>
                <button>send <img src="http://demo.qodearena.com/projects/anticahtml/img/arrow_yellow.png" alt="" /></button>
            </div>
            <p>Antica © 2016. Design by <span>QodeArena</span></p>
        </div>
        <div className={s.bg}></div>
        <div className={s.bg_rect}></div>
          <div className={s.bg_txt}>ONTACTS</div>
    </div>
  )
}
